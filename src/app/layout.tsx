import { UIProvider } from "@yamada-ui/react";
import type { Metadata } from "next";
import { BIZ_UDPGothic } from "next/font/google";
import { theme } from "@/theme";

const bizUdpGothic = BIZ_UDPGothic({
	variable: "--font-biz-udp-gothic",
	subsets: ["latin"],
	weight: ["400", "700"],
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
		// biome-ignore lint: plugin 必須レイアウトのため
		<html lang="ja">
			{/* biome-ignore lint: plugin 必須レイアウトのため */}
			<body className={bizUdpGothic.variable}>
				<UIProvider theme={theme}>{children}</UIProvider>
			</body>
		</html>
	);
};
