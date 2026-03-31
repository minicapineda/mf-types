export const BUTTON_VARIANTS = {
	SOLID: "solid",
	OUTLINE: "outline",
	GHOST: "ghost",
} as const;

export type ButtonVariant =
	(typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
