#!/usr/bin/env ruby
# Deploys this static app to Vercel via the REST API.

require "base64"
require "json"
require "net/http"
require "uri"

ROOT = File.expand_path("..", __dir__)
PROJECT_NAME = ENV.fetch("VERCEL_PROJECT", "bunkasai-ai-concierge")
TEAM_SLUG = ENV["VERCEL_TEAM_SLUG"]
TOKEN = ENV["VERCEL_TOKEN"]
FILES = [
  "index.html",
  "qr.html",
  "manifest.webmanifest",
  "sw.js",
  "vercel.json",
  "src/app.js",
  "src/styles.css",
  "assets/icon.svg"
].freeze

def abort_with(message)
  warn message
  exit 1
end

abort_with("VERCEL_TOKEN is required.") if TOKEN.to_s.strip.empty?

missing = FILES.reject { |path| File.file?(File.join(ROOT, path)) }
abort_with("Missing files: #{missing.join(", ")}") unless missing.empty?

files = FILES.map do |path|
  full_path = File.join(ROOT, path)
  {
    file: path,
    data: Base64.strict_encode64(File.binread(full_path)),
    encoding: "base64"
  }
end

payload = {
  name: PROJECT_NAME,
  project: PROJECT_NAME,
  target: "production",
  files: files,
  projectSettings: {
    framework: nil,
    buildCommand: nil,
    devCommand: nil,
    installCommand: nil,
    outputDirectory: "."
  }
}

def request_json(method, url, token, body = nil)
  uri = URI(url)
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = uri.scheme == "https"
  request = method == :post ? Net::HTTP::Post.new(uri) : Net::HTTP::Get.new(uri)
  request["Authorization"] = "Bearer #{token}"
  request["Content-Type"] = "application/json"
  request.body = JSON.generate(body) if body

  response = http.request(request)
  parsed = JSON.parse(response.body)
  unless response.code.to_i.between?(200, 299)
    abort_with("Vercel API error #{response.code}: #{JSON.pretty_generate(parsed)}")
  end
  parsed
rescue JSON::ParserError
  abort_with("Vercel API returned non-JSON response.")
end

query = "skipAutoDetectionConfirmation=1&forceNew=1"
query += "&slug=#{URI.encode_www_form_component(TEAM_SLUG)}" if TEAM_SLUG && !TEAM_SLUG.empty?

deployment = request_json(
  :post,
  "https://api.vercel.com/v13/deployments?#{query}",
  TOKEN,
  payload
)

id_or_url = deployment["id"] || deployment["url"]
abort_with("Deployment response did not include id or url.") unless id_or_url

ready_state = deployment["readyState"]
30.times do
  break if %w[READY ERROR CANCELED].include?(ready_state)

  sleep 2
  current = request_json(
    :get,
    "https://api.vercel.com/v13/deployments/#{URI.encode_www_form_component(id_or_url)}#{TEAM_SLUG ? "?slug=#{URI.encode_www_form_component(TEAM_SLUG)}" : ""}",
    TOKEN
  )
  deployment = current
  ready_state = deployment["readyState"]
  puts "readyState=#{ready_state}"
end

url = deployment["url"] || id_or_url
public_url = url.start_with?("http") ? url : "https://#{url}"

puts
puts "Deployment: #{public_url}"
puts "QR page:    #{public_url.sub(%r{/*$}, "")}/qr"
puts "State:      #{ready_state || "UNKNOWN"}"

exit(ready_state == "ERROR" || ready_state == "CANCELED" ? 1 : 0)
