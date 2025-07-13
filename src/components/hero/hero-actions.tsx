import { Button, Flex } from "@yamada-ui/react";
import { SECTIONS } from "@/constants/sections";

export const HeroActions = () => {
	return (
		<Flex gap={4} direction={{ base: "column", sm: "row" }}>
			<Button as="a" href={`#${SECTIONS.CONTACT}`} size="lg" colorScheme="blue">
				お問い合わせ
			</Button>
			<Button as="a" href={`#${SECTIONS.PROJECTS}`} size="lg" variant="outline">
				プロジェクトを見る
			</Button>
		</Flex>
	);
};
