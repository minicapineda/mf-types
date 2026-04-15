export type DialogVariant = 'info' | 'success' | 'warning' | 'error' | 'delete' | 'form';

export interface DialogProps {
  isOpen: boolean;
  type?: DialogVariant; 
  title?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export interface DialogActions {
  onClose: () => void;
  onConfirm?: () => void;
}

export type CustomDialogProps = DialogProps & DialogActions;