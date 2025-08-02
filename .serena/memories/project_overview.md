# ポートフォリオプロジェクト概要

## プロジェクトの目的
bmthd（GitHub: github.com/bmthd）のソフトウェアエンジニア向けポートフォリオサイト開発プロジェクト

## 技術スタック
- **フレームワーク**: Next.js 15（Turbopack使用）
- **ライブラリ**: React 19
- **言語**: TypeScript
- **UIライブラリ**: Yamada UI
- **パッケージマネージャー**: Bun
- **開発ツール**: 
  - Biome（Linter/Formatter）
  - Lefthook（Git hooks）
  - GritQL（カスタムリント）
  - TypeScript Native Preview

## サイト構成
1. Header/Navigation
2. Hero Section
3. About Section  
4. Skills Section
5. Projects Section
6. Contact Section
7. Footer

## プロジェクト構造
```
src/
├── app/                 # Next.js App Router
├── components/          # UIコンポーネント（各セクション別）
├── ui/                  # 共通UIコンポーネント
├── lib/                 # ユーティリティライブラリ
├── theme/               # Yamada UIテーマ設定
├── constants/           # 定数
└── utils/               # ヘルパー関数
```