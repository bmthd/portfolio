import { NextResponse } from "next/server";
import Parser from "rss-parser";
import { extractOGPImage } from "@/lib/blog";

interface CustomFeed {
	title?: string;
	description?: string;
	link?: string;
	image?: {
		url?: string;
	};
}

interface CustomItem {
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
}

const parser: Parser<CustomFeed, CustomItem> = new Parser({
	customFields: {
		feed: ["image"],
		item: ["content:encoded", "enclosure"],
	},
});

export async function GET() {
	try {
		const feed = await parser.parseURL("https://zenn.dev/bmth/feed");

		const articles = feed.items.slice(0, 6).map((item) => {
			const content = item["content:encoded"] || item.content || "";
			const ogpImage = extractOGPImage(content);

			return {
				title: item.title || "",
				link: item.link || "",
				pubDate: item.pubDate || "",
				description: item.contentSnippet || "",
				ogpImage: ogpImage || "https://zenn.dev/images/logo-transparent.png", // デフォルト画像
			};
		});

		return NextResponse.json({
			success: true,
			articles,
			feedTitle: feed.title || "bmth's Blog",
		});
	} catch (error) {
		console.error("RSS fetch error:", error);
		return NextResponse.json(
			{
				success: false,
				error: "Failed to fetch RSS feed",
			},
			{ status: 500 },
		);
	}
}
