import "server-only";
import Parser from "rss-parser";
import type { DeepReadonly } from "ts-essentials";

type CustomFeed = DeepReadonly<{
	title?: string;
	description?: string;
	link?: string;
	image?: {
		url?: string;
	};
}>;

type CustomItem = DeepReadonly<{
	title?: string;
	link?: string;
	pubDate?: string;
	content?: string;
	contentSnippet?: string;
	"content:encoded"?: string;
	enclosure?: {
		url?: string;
		type?: string;
	};
}>;

export type BlogArticle = DeepReadonly<{
	title: string;
	link: string;
	pubDate: string;
	description: string;
	ogImageURL: string;
}>;

export type BlogData = DeepReadonly<{
	articles: ReadonlyArray<BlogArticle>;
	feedTitle: string;
}>;

const parser: Parser<CustomFeed, CustomItem> = new Parser({
	customFields: {
		feed: ["image"],
		item: ["content:encoded", "enclosure"],
	},
});

export const fetchBlogArticles = async (): Promise<BlogData> => {
	try {
		const feed = await parser.parseURL("https://zenn.dev/bmth/feed");

		const articles = feed.items.slice(0, 6).map(
			(item): BlogArticle => ({
				title: item.title || "",
				link: item.link || "",
				pubDate: item.pubDate || "",
				description: item.contentSnippet || "",
				ogImageURL:
					item.enclosure?.url || "https://zenn.dev/images/logo-transparent.png",
			}),
		);

		return {
			articles,
			feedTitle: feed.title || "bmth's Blog",
		};
	} catch (error) {
		console.error("RSS fetch error:", error);
		// エラー時は空の配列を返す
		return {
			articles: [],
			feedTitle: "bmth's Blog",
		};
	}
};
