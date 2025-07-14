import {
	Box,
	type BoxProps,
	Card,
	Container,
	Flex,
	GithubIcon,
	Grid,
	GridItem,
	Link,
	LinkedinIcon,
	MailIcon,
	Text,
	TwitterIcon,
	VStack,
} from "@yamada-ui/react";
import { Section } from "@/ui/section";

import { ContactForm } from "./contact-form";

const socialLinks = [
	{
		name: "GitHub",
		url: "https://github.com/bmthd",
		icon: GithubIcon,
		description: "プロジェクトとコードをご覧ください",
	},
	{
		name: "Twitter",
		url: "https://twitter.com/bmthd",
		icon: TwitterIcon,
		description: "最新の投稿と考えをフォロー",
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/bmthd",
		icon: LinkedinIcon,
		description: "プロフェッショナルなつながり",
	},
	{
		name: "Email",
		url: "mailto:contact@bmthd.dev",
		icon: MailIcon,
		description: "直接メールでお問い合わせ",
	},
];

interface ContactProps extends BoxProps {}

export const Contact = ({ ...props }: ContactProps) => {
	return (
		<Section.Root py={20} bg="gray.50" {...props}>
			<Container.Root maxW="7xl">
				<VStack gap={12}>
					<VStack gap={4} textAlign="center">
						<Section.Heading as="h2" size="3xl" fontWeight="bold">
							Contact
						</Section.Heading>
						<Text fontSize="lg" color="gray.600" maxW="3xl">
							お仕事のご依頼やご質問など、お気軽にお問い合わせください
						</Text>
					</VStack>

					<Grid
						templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
						gap={12}
						w="full"
					>
						<GridItem>
							<ContactForm />
						</GridItem>

						<GridItem>
							<VStack gap={6} h="full">
								<Card.Root flex={1}>
									<Card.Body>
										<VStack gap={6} align="start">
											<Section.Heading as="h3" size="lg">
												SNS・連絡先
											</Section.Heading>
											<Text color="gray.600">
												以下のプラットフォームでもお気軽にお声がけください
											</Text>
											<VStack gap={4} w="full">
												{socialLinks.map((link) => {
													const IconComponent = link.icon;
													return (
														<Link
															key={link.name}
															href={link.url}
															target="_blank"
															rel="noopener noreferrer"
															w="full"
															_hover={{ textDecoration: "none" }}
														>
															<Card.Root
																variant="outline"
																cursor="pointer"
																_hover={{
																	borderColor: "blue.300",
																	shadow: "sm",
																}}
																transition="all 0.2s"
															>
																<Card.Body py={4}>
																	<Flex alignItems="center" gap={4}>
																		<Box p={2} bg="blue.50" borderRadius="md">
																			<IconComponent
																				fontSize="20px"
																				color="#3182ce"
																			/>
																		</Box>
																		<Box flex={1}>
																			<Text fontWeight="medium">
																				{link.name}
																			</Text>
																			<Text fontSize="sm" color="gray.600">
																				{link.description}
																			</Text>
																		</Box>
																	</Flex>
																</Card.Body>
															</Card.Root>
														</Link>
													);
												})}
											</VStack>
										</VStack>
									</Card.Body>
								</Card.Root>
							</VStack>
						</GridItem>
					</Grid>
				</VStack>
			</Container.Root>
		</Section.Root>
	);
};
