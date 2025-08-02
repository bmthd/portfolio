# 開発ツール設定情報

## Biome設定（biome.json）
- **対象ファイル**: src/**/*.{ts,tsx,js,jsx}
- **フォーマッター**: タブインデント、ダブルクォート
- **リンター**: recommendedルール有効
- **自動機能**: インポート整理自動実行

## TypeScript設定（tsconfig.json）
- **ターゲット**: ES2017
- **モジュール**: esnext（bundler解決）
- **厳密モード**: 有効
- **パスエイリアス**: `@/*` → `./src/*`

## Lefthook設定（lefthook.yml）
pre-commit時に並列実行:
- リントチェック
- フォーマットチェック  
- コード重複チェック

## GritQLカスタムパターン
- `no_use_effect.grit` - useEffect使用検出
- `no_lowercase_jsx_components.grit` - 小文字JSXコンポーネント検出
- `no_direct_next_link.grit` - 直接Next/Link使用検出

## フォント設定
- **フォント**: BIZ UDPGothic（400, 700ウェイト）
- **言語**: 日本語対応
- **変数名**: --font-biz-udp-gothic

## パフォーマンス設定
- **開発サーバー**: Turbopack使用
- **ビルド**: Next.js静的サイト生成対応
- **型チェック**: tsgo使用（高速型チェック）