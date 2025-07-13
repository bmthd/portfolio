import { SECTIONS } from "@/constants/sections";
import { Button, ButtonProps, Flex } from "@yamada-ui/react";

const buttonsProps: (ButtonProps & { href: string })[] = [
	{
		href: `#${SECTIONS.CONTACT}`,
		children: "お問い合わせ",
		colorScheme: "blue",
	},
	{
		href: `#${SECTIONS.PROJECTS}`,
		children: "プロジェクトを見る",
		variant: "outline",
	},
];

export const HeroActions = () => {
	return (
		<Flex gap={4}>
			{buttonsProps.map((props) => (
				<Button key={props.href} as="a" size="lg" flex="1" px={10} {...props} />
			))}
		</Flex>
	);
};
