import type { DeepReadonly } from "ts-essentials";

export type Project = DeepReadonly<{
	title: string;
	description: string;
	technologies: string[];
	github?: string;
	demo?: string;
	image?: string;
}>;

export const projects = [
	{
		title: "Eコマースプラットフォーム",
		description:
			"モダンな技術スタックを使用したフルスタックEコマースアプリケーション。ユーザー認証、商品管理、決済機能を実装。",
		technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
		github: "https://github.com/bmthd/ecommerce-platform",
		demo: "https://ecommerce-demo.example.com",
	},
	{
		title: "タスク管理アプリ",
		description:
			"チーム向けのリアルタイムタスク管理ツール。ドラッグ&ドロップ、リアルタイム更新、チーム機能を搭載。",
		technologies: ["React", "TypeScript", "Socket.io", "Express", "MongoDB"],
		github: "https://github.com/bmthd/task-management",
		demo: "https://tasks.example.com",
	},
	{
		title: "天気予報アプリ",
		description:
			"位置情報ベースの天気予報アプリ。美しいUIと詳細な気象データの表示。",
		technologies: ["React Native", "TypeScript", "Expo", "Weather API"],
		github: "https://github.com/bmthd/weather-app",
	},
] as const satisfies ReadonlyArray<Project>;
