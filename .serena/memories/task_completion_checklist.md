# タスク完了時チェックリスト

## AI運用5原則（最重要）
**第1原則**: 全てのタスク実行後に`bun run check:all`でのチェックを**必須**とする

## 必須実行コマンド
タスク完了時は以下を**必ず**実行:
```bash
bun run check:all
```

このコマンドは以下をすべて実行:
- `bun run check:lint` - リントチェック
- `bun run check:format` - フォーマットチェック  
- `bun run check:type` - 型チェック
- `bun run check:similarity` - コード重複チェック

## エラー対応
- `check:all`でエラーが発生した場合は修正が必要
- 自動修正可能な場合: `bun run lint`または`bun run format`
- 型エラーの場合: TypeScriptコードを手動修正
- 重複コードの場合: リファクタリングで解決

## Git Hooks
pre-commit時に品質チェックが自動実行されるため、事前のチェックが重要

## 品質保証の重要性
- コードの一貫性確保
- バグの早期発見
- チームでの開発効率向上
- プロダクション環境での安定性確保