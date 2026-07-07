#!/usr/bin/env ruby
# Pushes this static app to GitHub without requiring a local git binary.

require "base64"
require "json"
require "net/http"
require "uri"

ROOT = File.expand_path("..", __dir__)
REPO = ENV.fetch("GITHUB_REPO", "Yoshitaka-Yamamoto/fesroute2")
BRANCH = ENV.fetch("GITHUB_BRANCH", "main")
TOKEN = ENV["GITHUB_TOKEN"]
MESSAGE = ENV.fetch("GITHUB_COMMIT_MESSAGE", "Initial deployable web app")
FILES = [
  ".vercelignore",
  "README.md",
  "index.html",
  "qr.html",
  "manifest.webmanifest",
  "sw.js",
  "vercel.json",
  "src/app.js",
  "src/styles.css",
  "assets/icon.svg",
  "scripts/deploy_vercel.rb",
  "scripts/push_github.rb"
].freeze

def abort_with(message)
  warn message
  exit 1
end

abort_with("GITHUB_TOKEN is required.") if TOKEN.to_s.strip.empty?
abort_with("GITHUB_REPO must be owner/name.") unless REPO.include?("/")

missing = FILES.reject { |path| File.file?(File.join(ROOT, path)) }
abort_with("Missing files: #{missing.join(", ")}") unless missing.empty?

def github_request(method, path, body = nil, allow_not_found = false)
  uri = URI("https://api.github.com#{path}")
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true

  request =
    case method
    when :get then Net::HTTP::Get.new(uri)
    when :post then Net::HTTP::Post.new(uri)
    when :patch then Net::HTTP::Patch.new(uri)
    when :put then Net::HTTP::Put.new(uri)
    else abort_with("Unsupported method: #{method}")
    end

  request["Accept"] = "application/vnd.github+json"
  request["Authorization"] = "Bearer #{TOKEN}"
  request["X-GitHub-Api-Version"] = "2022-11-28"
  request["Content-Type"] = "application/json"
  request.body = JSON.generate(body) if body

  response = http.request(request)
  return nil if allow_not_found && [404, 409].include?(response.code.to_i)

  parsed = response.body && !response.body.empty? ? JSON.parse(response.body) : {}
  unless response.code.to_i.between?(200, 299)
    abort_with("GitHub API error #{response.code}: #{JSON.pretty_generate(parsed)}")
  end
  parsed
rescue JSON::ParserError
  abort_with("GitHub API returned non-JSON response.")
end

current_ref = github_request(:get, "/repos/#{REPO}/git/ref/heads/#{BRANCH}", nil, true)

unless current_ref
  readme_path = File.join(ROOT, "README.md")
  github_request(
    :put,
    "/repos/#{REPO}/contents/README.md",
    {
      message: "Initialize repository",
      content: Base64.strict_encode64(File.binread(readme_path)),
      branch: BRANCH
    }
  )
  current_ref = github_request(:get, "/repos/#{REPO}/git/ref/heads/#{BRANCH}", nil, true)
end

abort_with("Could not initialize or find branch #{BRANCH}.") unless current_ref

parent_sha = current_ref&.dig("object", "sha")
base_tree = nil

if parent_sha
  parent_commit = github_request(:get, "/repos/#{REPO}/git/commits/#{parent_sha}")
  base_tree = parent_commit.dig("tree", "sha")
end

tree_entries = FILES.map do |path|
  full_path = File.join(ROOT, path)
  blob = github_request(
    :post,
    "/repos/#{REPO}/git/blobs",
    {
      content: Base64.strict_encode64(File.binread(full_path)),
      encoding: "base64"
    }
  )
  {
    path: path,
    mode: "100644",
    type: "blob",
    sha: blob.fetch("sha")
  }
end

tree_payload = { tree: tree_entries }
tree_payload[:base_tree] = base_tree if base_tree
tree = github_request(:post, "/repos/#{REPO}/git/trees", tree_payload)

commit_payload = {
  message: MESSAGE,
  tree: tree.fetch("sha"),
  parents: parent_sha ? [parent_sha] : []
}
commit = github_request(:post, "/repos/#{REPO}/git/commits", commit_payload)

if parent_sha
  github_request(
    :patch,
    "/repos/#{REPO}/git/refs/heads/#{BRANCH}",
    {
      sha: commit.fetch("sha"),
      force: false
    }
  )
else
  github_request(
    :post,
    "/repos/#{REPO}/git/refs",
    {
      ref: "refs/heads/#{BRANCH}",
      sha: commit.fetch("sha")
    }
  )
end

puts "Pushed #{FILES.length} files to https://github.com/#{REPO}/tree/#{BRANCH}"
puts "Commit: #{commit.fetch("sha")}"
