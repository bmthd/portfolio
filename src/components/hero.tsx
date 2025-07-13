"use client";

import {
	Avatar,
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Text,
	VStack,
} from "@yamada-ui/react";

export default function Hero() {
	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Box
			id="home"
			as="section"
			minH="100vh"
			display="flex"
			alignItems="center"
			bg="gray.50"
			pt={16}
		>
			<Container maxW="7xl">
				<Flex
					direction={{ base: "column", lg: "row" }}
					alignItems="center"
					justifyContent="space-between"
					gap={12}
				>
					<VStack
						gap={6}
						align={{ base: "center", lg: "start" }}
						textAlign={{ base: "center", lg: "left" }}
						flex={1}
					>
						<Heading as="h1" size="4xl" fontWeight="bold" lineHeight="shorter">
							こんにちは！
							<br />
							私は{" "}
							<Text as="span" color="blue.500">
								bmthd
							</Text>{" "}
							です
						</Heading>
						<Text fontSize="xl" color="gray.600" maxW="2xl">
							ソフトウェアエンジニアとして、モダンなウェブ技術を使用してユーザー体験を向上させるアプリケーションを開発しています。
							TypeScript、React、Next.jsを中心とした技術スタックで、スケーラブルで保守性の高いソフトウェアの構築に取り組んでいます。
						</Text>
						<Flex gap={4} direction={{ base: "column", sm: "row" }}>
							<Button
								size="lg"
								colorScheme="blue"
								onClick={() => scrollToSection("#contact")}
							>
								お問い合わせ
							</Button>
							<Button
								size="lg"
								variant="outline"
								onClick={() => scrollToSection("#projects")}
							>
								プロジェクトを見る
							</Button>
						</Flex>
					</VStack>
					<Box flex={1} display="flex" justifyContent="center">
						<Avatar
							size="2xl"
							name="bmthd"
							bg="blue.500"
							color="white"
							fontSize="6xl"
						/>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
}
