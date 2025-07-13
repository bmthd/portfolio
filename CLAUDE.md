# ポートフォリオサイト要件定義 (bmthd)

## 基本情報
- 開発者: bmthd (GitHub: github.com/bmthd)
- プロジェクト名: portfolio
- フレームワーク: Next.js 15 + React 19
- UI ライブラリ: Yamada UI
- 言語: TypeScript

## 技術スタック
- **パッケージマネージャー**: Bun
- **フロントエンド**: Next.js 15, React 19, TypeScript
- **UI ライブラリ**: Yamada UI
- **スタイリング**: Yamada UI Style Prop
- **開発ツール**: Biome (Linter/Formatter), Lefthook (Git hooks)
- **ビルド**: Next.js (静的サイト生成対応)

## サイト構成要件

### 1. ヘッダー・ナビゲーション
- [ ] ロゴ/名前表示
- [ ] メニュー（Home, About, Skills, Projects, Contact）
- [ ] レスポンシブハンバーガーメニュー
- [ ] スムーススクロールナビゲーション

### 2. ヒーローセクション
- [ ] 自己紹介文
- [ ] プロフィール画像
- [ ] CTAボタン（Contact/Projects へのリンク）
- [ ] アニメーション効果

### 3. About セクション
- [ ] 詳細な自己紹介
- [ ] 経歴・バックグラウンド
- [ ] 趣味・興味分野

### 4. Skills セクション
- [ ] 技術スキル一覧
- [ ] プログラミング言語
- [ ] フレームワーク・ライブラリ
- [ ] ツール・環境
- [ ] スキルレベル表示（視覚的）

### 5. Projects セクション
- [ ] プロジェクト一覧表示
- [ ] 各プロジェクト詳細（タイトル、説明、技術スタック、リンク）
- [ ] GitHub リポジトリリンク
- [ ] Live Demo リンク
- [ ] プロジェクト画像・スクリーンショット

### 6. Contact セクション
- [ ] お問い合わせフォーム
- [ ] SNS リンク（GitHub, Twitter, LinkedIn等）
- [ ] メールアドレス

### 7. フッター
- [ ] コピーライト表示
- [ ] SNS アイコン
- [ ] 上に戻るボタン

## デザイン要件

### UI/UX
- [ ] レスポンシブデザイン（Mobile First）
- [ ] ダークモード対応
- [ ] アクセシビリティ対応
- [ ] 読み込み速度最適化
- [ ] SEO対応

### ビジュアル
- [ ] モダンでクリーンなデザイン
- [ ] 適切なタイポグラフィ
- [ ] 統一されたカラーパレット
- [ ] アニメーション・トランジション効果

## 技術要件

### パフォーマンス
- [ ] 静的サイト生成（SSG）
- [ ] 画像最適化
- [ ] コード分割
- [ ] Core Web Vitals 最適化

### 開発体験
- [ ] TypeScript 型安全性
- [ ] Biome による自動フォーマット・リント
- [ ] Git hooks による品質管理
- [ ] 開発サーバー高速化（Turbopack）

### コーディング規約
- [ ] TypeScript ファイル名は kebab-case で統一（例: `user-profile.tsx`, `blog-post.ts`）
- [ ] 基本的に named export を使用、Next.js 規約で必要な場合のみ default export（例: page.tsx, layout.tsx, route.ts）
- [ ] 基本的にアロー関数を使用、this参照やasserts関数などで必要な場合のみfunction宣言を使用
- [ ] コンポーネントの関心事を分離、自分自身がどのように使われるかを知らない設計にする（props経由で外部から制御）
- [ ] ラッパーコンポーネントのPropsを継承する（例: `interface ComponentProps extends BoxProps {}`）

### デプロイ
- [ ] Vercel/Netlify 等での自動デプロイ
- [ ] カスタムドメイン設定
- [ ] HTTPS 対応

## コンテンツ要件
- [ ] プロフィール写真
- [ ] プロジェクト画像・スクリーンショット
- [ ] スキル・技術アイコン
- [ ] 経歴・実績データ
- [ ] お問い合わせ先情報

## 開発コマンド
```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm run start

# リント・フォーマット
npm run lint
npm run format
```

## 今後の拡張予定
- [ ] ブログ機能
- [ ] 多言語対応（日本語・英語）
- [ ] CMS 連携
- [ ] Analytics 導入