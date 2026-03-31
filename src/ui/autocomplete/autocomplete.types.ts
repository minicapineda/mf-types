// autocomplete.types.ts
export interface AutocompleteOption {
	id: string | number;
	label: string;
}

export interface AutocompleteProps<T extends AutocompleteOption> {
	options: T[];
	value?: T | null;
	onChange: (value: T | null) => void;
	onAddNew?: (currentInput: string) => void;
	label: string;
	placeholder?: string;
	addNewText?: string;
}
