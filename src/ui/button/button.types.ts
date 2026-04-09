import type { ColorToken, RadiusToken, SizeToken } from "../tokens";
import type { ButtonVariant } from "./button.tokens";

export interface ButtonProps {
	label: string;
	variant?: ButtonVariant;
	color?: ColorToken;
	size?: SizeToken;
	radius?: RadiusToken;
	disabled?: boolean;
	loading?: boolean;
	onClick?: (event: unknown) => void;
	fullWidth?: boolean;
	type?: "button" | "submit" | "reset";
	isLoading?: boolean;
}
