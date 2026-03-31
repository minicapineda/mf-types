// src/tokens/index.ts

export const UI_TOKENS = {
	colors: {
		primary: "primary",
		secondary: "secondary",
		error: "error",
		warning: "warning",
		success: "success",
	},
	sizes: {
		sm: "sm",
		md: "md",
		lg: "lg",
	},
	radius: {
		none: "none",
		sm: "sm",
		md: "md",
		lg: "lg",
		full: "full",
	},
} as const;

export type ColorToken =
	(typeof UI_TOKENS.colors)[keyof typeof UI_TOKENS.colors];
export type SizeToken = (typeof UI_TOKENS.sizes)[keyof typeof UI_TOKENS.sizes];
export type RadiusToken =
	(typeof UI_TOKENS.radius)[keyof typeof UI_TOKENS.radius];
