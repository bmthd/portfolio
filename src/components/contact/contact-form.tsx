"use client";

import {
	Button,
	Card,
	Field,
	Heading,
	Input,
	Text,
	Textarea,
	VStack,
} from "@yamada-ui/react";
import { useState } from "react";

export const ContactForm = () => {
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
		<Card.Root>
			<Card.Body>
				<form onSubmit={handleSubmit}>
					<VStack gap={6}>
						<Heading as="h3" size="lg" textAlign="left" w="full">
							お問い合わせフォーム
						</Heading>
						<Field.Root required>
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
						</Field.Root>
						<Field.Root required>
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
						</Field.Root>
						<Field.Root required>
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
						</Field.Root>
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
			</Card.Body>
		</Card.Root>
	);
};