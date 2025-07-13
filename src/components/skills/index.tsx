import {
	Badge,
	Box,
	type BoxProps,
	Card,
	Container,
	Flex,
	Grid,
	GridItem,
	Progress,
	Text,
	VStack,
	Wrap,
} from "@yamada-ui/react";
import { Section } from "@/ui/section";

const skillCategories = [
	{
		title: "プログラミング言語",
		skills: [
			{ name: "TypeScript", level: 90 },
			{ name: "JavaScript", level: 95 },
			{ name: "Python", level: 75 },
			{ name: "Go", level: 60 },
		],
	},
	{
		title: "フレームワーク・ライブラリ",
		skills: [
			{ name: "React", level: 90 },
			{ name: "Next.js", level: 85 },
			{ name: "Vue.js", level: 70 },
			{ name: "Node.js", level: 80 },
		],
	},
	{
		title: "開発ツール・環境",
		skills: [
			{ name: "Git", level: 85 },
			{ name: "Docker", level: 70 },
			{ name: "Webpack", level: 75 },
			{ name: "Vite", level: 80 },
		],
	},
];

const technologies = [
	"React",
	"Next.js",
	"TypeScript",
	"JavaScript",
	"Node.js",
	"Python",
	"Go",
	"Docker",
	"Git",
	"Webpack",
	"Vite",
	"CSS3",
	"HTML5",
	"REST API",
	"GraphQL",
	"PostgreSQL",
	"MongoDB",
	"Redis",
	"AWS",
	"Vercel",
];

interface SkillsProps extends BoxProps {}

export const Skills = ({ ...props }: SkillsProps) => {
	return (
		<Section.Root py={20} bg="gray.50" {...props}>
			<Container.Root maxW="7xl">
				<VStack gap={12}>
					<VStack gap={4} textAlign="center">
						<Section.Heading as="h2" size="3xl" fontWeight="bold">
							Skills
						</Section.Heading>
						<Text fontSize="lg" color="gray.600" maxW="3xl">
							これまでに習得した技術スキルと開発経験
						</Text>
					</VStack>

					<Grid
						templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
						gap={8}
						w="full"
					>
						{skillCategories.map((category) => (
							<GridItem key={category.title}>
								<Card.Root h="full">
									<Card.Body>
										<VStack gap={6} align="start">
											<Section.Heading as="h3" size="lg">
												{category.title}
											</Section.Heading>
											<VStack gap={4} w="full">
												{category.skills.map((skill) => (
													<Box key={skill.name} w="full">
														<Flex
															justifyContent="space-between"
															alignItems="center"
															mb={2}
														>
															<Text fontWeight="medium">{skill.name}</Text>
															<Text fontSize="sm" color="gray.600">
																{skill.level}%
															</Text>
														</Flex>
														<Progress
															value={skill.level}
															colorScheme="blue"
															size="sm"
															bg="gray.200"
														/>
													</Box>
												))}
											</VStack>
										</VStack>
									</Card.Body>
								</Card.Root>
							</GridItem>
						))}
					</Grid>

					<VStack gap={6} w="full">
						<Section.Heading as="h3" size="xl" textAlign="center">
							使用技術・ツール
						</Section.Heading>
						<Wrap gap={4} justify="center">
							{technologies.map((tech) => (
								<Badge
									key={tech}
									colorScheme="blue"
									variant="outline"
									px={4}
									py={2}
									fontSize="md"
									borderRadius="full"
								>
									{tech}
								</Badge>
							))}
						</Wrap>
					</VStack>
				</VStack>
			</Container.Root>
		</Section.Root>
	);
};
