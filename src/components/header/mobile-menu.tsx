"use client";

import {
	Box,
	Flex,
	IconButton,
	Link,
	MenuIcon,
	useDisclosure,
	VStack,
	XIcon,
} from "@yamada-ui/react";
import { SECTIONS } from "@/constants/sections";

const navItems = Object.entries(SECTIONS).map(([key, value]) => ({
	label: key.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()),
	href: `#${value}`,
}));

export const MobileMenu = () => {
	const { open, onOpen, onClose } = useDisclosure();

	return (
		<>
			<IconButton
				display={{ base: "flex", md: "none" }}
				onClick={onOpen}
				variant="ghost"
				aria-label="Open menu"
				icon={<MenuIcon fontSize="20px" />}
			/>

			{open && (
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
								icon={<XIcon fontSize="20px" />}
							/>
						</Flex>
						<VStack gap={4} align="start">
							{navItems.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									onClick={onClose}
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
		</>
	);
};
