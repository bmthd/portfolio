import { Flex, type FlexProps } from "@yamada-ui/react";
import { SECTIONS } from "@/constants/sections";
import { NextLink } from "@/ui/next-link";

const navItems = Object.entries(SECTIONS).map(([key, value]) => ({
	label: key.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()),
	href: `#${value}`,
}));

interface NavigationMenuProps extends FlexProps {}

export const NavigationMenu = (props: NavigationMenuProps) => {
	return (
		<Flex gap={8} {...props}>
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
