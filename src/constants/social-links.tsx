import {
	GithubIcon,
	LinkedinIcon,
	MailIcon,
	TwitterIcon,
} from "@yamada-ui/react";
import type { DeepReadonly } from "ts-essentials";

export type SocialLink = DeepReadonly<{
	name: string;
	href: string;
	icon: React.ReactNode;
	description?: string;
}>;

export const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/bmthd",
		icon: <GithubIcon />,
		description: "プロジェクトとコードをご覧ください",
	},
	{
		name: "Twitter",
		href: "https://twitter.com/bmthd",
		icon: <TwitterIcon />,
		description: "最新の投稿と考えをフォロー",
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com/in/bmthd",
		icon: <LinkedinIcon />,
		description: "プロフェッショナルなつながり",
	},
	{
		name: "Email",
		href: "mailto:contact@bmthd.dev",
		icon: <MailIcon />,
		description: "直接メールでお問い合わせ",
	},
] as const satisfies ReadonlyArray<SocialLink>;
