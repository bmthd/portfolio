import { Flex, type FlexProps } from "@yamada-ui/react";
import { NextTextLink } from "@/ui/next-link";
import { generateNavItems } from "@/utils/navigation";

const navItems = generateNavItems();

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
