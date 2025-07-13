import { Box } from "@yamada-ui/react";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { fetchBlogArticles } from "@/lib/blog";

export default async function Home() {
	const blogData = await fetchBlogArticles();

	return (
		<Box>
			<Header />
			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Blog articles={blogData.articles} />
				<Contact />
			</main>
			<Footer />
		</Box>
	);
}
