import { type BoxProps, Container, Flex } from "@yamada-ui/react";
import { NextLink } from "@/ui/next-link";
import { Section } from "@/ui/section";
import { MobileMenu } from "./mobile-menu";
import { NavigationMenu } from "./navigation-menu";

interface HeaderProps extends BoxProps {}

export const Header = ({ ...props }: HeaderProps) => {
	return (
		<Container.Root
			as="header"
			position="fixed"
			top={0}
			w="full"
			bg="white"
			backdropFilter="blur(10px)"
			borderBottom="1px"
			borderColor="gray.200"
			zIndex={1000}
			{...props}
		>
			<Flex h={16} alignItems="center" justifyContent="space-between" mx={4}>
				<Section.Heading size="lg" fontWeight="bold">
					<NextLink href="#home" _hover={{ textDecoration: "none" }}>
						bmthd
					</NextLink>
				</Section.Heading>

				<NavigationMenu />
				<MobileMenu />
			</Flex>
		</Container.Root>
	);
};
