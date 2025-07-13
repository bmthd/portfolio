"use client";

import { MenuIcon, XIcon } from "@yamada-ui/lucide";
import {
	Box,
	Container,
	Flex,
	Heading,
	IconButton,
	Link,
	VStack,
} from "@yamada-ui/react";
import { useState } from "react";

const navItems = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const onOpen = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		onClose();
	};

	return (
		<Box
			as="header"
			position="fixed"
			top={0}
			w="full"
			bg="white"
			backdropFilter="blur(10px)"
			borderBottom="1px"
			borderColor="gray.200"
			zIndex={1000}
		>
			<Container maxW="7xl">
				<Flex h={16} alignItems="center" justifyContent="space-between">
					<Heading as="h1" size="lg" fontWeight="bold">
						bmthd
					</Heading>

					<Flex display={{ base: "none", md: "flex" }} gap={8}>
						{navItems.map((item) => (
							<Link
								key={item.label}
								onClick={() => scrollToSection(item.href)}
								cursor="pointer"
								fontSize="sm"
								fontWeight="medium"
								color="gray.600"
								_hover={{ color: "blue.500" }}
								transition="color 0.2s"
							>
								{item.label}
							</Link>
						))}
					</Flex>

					<IconButton
						display={{ base: "flex", md: "none" }}
						onClick={onOpen}
						variant="ghost"
						aria-label="Open menu"
					>
						<MenuIcon size={20} />
					</IconButton>
				</Flex>
			</Container>

			{isOpen && (
				<Box
					position="fixed"
					top={0}
					left={0}
					right={0}
					bottom={0}
					bg="rgba(0, 0, 0, 0.5)"
					zIndex={999}
					onClick={onClose}
				>
					<Box
						position="absolute"
						right={0}
						top={0}
						h="100vh"
						w="300px"
						bg="white"
						p={6}
						onClick={(e) => e.stopPropagation()}
					>
						<Flex justifyContent="flex-end" mb={4}>
							<IconButton
								onClick={onClose}
								variant="ghost"
								aria-label="Close menu"
							>
								<XIcon size={20} />
							</IconButton>
						</Flex>
						<VStack gap={4} align="start">
							{navItems.map((item) => (
								<Link
									key={item.label}
									onClick={() => scrollToSection(item.href)}
									cursor="pointer"
									fontSize="lg"
									fontWeight="medium"
									color="gray.600"
									_hover={{ color: "blue.500" }}
								>
									{item.label}
								</Link>
							))}
						</VStack>
					</Box>
				</Box>
			)}
		</Box>
	);
}
