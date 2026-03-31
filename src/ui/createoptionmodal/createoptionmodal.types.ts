// mf-types/src/ui/modal/modal.types.ts

export interface CreateOptionModalProps {
	open: boolean;
	onClose: () => void;
	onSave: (name: string) => void;
	initialValue: string;
	title?: string;
}

export type CreateOptionModal = CreateOptionModalProps;
