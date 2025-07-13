import { Box } from "@yamada-ui/react";
import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default () => (
	<Box>
		<Header />
		<main>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Blog />
			<Contact />
		</main>
		<Footer />
	</Box>
);
