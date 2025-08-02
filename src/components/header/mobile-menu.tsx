"use client";

import {
	Box,
	type BoxProps,
	Flex,
	IconButton,
	type IconButtonProps,
	MenuIcon,
	useDisclosure,
	VStack,
	XIcon,
} from "@yamada-ui/react";
import { NextTextLink } from "@/ui/next-link";
import { generateNavItems } from "@/utils/navigation";

const navItems = generateNavItems();

interface MobileMenuProps extends Omit<IconButtonProps, "icon" | "aria-label"> {
	overlayProps?: BoxProps;
	menuProps?: BoxProps;
}

export const MobileMenu = ({
	overlayProps,
	menuProps,
	...props
}: MobileMenuProps) => {
	const { open, onOpen, onClose } = useDisclosure();

	return (
		<>
			<IconButton
				{...props}
				onClick={onOpen}
				variant="ghost"
				aria-label="Open menu"
				icon={<MenuIcon fontSize="20px" />}
			/>

			{open && (
				<Box bg="rgba(0, 0, 0, 0.5)" onClick={onClose} {...overlayProps}>
					<Box
						h="100vh"
						w="300px"
						bg="white"
						p={6}
						onClick={(e) => e.stopPropagation()}
						{...menuProps}
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
								<NextTextLink
									key={item.label}
									href={item.href}
									onClick={onClose}
									fontSize="lg"
									fontWeight="medium"
									variant="navigation"
								>
									{item.label}
								</NextTextLink>
							))}
						</VStack>
					</Box>
				</Box>
			)}
		</>
	);
};
