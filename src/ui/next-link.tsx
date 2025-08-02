import type {
	ButtonProps,
	HTMLRefAttributes,
	IconButtonProps,
	LinkProps,
	Merge,
} from "@yamada-ui/react";
import { Button, IconButton, Link } from "@yamada-ui/react";
import type { LinkProps as OriginalLinkProps } from "next/link";
// biome-ignore lint :plugin このファイルのみ許可
import OriginalLink from "next/link";
import type { FC } from "react";

export interface NextLinkProps extends LinkProps {
	external?: boolean;
}

export const NextLink: FC<NextLinkProps> = ({ ...rest }) => {
	return <Link as={OriginalLink} {...rest} />;
};

export interface NextLinkButtonProps
	extends Omit<Merge<OriginalLinkProps, ButtonProps>, "as" | "ref">,
		HTMLRefAttributes<"a"> {
	external?: boolean;
}

export const NextLinkButton: FC<NextLinkButtonProps> = ({
	external,
	...rest
}) => {
	return (
		<Button
			as={OriginalLink}
			rel={external ? "noopener" : undefined}
			target={external ? "_blank" : undefined}
			{...rest}
		/>
	);
};

export interface NextLinkIconButtonProps
	extends Omit<Merge<OriginalLinkProps, IconButtonProps>, "as" | "ref">,
		HTMLRefAttributes<"a"> {
	external?: boolean;
}

export const NextLinkIconButton: FC<NextLinkIconButtonProps> = ({
	external,
	...rest
}) => {
	return (
		<IconButton
			as={OriginalLink}
			rel={external ? "noopener" : undefined}
			target={external ? "_blank" : undefined}
			{...rest}
		/>
	);
};

export interface NextTextLinkProps
	extends Omit<NextLinkProps, "as" | "variant"> {
	external?: boolean;
	variant?: "navigation" | "primary" | "secondary" | "footer" | "subtle";
}

export const NextTextLink: FC<NextTextLinkProps> = ({
	external,
	variant = "primary",
	...rest
}) => {
	const getVariantStyles = () => {
		switch (variant) {
			case "navigation":
				return {
					color: "gray.600",
					transition: "color 0.2s",
					_hover: { color: "blue.500" },
				};
			case "primary":
				return {
					color: "blue.500",
					fontWeight: "medium",
					_hover: { textDecoration: "underline" },
				};
			case "secondary":
				return {
					color: "gray.600",
					_hover: { color: "blue.500" },
				};
			case "footer":
				return {
					color: "gray.400",
					_hover: { color: "white" },
				};
			case "subtle":
				return {
					textDecoration: "none",
					_hover: { textDecoration: "none" },
				};
			default:
				return {};
		}
	};

	return (
		<Link
			as={OriginalLink}
			rel={external ? "noopener" : undefined}
			target={external ? "_blank" : undefined}
			{...getVariantStyles()}
			{...rest}
		/>
	);
};
