import { ExternalLinkIcon, GithubIcon } from "@yamada-ui/lucide";
import {
	Badge,
	Box,
	type BoxProps,
	Button,
	Card,
	Container,
	Flex,
	Grid,
	GridItem,
	Link,
	Text,
	VStack,
	Wrap,
} from "@yamada-ui/react";
import { Section } from "@/ui/section";

const projects = [
	{
		title: "ポートフォリオサイト",
		description:
			"Next.js 15とYamada UIを使用して構築されたレスポンシブなポートフォリオサイト。モダンなデザインとスムーズなアニメーションを特徴としています。",
		tech: ["Next.js", "React", "TypeScript", "Yamada UI"],
		github: "https://github.com/bmthd/portfolio",
		demo: "https://bmthd-portfolio.vercel.app",
		image: "/projects/portfolio.png",
	},
	{
		title: "タスク管理アプリ",
		description:
			"React Hooksとlocal storageを使用したシンプルなタスク管理アプリケーション。ドラッグ&ドロップによるタスクの並び替え機能を実装。",
		tech: ["React", "TypeScript", "CSS Modules"],
		github: "https://github.com/bmthd/task-app",
		demo: "https://bmthd-task-app.vercel.app",
		image: "/projects/task-app.png",
	},
	{
		title: "天気予報アプリ",
		description:
			"外部APIを使用したリアルタイム天気予報アプリ。位置情報を取得して現在地の天気を表示し、週間予報も確認できます。",
		tech: ["Next.js", "TypeScript", "Weather API"],
		github: "https://github.com/bmthd/weather-app",
		demo: "https://bmthd-weather-app.vercel.app",
		image: "/projects/weather-app.png",
	},
	{
		title: "ブログプラットフォーム",
		description:
			"Headless CMSを使用したブログプラットフォーム。マークダウン記法に対応し、SEO最適化とダークモード切り替え機能を実装。",
		tech: ["Next.js", "TypeScript", "Contentful", "Tailwind CSS"],
		github: "https://github.com/bmthd/blog-platform",
		demo: "https://bmthd-blog.vercel.app",
		image: "/projects/blog.png",
	},
];

interface ProjectsProps extends BoxProps {}

export const Projects = ({ ...props }: ProjectsProps) => {
	return (
		<Section.Root py={20} bg="white" {...props}>
			<Container.Root maxW="7xl">
				<VStack gap={12}>
					<VStack gap={4} textAlign="center">
						<Section.Heading size="3xl" fontWeight="bold">
							Projects
						</Section.Heading>
						<Text fontSize="lg" color="gray.600" maxW="3xl">
							これまでに取り組んだプロジェクトの一部をご紹介します
						</Text>
					</VStack>

					<Grid
						templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
						gap={8}
						w="full"
					>
						{projects.map((project) => (
							<GridItem key={project.title}>
								<Card.Root h="full" overflow="hidden">
									<Box
										h="200px"
										bg="gray.200"
										display="flex"
										alignItems="center"
										justifyContent="center"
									>
										<Text color="gray.500" fontSize="lg">
											{project.title}
										</Text>
									</Box>
									<Card.Body>
										<VStack gap={4} align="start">
											<Section.Heading as="h3" size="lg">
												{project.title}
											</Section.Heading>
											<Text color="gray.600" lineHeight="tall">
												{project.description}
											</Text>
											<Wrap gap={2}>
												{project.tech.map((tech) => (
													<Badge
														key={tech}
														colorScheme="blue"
														variant="outline"
													>
														{tech}
													</Badge>
												))}
											</Wrap>
											<Flex gap={3} w="full">
												<Button
													as={Link}
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													variant="outline"
													size="sm"
													flex={1}
													gap={2}
												>
													<GithubIcon fontSize="16px" />
													GitHub
												</Button>
												<Button
													as={Link}
													href={project.demo}
													target="_blank"
													rel="noopener noreferrer"
													colorScheme="blue"
													size="sm"
													flex={1}
													gap={2}
												>
													<ExternalLinkIcon fontSize="16px" />
													Demo
												</Button>
											</Flex>
										</VStack>
									</Card.Body>
								</Card.Root>
							</GridItem>
						))}
					</Grid>
				</VStack>
			</Container.Root>
		</Section.Root>
	);
};
