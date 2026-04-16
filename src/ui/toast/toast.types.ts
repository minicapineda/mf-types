

export type ToastSeverity = 'success' | 'info' | 'warning' | 'error';

export interface ToastProps {
  id?: string | number;
  open: boolean;
  message: string;
  severity?: ToastSeverity;
  autoHideDuration?: number;
  onClose: () => void;
}