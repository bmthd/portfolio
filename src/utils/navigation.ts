import type { DeepReadonly } from "ts-essentials";
import { SECTIONS } from "@/constants";

export type NavItem = DeepReadonly<{
	label: string;
	href: string;
}>;

export const generateNavItems = (): ReadonlyArray<NavItem> => {
	return Object.entries(SECTIONS).map(([key, value]) => ({
		label: key.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()),
		href: `#${value}`,
	}));
};
