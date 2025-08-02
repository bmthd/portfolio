import {
	Badge,
	Box,
	type BoxProps,
	Container,
	Grid,
	Text,
	VStack,
} from "@yamada-ui/react";
import { fetchBlogArticles } from "@/lib/blog";
import { NextTextLink } from "@/ui/next-link";
import { Section } from "@/ui/section";
import { BlogItem } from "./blog-item";

interface BlogProps extends BoxProps {}

export const Blog = async ({ ...props }: BlogProps) => {
	const { articles } = await fetchBlogArticles();

	return (
		<Section.Root py={20} bg="white" {...props}>
			<Container.Root>
				<VStack gap={12}>
					<VStack gap={4} textAlign="center">
						<Section.Heading as="h2" size="3xl" fontWeight="bold">
							Blog
						</Section.Heading>
						<Text fontSize="lg" color="gray.600">
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
							<BlogItem key={`${article.link}-${index}`} article={article} />
						))}
					</Grid>

					<Box textAlign="center">
						<NextTextLink
							href="https://zenn.dev/bmth"
							external
							fontSize="sm"
							variant="primary"
						>
							すべての記事を見る →
						</NextTextLink>
					</Box>
				</VStack>
			</Container.Root>
		</Section.Root>
	);
};
