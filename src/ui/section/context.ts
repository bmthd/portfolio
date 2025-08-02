import { createContext, useContext } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const HeadingLevelContext = createContext<{ level: HeadingLevel }>({
	level: 1,
});

export const useLevel = (): HeadingLevel => {
	const context = useContext(HeadingLevelContext);
	return context.level;
};

export const createNextLevel = (currentLevel: HeadingLevel): HeadingLevel => {
	if (currentLevel < 6) {
		return (currentLevel + 1) as HeadingLevel;
	}
	return currentLevel;
};
