export type FormValues = Record<string, string>;


export interface FormComponentProps {
	title?: string;
	onSubmit: (values: Record<string, string>) => void;
	isLoading?: boolean;
}
