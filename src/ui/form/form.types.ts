export type FormValues = Record<string, string>;

export interface FieldConfig {
	name: string;
	label: string;
	type: string;
	required?: boolean;
	multiline?: boolean;
	rows?: number;
}

export interface FormComponentProps {
	title?: string;
	extraFields?: FieldConfig[];
	onSubmit: (values: Record<string, string>) => void;
	buttonText?: string;
	isLoading?: boolean;
}
