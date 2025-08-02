import {
	type CSSObject,
	defaultTheme,
	defineTheme,
	merge,
} from "@yamada-ui/react";

export const theme = defineTheme({
	...defaultTheme,
	fonts: {
		...defaultTheme.fonts,
		body: "var(--font-biz-udp-gothic), sans-serif",
		heading: "var(--font-biz-udp-gothic), sans-serif",
	},
	styles: {
		...defaultTheme.styles,
		globalStyle: merge<CSSObject>(defaultTheme.styles.globalStyle, {
			html: {
				scrollBehavior: "smooth",
			},
		}),
	},
});
