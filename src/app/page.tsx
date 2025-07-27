import { Box, Flex } from "@yamada-ui/react";
import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { SECTIONS } from "@/constants/sections";

export default () => (
	<Flex minH="100vh" w="full" placeItems="center" mx="auto" px="4">
		<Header />
		<Box as="main">
			<Hero id={SECTIONS.HOME} />
			<About id={SECTIONS.ABOUT} />
			<Skills id={SECTIONS.SKILLS} />
			<Projects id={SECTIONS.PROJECTS} />
			<Blog id={SECTIONS.BLOG} />
			<Contact id={SECTIONS.CONTACT} />
		</Box>
		<Footer />
	</Flex>
);
