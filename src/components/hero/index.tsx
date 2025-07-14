import {
	Avatar,
	type BoxProps,
	Container,
	Flex,
	Text,
	VStack,
} from "@yamada-ui/react";
import { Section } from "@/ui/section";
import { HeroActions } from "./hero-actions";

interface HeroProps extends BoxProps {}

export const Hero = ({ ...props }: HeroProps) => {
	return (
		<Section.Root
			minH="100vh"
			display="flex"
			alignItems="center"
			bg="gray.50"
			pt={16}
			{...props}
		>
			<Container.Root maxW="7xl">
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
						<Section.Heading
							as="h1"
							size="4xl"
							fontWeight="bold"
							lineHeight="shorter"
							color="gray.900"
						>
							<Flex alignItems="center" gap={4}>
								<Avatar
									name="bmthd"
									bg="blue.500"
									color="white"
									size="xl"
									src="https://picsum.photos/200/200"
								/>
								こんにちは！ 私は
								<Text as="span" color="blue.500">
									bmthd
								</Text>
								です
							</Flex>
						</Section.Heading>
						<Text fontSize="xl" color="gray.600" maxW="2xl">
							ソフトウェアエンジニアとして、モダンなウェブ技術を使用してユーザー体験を向上させるアプリケーションを開発しています。
							TypeScript、React、Next.jsを中心とした技術スタックで、スケーラブルで保守性の高いソフトウェアの構築に取り組んでいます。
						</Text>
						<HeroActions />
					</VStack>
				</Flex>
			</Container.Root>
		</Section.Root>
	);
};
