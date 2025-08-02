"use client";

import { ChevronUpIcon, IconButton } from "@yamada-ui/react";

export const ScrollToTopButton = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<IconButton
			onClick={scrollToTop}
			variant="outline"
			borderColor="gray.600"
			color="gray.400"
			_hover={{ color: "white", borderColor: "gray.400" }}
			aria-label="上に戻る"
		>
			<ChevronUpIcon fontSize="20px" />
		</IconButton>
	);
};
