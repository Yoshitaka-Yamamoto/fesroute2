# 文化祭AIコンシェルジュ

高校の文化祭で、来場者の持ち時間・予算・好みに合わせて出店、展示、ステージイベントのおすすめルートを提案するWebアプリです。

## ローカル起動

このMVPはビルド不要の静的アプリです。

```text
index.html
```

をブラウザで開くと動作します。

HTTPサーバーで確認する場合:

```sh
ruby -run -e httpd . -p 4173
```

その後、`http://localhost:4173/` を開きます。

## Vercelデプロイ

このプロジェクトはビルド不要の静的アプリとしてVercelへデプロイできます。

## GitHubへpush

この環境で `git` が使えない場合でも、GitHubのアクセストークンがあればAPI経由でpushできます。

```sh
GITHUB_TOKEN=github_pat_xxx ruby scripts/push_github.rb
```

既定のpush先は `Yoshitaka-Yamamoto/fesroute2` の `main` ブランチです。変更する場合:

```sh
GITHUB_TOKEN=github_pat_xxx GITHUB_REPO=owner/repo GITHUB_BRANCH=main ruby scripts/push_github.rb
```

トークンはファイルに保存しません。権限は対象リポジトリ限定の `Contents: Read and write` で足ります。

### Web UIでデプロイ

1. Vercelで新規プロジェクトを作成する
2. このディレクトリをインポートまたはアップロードする
3. Framework Presetは`Other`のままにする
4. Build Commandは空、Output Directoryは`.`にする
5. Deployする

### CLIでデプロイ

Node.jsとVercel CLIが使える環境では、プロジェクトルートで以下を実行します。

```sh
vercel deploy --prod
```

初回はVercelへのログインとプロジェクト紐付けを求められます。

### Node.jsなしでデプロイ

Vercelのアクセストークンを環境変数に入れると、Rubyだけでもデプロイできます。

```sh
VERCEL_TOKEN=vercel_xxx ruby scripts/deploy_vercel.rb
```

プロジェクト名を変える場合:

```sh
VERCEL_TOKEN=vercel_xxx VERCEL_PROJECT=my-project-name ruby scripts/deploy_vercel.rb
```

Team配下へ出す場合は `VERCEL_TEAM_SLUG` も指定します。トークンはファイルに保存しません。

## QRコード確認

デプロイ後、公開URLの末尾に `/qr` または `/qr.html` を付けて開くと、スマホ読み取り用のQRコードを表示できます。

例:

```text
https://your-project.vercel.app/qr
```

QRページの入力欄に任意の公開URLを貼ると、そのURLのQRコードに更新されます。

## スマホ対応

- レスポンシブUI
- PWA manifest
- Service Workerによる基本キャッシュ
- ホーム画面追加用アイコン

## 実装済み

- 条件入力
- 自然文相談の簡易パーサー
- 10件以上のサンプル企画データ
- ルールベース推薦
- 合計時間、合計予算、歩く量の表示
- 校内マップとルートピン表示
- 企画一覧と企画詳細
- スタンプラリー
- 管理画面での混雑、営業状態、価格、待ち時間、説明の更新
- おすすめ理由のスコア内訳表示
- `localStorage` 保存
- 初期データへのリセット
- Vercel向け静的デプロイ設定
- QRコード表示ページ
- PWA対応

## デモの見方

1. `index.html` を開く
2. 持ち時間、予算、好みを選ぶ
3. おすすめルートを確認する
4. 「管理」タブで混雑や売り切れを変更する
5. 「おすすめ」へ戻り、推薦結果が変わることを確認する

## 実運用の注意

- 名前、連絡先、健康情報などの個人情報は入力しない。相談文も端末に保存しない。
- 食品のアレルギー情報は、このアプリだけで判断せず、必ず各出店で確認する。
- おすすめやランキングは参考情報として扱い、掲示やスタッフの案内を優先する。
- 混雑している場所へ人を集中させないよう、運営側は混雑状況を見て案内を調整する。
- スマホを持っていない人向けに、紙の案内、掲示、受付での相談窓口も用意する。

## 注意

この環境では Node.js と npm が利用できなかったため、React + Vite ではなく依存なしの静的アプリとして実装しています。将来 React + Vite に移行する場合も、現在の企画データと推薦ロジックは分離しやすい構造です。
