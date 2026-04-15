// input-date.types.ts
export interface InputDateProps {
    label: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
}