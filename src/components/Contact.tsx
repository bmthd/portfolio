"use client";

import {
	GithubIcon,
	LinkedinIcon,
	MailIcon,
	TwitterIcon,
} from "@yamada-ui/lucide";
import {
	Box,
	Button,
	Card,
	CardBody,
	Container,
	Flex,
	FormControl,
	Grid,
	GridItem,
	Heading,
	Input,
	Link,
	Text,
	Textarea,
	VStack,
} from "@yamada-ui/react";
import { useState } from "react";

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

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [toastMessage, setToastMessage] = useState("");

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// フォーム送信のシミュレーション
		setTimeout(() => {
			setToastMessage(
				"メッセージを送信しました！お返事まで少々お待ちください。",
			);
			setFormData({ name: "", email: "", message: "" });
			setIsSubmitting(false);
			setTimeout(() => setToastMessage(""), 3000);
		}, 1000);
	};

	return (
		<Box id="contact" as="section" py={20} bg="gray.50">
			<Container maxW="7xl">
				<VStack gap={12}>
					<VStack gap={4} textAlign="center">
						<Heading as="h2" size="3xl" fontWeight="bold">
							Contact
						</Heading>
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
							<Card>
								<CardBody>
									<form onSubmit={handleSubmit}>
										<VStack gap={6}>
											<Heading as="h3" size="lg" textAlign="left" w="full">
												お問い合わせフォーム
											</Heading>
											<FormControl required>
												<Text mb={2} fontWeight="medium">
													お名前 *
												</Text>
												<Input
													value={formData.name}
													onChange={(e) =>
														handleInputChange("name", e.target.value)
													}
													placeholder="山田太郎"
												/>
											</FormControl>
											<FormControl required>
												<Text mb={2} fontWeight="medium">
													メールアドレス *
												</Text>
												<Input
													type="email"
													value={formData.email}
													onChange={(e) =>
														handleInputChange("email", e.target.value)
													}
													placeholder="your@email.com"
												/>
											</FormControl>
											<FormControl required>
												<Text mb={2} fontWeight="medium">
													メッセージ *
												</Text>
												<Textarea
													rows={5}
													value={formData.message}
													onChange={(e) =>
														handleInputChange("message", e.target.value)
													}
													placeholder="お問い合わせ内容をご記入ください"
												/>
											</FormControl>
											<Button
												type="submit"
												colorScheme="blue"
												size="lg"
												w="full"
												disabled={isSubmitting}
											>
												{isSubmitting ? "送信中..." : "送信"}
											</Button>
											{toastMessage && (
												<Text
													color="green.500"
													textAlign="center"
													fontSize="sm"
												>
													{toastMessage}
												</Text>
											)}
										</VStack>
									</form>
								</CardBody>
							</Card>
						</GridItem>

						<GridItem>
							<VStack gap={6} h="full">
								<Card flex={1}>
									<CardBody>
										<VStack gap={6} align="start">
											<Heading as="h3" size="lg">
												SNS・連絡先
											</Heading>
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
															<Card
																variant="outline"
																cursor="pointer"
																_hover={{
																	borderColor: "blue.300",
																	shadow: "sm",
																}}
																transition="all 0.2s"
															>
																<CardBody py={4}>
																	<Flex alignItems="center" gap={4}>
																		<Box p={2} bg="blue.50" borderRadius="md">
																			<IconComponent
																				size={20}
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
																</CardBody>
															</Card>
														</Link>
													);
												})}
											</VStack>
										</VStack>
									</CardBody>
								</Card>
							</VStack>
						</GridItem>
					</Grid>
				</VStack>
			</Container>
		</Box>
	);
}
