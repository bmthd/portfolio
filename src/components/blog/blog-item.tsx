import {
	Box,
	type BoxProps,
	Card,
	ExternalLinkIcon,
	GridItem,
	Image,
	Link,
	Text,
	VStack,
} from "@yamada-ui/react";
import type { BlogArticle } from "@/lib/blog";
import { Section } from "@/ui/section";
import { formatDate } from "@/utils/date-utils";

interface BlogItemProps extends BoxProps {
	article: BlogArticle;
}

export const BlogItem = ({ article }: BlogItemProps) => {
	return (
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
				<Image src={article.ogImageURL} alt={article.title} objectFit="cover" />
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
	);
};
