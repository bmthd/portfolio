"use client";

import {
	ChevronUpIcon,
	GithubIcon,
	LinkedinIcon,
	TwitterIcon,
} from "@yamada-ui/lucide";
import {
	Box,
	Container,
	Divider,
	Flex,
	IconButton,
	Link,
	Text,
	VStack,
} from "@yamada-ui/react";

const socialLinks = [
	{
		name: "GitHub",
		url: "https://github.com/bmthd",
		icon: GithubIcon,
	},
	{
		name: "Twitter",
		url: "https://twitter.com/bmthd",
		icon: TwitterIcon,
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/bmthd",
		icon: LinkedinIcon,
	},
];

export function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<Box as="footer" bg="gray.900" color="white" py={12}>
			<Container maxW="7xl">
				<VStack gap={8}>
					<Flex
						direction={{ base: "column", md: "row" }}
						justifyContent="space-between"
						alignItems="center"
						w="full"
						gap={8}
					>
						<VStack gap={4} align={{ base: "center", md: "start" }}>
							<Text fontSize="xl" fontWeight="bold">
								bmthd
							</Text>
							<Text color="gray.400" textAlign={{ base: "center", md: "left" }}>
								Software Engineer
								<br />
								Creating meaningful digital experiences
							</Text>
						</VStack>

						<VStack gap={4} align="center">
							<Flex gap={4}>
								{socialLinks.map((link) => {
									const IconComponent = link.icon;
									return (
										<IconButton
											key={link.name}
											as={Link}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											variant="ghost"
											color="gray.400"
											_hover={{ color: "white", bg: "gray.800" }}
											aria-label={link.name}
										>
											<IconComponent size={20} />
										</IconButton>
									);
								})}
							</Flex>
							<IconButton
								onClick={scrollToTop}
								variant="outline"
								borderColor="gray.600"
								color="gray.400"
								_hover={{ color: "white", borderColor: "gray.400" }}
								aria-label="上に戻る"
							>
								<ChevronUpIcon size={20} />
							</IconButton>
						</VStack>
					</Flex>

					<Divider borderColor="gray.700" />

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
			</Container>
		</Box>
	);
}
