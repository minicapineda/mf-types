// packages/mf-types/src/index.ts

export type ModalSize = "sm" | "md" | "lg";

export interface CustomModalProps<T = unknown> {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: T;
  footer?: T;
  size?: ModalSize;
}