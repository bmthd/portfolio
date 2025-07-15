import { Flex } from "@yamada-ui/react";
import { SECTIONS } from "@/constants/sections";
import { NextLink } from "@/ui/next-link";

const navItems = Object.entries(SECTIONS).map(([key, value]) => ({
	label: key.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()),
	href: `#${value}`,
}));

export const NavigationMenu = () => {
	return (
		<Flex display={{ base: "none", md: "flex" }} gap={8}>
			{navItems.map((item) => (
				<NextLink
					key={item.label}
					href={item.href}
					fontSize="sm"
					fontWeight="medium"
					color="gray.600"
					_hover={{ color: "blue.500" }}
					transition="color 0.2s"
				>
					{item.label}
				</NextLink>
			))}
		</Flex>
	);
};
