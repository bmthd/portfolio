import type { BoxProps } from "@yamada-ui/react";
import {
	Box,
	Container,
	Flex,
	IconButton,
	Link,
	Separator,
	Text,
	VStack,
} from "@yamada-ui/react";
import { socialLinks } from "@/constants";

import { ScrollToTopButton } from "./scroll-to-top-button";

interface FooterProps extends BoxProps {}

export const Footer = ({ ...props }: FooterProps) => {
	return (
		<Box as="footer" bg="gray.900" color="white" py={12} {...props}>
			<Container.Root maxW="7xl">
				<VStack gap={8}>
					<Flex
						direction={{ base: "column", md: "row" }}
						justifyContent="space-between"
						alignItems="center"
						w="full"
						gap={8}
					>
						<VStack gap={4} align={{ base: "center", md: "start" }}>
							<Text color="gray.400" fontSize="xl" fontWeight="bold">
								bmthd
							</Text>
							<Text color="gray.400" textAlign={{ base: "center", md: "left" }}>
								Software Engineer
							</Text>
							<Text color="gray.400" textAlign={{ base: "center", md: "left" }}>
								Creating meaningful digital experiences
							</Text>
						</VStack>

						<VStack gap={4} align="center">
							<Flex gap={4}>
								{socialLinks
									.filter((link) => !link.description)
									.map((link) => (
										<IconButton
											key={link.name}
											as={Link}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											variant="ghost"
											color="gray.400"
											_hover={{ color: "white", bg: "gray.800" }}
											aria-label={link.name}
										>
											{link.icon}
										</IconButton>
									))}
							</Flex>
							<ScrollToTopButton />
						</VStack>
					</Flex>

					<Separator borderColor="gray.700" />

					<Flex
						direction={{ base: "column", sm: "row" }}
						justifyContent="space-between"
						alignItems="center"
						w="full"
						gap={4}
					>
						<Text fontSize="sm" color="gray.400">
							© {new Date().getFullYear()} bmthd. All rights reserved.
						</Text>
						<Text fontSize="sm" color="gray.400">
							Built with Next.js & Yamada UI
						</Text>
					</Flex>
				</VStack>
			</Container.Root>
		</Box>
	);
};
