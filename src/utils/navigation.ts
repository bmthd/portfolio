import { SECTIONS } from "@/constants";

export const generateNavItems = () => {
	return Object.entries(SECTIONS).map(([key, value]) => ({
		label: key.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()),
		href: `#${value}`,
	}));
};
