export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface InputDateProps {
  label: string;
  value: Date | null | DateRange;
  onChange: (value: Date | null | DateRange) => void;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  isRange?: boolean;
}