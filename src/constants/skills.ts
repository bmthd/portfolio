import type { DeepReadonly } from "ts-essentials";

export type SkillCategory = DeepReadonly<{
	name: string;
	skills: string[];
}>;

export const skillCategories = [
	{
		name: "プログラミング言語",
		skills: ["JavaScript", "TypeScript", "Python", "Java", "Go"],
	},
	{
		name: "フロントエンド",
		skills: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
	},
	{
		name: "バックエンド",
		skills: [
			"Node.js",
			"Express",
			"FastAPI",
			"Django",
			"PostgreSQL",
			"MongoDB",
		],
	},
	{
		name: "インフラ・ツール",
		skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
	},
] as const satisfies ReadonlyArray<SkillCategory>;
