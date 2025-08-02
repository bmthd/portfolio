# コーディング規約とスタイルガイド

## ファイル命名規則
- TypeScriptファイルはkebab-case（例: `user-profile.tsx`, `blog-post.ts`）
- コンポーネントディレクトリ名もkebab-case

## Export/Import規約
- 基本的にnamed exportを使用
- Next.js規約で必要な場合のみdefault export（page.tsx, layout.tsx, route.ts）

## 関数定義
- 基本的にアロー関数を使用
- this参照やasserts関数で必要な場合のみfunction宣言

## コンポーネント設計原則
1. **関心事の分離**: コンポーネントは自分自身がどのように使われるかを知らない
2. **Propsによる制御**: 外部からprops経由で制御される設計
3. **Props継承**: `interface ComponentProps extends BoxProps {}`でラッパーコンポーネントのPropsを継承

## DOM要素の使用禁止
- DOM要素の直接利用を禁止
- Yamada UIのStyleシステムに統一
- 例: `<div>` → `<Box>`, `<main>` → `<Box as="main">`

## useEffect使用禁止
- **useEffectの使用を原則禁止**
- 代替手段:
  - Ref Callbacks（DOM操作）
  - useSyncExternalStore（外部ストア同期）
  - 既存ライブラリの抽象化（TanStack Query、Yamada UIのuseEventListener等）

## コンポーネント配置ルール
- **禁止**: コンポーネントが自分の配置を決定
  - `position`, `top/left/right/bottom`, `zIndex`, 固定`margin/padding`
- **推奨**: 親コンポーネントが配置を制御
  - Props経由で配置プロパティを受け取る
  - `interface ComponentProps extends BoxProps {}`で継承

## Server/Client Component
- 'use client'を最小限に抑制
- 各セクションはindex.tsxでServer Componentを保持
- インタラクション必要時は別コンポーネントに切り出し