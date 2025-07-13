import { UIProvider } from "@yamada-ui/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "bmthd - Portfolio",
	description: "Software Engineer Portfolio - bmthd",
};

export default ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="ja">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<UIProvider>{children}</UIProvider>
			</body>
		</html>
	);
};
