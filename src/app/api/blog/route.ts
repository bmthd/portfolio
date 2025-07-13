import { NextResponse } from "next/server";
import Parser from "rss-parser";

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

// OGP画像を抽出する関数
function extractOGPImage(content: string): string | null {
	// content:encodedからOGP画像を抽出
	const ogImageMatch = content.match(
		/<meta\s+property=["|']og:image["|']\s+content=["|']([^"']+)["|']/i,
	);
	if (ogImageMatch) {
		return ogImageMatch[1];
	}

	// 最初の画像タグから画像を抽出
	const imgMatch = content.match(/<img[^>]+src=["|']([^"']+)["|']/i);
	if (imgMatch) {
		return imgMatch[1];
	}

	return null;
}

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
