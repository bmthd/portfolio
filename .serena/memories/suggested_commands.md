# 開発用コマンド一覧

## 基本開発コマンド
```bash
# 開発サーバー起動（Turbopack使用）
bun run dev

# ビルド
bun run build

# 本番サーバー起動
bun run start
```

## コード品質管理
```bash
# リント（自動修正付き）
bun run lint

# フォーマット（自動修正付き）
bun run format

# 全品質チェック実行
bun run check:all

# 個別チェック
bun run check:lint      # リントチェック
bun run check:format    # フォーマットチェック
bun run check:type      # 型チェック
bun run check:similarity # コード重複チェック
```

## Git Hooks（Lefthook）
- pre-commit時に自動実行:
  - `check:lint`
  - `check:format` 
  - `check:similarity`

## システムコマンド（Linux）
```bash
# ファイル操作
ls          # ディレクトリ一覧
cd <dir>    # ディレクトリ移動
grep        # テキスト検索
find        # ファイル検索

# Git操作
git status  # 状態確認
git add     # ステージング
git commit  # コミット
git push    # プッシュ
```

## GritQLパターン
プロジェクトには以下のカスタムリントルールが設定されています:
- `no_use_effect.grit` - useEffect使用禁止
- `no_lowercase_jsx_components.grit` - 小文字JSXコンポーネント禁止
- `no_direct_next_link.grit` - 直接Next/Link使用禁止（カスタムNextLink使用）