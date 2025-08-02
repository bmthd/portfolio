import { Flex, type FlexProps } from "@yamada-ui/react";
import { SECTIONS } from "@/constants/sections";
import { NextTextLink } from "@/ui/next-link";

const navItems = Object.entries(SECTIONS).map(([key, value]) => ({
	label: key.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()),
	href: `#${value}`,
}));

interface NavigationMenuProps extends FlexProps {}

export const NavigationMenu = (props: NavigationMenuProps) => {
	return (
		<Flex gap={8} {...props}>
			{navItems.map((item) => (
				<NextTextLink
					key={item.label}
					href={item.href}
					fontSize="sm"
					fontWeight="medium"
					variant="navigation"
				>
					{item.label}
				</NextTextLink>
			))}
		</Flex>
	);
};
