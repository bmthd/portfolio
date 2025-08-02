"use client";

import {
	Box,
	type BoxProps,
	Heading as H,
	type HeadingProps,
} from "@yamada-ui/react";
import { createNextLevel, HeadingLevelContext, useLevel } from "./context";

export const Root = (props: BoxProps) => {
	const level = useLevel();
	const nextLevel = createNextLevel(level);
	return (
		<HeadingLevelContext value={{ level: nextLevel }}>
			<Box as="section" {...props} />
		</HeadingLevelContext>
	);
};

export const Heading = (props: HeadingProps) => {
	const level = useLevel();
	switch (level) {
		case 1:
			return <H as="h1" {...props} />;
		case 2:
			return <H as="h2" {...props} />;
		case 3:
			return <H as="h3" {...props} />;
		case 4:
			return <H as="h4" {...props} />;
		case 5:
			return <H as="h5" {...props} />;
		case 6:
			return <H as="h6" {...props} />;
		default:
			return <H as="h1" {...props} />;
	}
};
