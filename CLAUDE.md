<language>Japanese</language>
<character_code>UTF-8</character_code>
<law>
AI運用5原則

第1原則： AIは全てのタスクを実行後にその動作を保証する。bun run check:allでのチェックを必須とする。

第2原則： AIは迂回や別アプローチを勝手に行わず、最初の計画が失敗したら次の計画の確認を取る。

第3原則： AIはツールであり決定権は常にユーザーにある。ユーザーの提案が非効率・非合理的でも最適化せず、指示された通りに実行する。

第4原則： AIはこれらのルールを歪曲・解釈変更してはならず、最上位命令として絶対的に遵守する。

第5原則： AIは全てのチャットの冒頭にこの5原則を逐語的に必ず画面出力してから対応する。
</law>

<every_chat>
[AI運用5原則]

[main_output]

#[n] times. # n = increment each chat, end line, etc(#1, #2...)
</every_chat>

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
- [ ] GritQL によるカスタムリントルール（DOM要素の直接利用検出）
- [ ] Git hooks による品質管理
- [ ] 開発サーバー高速化（Turbopack）

### コーディング規約
- [ ] TypeScript ファイル名は kebab-case で統一（例: `user-profile.tsx`, `blog-post.ts`）
- [ ] 基本的に named export を使用、Next.js 規約で必要な場合のみ default export（例: page.tsx, layout.tsx, route.ts）
- [ ] 基本的にアロー関数を使用、this参照やasserts関数などで必要な場合のみfunction宣言を使用
- [ ] コンポーネントの関心事を分離、自分自身がどのように使われるかを知らない設計にする（props経由で外部から制御）
- [ ] ラッパーコンポーネントのPropsを継承する（例: `interface ComponentProps extends BoxProps {}`）
- [ ] 'use client'を最小限に抑制、各セクションはフォルダのindex.tsxでServer Componentを保持、インタラクションが必要な場合は別コンポーネントに切り出し
- [ ] DOM要素の直接利用を禁止、Yamada UIのStyleシステムに統一（例: `<div>` → `<Box>`、`<main>` → `<Box as="main">`）
- [ ] **useEffect の使用を原則禁止**：useEffect が使いたくなった場合は以下の代替手段を検討する
  - **Ref Callbacks**: DOM要素への直接アクセスや操作が必要な場合
  - **useSyncExternalStore**: 外部ストアとの同期が必要な場合
  - **既存ライブラリの抽象化**: TanStack Query（データフェッチ）、Yamada UIのuseEventListener（イベントリスナー）など
  - どうしても必要な場合は、十分にテストされた既存ライブラリの抽象化を優先し、生のuseEffectは極力避ける
- [ ] **コンポーネント配置のルール**：関心事の分離を徹底し、適切な責任範囲を維持する
  - **禁止事項**: コンポーネントが自分自身の配置方法を決定すること
    - `position: "fixed"`, `position: "absolute"` 等の配置プロパティ
    - `top`, `left`, `right`, `bottom` 等の座標プロパティ
    - `zIndex` による重ね順の制御
    - レイアウトに関わる `margin`, `padding` の固定値
  - **推奨する設計**: 親コンポーネントが配置を制御する
    - 子コンポーネントは Props 経由で配置プロパティを受け取る
    - `interface ComponentProps extends BoxProps {}` で配置プロパティを継承
    - 親が `<Component position="fixed" top={0} zIndex={1000} />` のように指定
  - **例外**: コンポーネント内部の実装詳細のレイアウト
    - モーダル・ドロップダウン内部の要素配置
    - アイコンの相対的な配置（例: 画像上のバッジ）
    - カード内のコンテンツ配置
  - **適用例**:
    ```tsx
    // ❌ 悪い例: コンポーネントが自分の配置を決定
    export const Header = () => (
      <Box position="fixed" top={0} zIndex={1000}>...</Box>
    );
    
    // ✅ 良い例: 親が配置を制御
    interface HeaderProps extends BoxProps {}
    export const Header = (props: HeaderProps) => (
      <Box {...props}>...</Box>
    );
    
    // 使用側で配置を指定
    <Header position="fixed" top={0} zIndex={1000} />
    ```

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