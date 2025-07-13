import { ExternalLinkIcon } from "@yamada-ui/lucide";
import {
	Badge,
	Box,
	type BoxProps,
	Card,
	Container,
	Grid,
	GridItem,
	Image,
	Link,
	Text,
	VStack,
} from "@yamada-ui/react";
import { fetchBlogArticles } from "@/lib/blog";
import { Section } from "@/ui/section";

interface BlogProps extends BoxProps {}

export const Blog = async ({ ...props }: BlogProps) => {
	const { articles } = await fetchBlogArticles();

	return (
		<Section.Root py={20} bg="white" {...props}>
			<Container.Root maxW="7xl">
				<VStack gap={12}>
					<VStack gap={4} textAlign="center">
						<Section.Heading as="h2" size="3xl" fontWeight="bold">
							Blog
						</Section.Heading>
						<Text fontSize="lg" color="gray.600" maxW="3xl">
							技術記事やアイデアを発信しています
						</Text>
						<Badge colorScheme="blue" variant="outline" px={3} py={1}>
							Zenn で執筆中
						</Badge>
					</VStack>

					<Grid
						templateColumns={{
							base: "1fr",
							md: "repeat(2, 1fr)",
							lg: "repeat(3, 1fr)",
						}}
						gap={6}
						w="full"
					>
						{articles.map((article, index) => (
							<GridItem key={`${article.link}-${index}`}>
								<Card.Root
									h="full"
									overflow="hidden"
									_hover={{
										transform: "translateY(-4px)",
										shadow: "lg",
										textDecoration: "none",
									}}
									transition="all 0.3s"
									cursor="pointer"
									as={Link}
									href={article.link}
									target="_blank"
									rel="noopener noreferrer"
									textDecoration="none"
								>
									<Box position="relative" h="180px" overflow="hidden">
										<Image
											src={article.ogpImage}
											alt={article.title}
											objectFit="cover"
										/>
										<Box
											position="absolute"
											top={2}
											right={2}
											bg="white"
											borderRadius="full"
											p={1}
											shadow="sm"
										>
											<ExternalLinkIcon fontSize="16px" color="#666" />
										</Box>
									</Box>
									<Card.Body>
										<VStack gap={3} align="start" h="full">
											<Text fontSize="xs" color="gray.500" fontWeight="medium">
												{formatDate(article.pubDate)}
											</Text>
											<Section.Heading
												as="h3"
												size="sm"
												lineHeight="short"
												flex="1"
												overflow="hidden"
												display="-webkit-box"
												style={{
													WebkitLineClamp: 2,
													WebkitBoxOrient: "vertical",
												}}
											>
												{article.title}
											</Section.Heading>
											<Text
												fontSize="sm"
												color="gray.600"
												lineHeight="base"
												overflow="hidden"
												display="-webkit-box"
												style={{
													WebkitLineClamp: 3,
													WebkitBoxOrient: "vertical",
												}}
											>
												{article.description}
											</Text>
										</VStack>
									</Card.Body>
								</Card.Root>
							</GridItem>
						))}
					</Grid>

					<Box textAlign="center">
						<Link
							href="https://zenn.dev/bmth"
							target="_blank"
							rel="noopener noreferrer"
							fontSize="sm"
							color="blue.500"
							fontWeight="medium"
							_hover={{ textDecoration: "underline" }}
						>
							すべての記事を見る →
						</Link>
					</Box>
				</VStack>
			</Container.Root>
		</Section.Root>
	);
};

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("ja-JP", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};
