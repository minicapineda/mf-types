export interface InputProps {
	name: string;
	label: string;
	type?: string;
	value?: string;
	onChange?: (value: string) => void;
	onBlur?: () => void;
	error?: boolean;
	helperText?: string;
	required?: boolean;
	multiline?: boolean;
	rows?: number;
	placeholder?: string;
	disabled?: boolean;
}
