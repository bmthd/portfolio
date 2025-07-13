import {
	Box,
	Card,
	Container,
	Grid,
	GridItem,
	Heading,
	Text,
	VStack,
	type BoxProps,
} from "@yamada-ui/react";

interface AboutProps extends BoxProps {}

export const About = ({ ...props }: AboutProps) => {
	return (
		<Box as="section" py={20} bg="white" {...props}>
			<Container.Root maxW="7xl">
				<VStack gap={12}>
					<VStack gap={4} textAlign="center">
						<Heading as="h2" size="3xl" fontWeight="bold">
							About Me
						</Heading>
						<Text fontSize="lg" color="gray.600" maxW="3xl">
							ソフトウェア開発への情熱と継続的な学習への意欲を持つエンジニアです
						</Text>
					</VStack>

					<Grid
						templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
						gap={12}
						w="full"
					>
						<GridItem>
							<VStack gap={6} align="start">
								<Heading as="h3" size="xl">
									私について
								</Heading>
								<Text fontSize="lg" lineHeight="tall" color="gray.700">
									私はソフトウェアエンジニアとして、ユーザー中心の設計とクリーンなコードの実装に重点を置いて開発を行っています。
									特にフロントエンド開発において、React、Next.js、TypeScriptを活用した
									モダンなウェブアプリケーションの構築を得意としています。
								</Text>
								<Text fontSize="lg" lineHeight="tall" color="gray.700">
									継続的な学習を心がけており、新しい技術やベストプラクティスを積極的に取り入れることで、
									より良いソフトウェアの開発に取り組んでいます。
									チームでの協働を大切にし、コードレビューやペアプログラミングを通じて
									知識の共有と品質の向上に努めています。
								</Text>
								<Text fontSize="lg" lineHeight="tall" color="gray.700">
									プライベートでは新しい技術の実験や個人プロジェクトの開発を通じて、
									スキルの向上と創造性の発揮に取り組んでいます。
								</Text>
							</VStack>
						</GridItem>

						<GridItem>
							<VStack gap={6}>
								<Card.Root>
									<Card.Body>
										<VStack gap={4} align="start">
											<Heading as="h4" size="lg">
												経歴・背景
											</Heading>
											<VStack gap={3} align="start">
												<Box>
													<Text fontWeight="semibold">専門分野</Text>
													<Text color="gray.600">フロントエンド開発</Text>
												</Box>
												<Box>
													<Text fontWeight="semibold">主要技術</Text>
													<Text color="gray.600">
														React, Next.js, TypeScript
													</Text>
												</Box>
												<Box>
													<Text fontWeight="semibold">開発スタイル</Text>
													<Text color="gray.600">
														ユーザー中心設計、クリーンコード
													</Text>
												</Box>
											</VStack>
										</VStack>
									</Card.Body>
								</Card.Root>

								<Card.Root>
									<Card.Body>
										<VStack gap={4} align="start">
											<Heading as="h4" size="lg">
												興味・関心
											</Heading>
											<VStack gap={2} align="start">
												<Text color="gray.600">• 新技術の学習と実践</Text>
												<Text color="gray.600">• オープンソース貢献</Text>
												<Text color="gray.600">• パフォーマンス最適化</Text>
												<Text color="gray.600">• アクセシビリティ向上</Text>
												<Text color="gray.600">
													• チーム開発とコラボレーション
												</Text>
											</VStack>
										</VStack>
									</Card.Body>
								</Card.Root>
							</VStack>
						</GridItem>
					</Grid>
				</VStack>
			</Container.Root>
		</Box>
	);
};