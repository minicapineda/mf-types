export interface EmptyStateData {
  title: string;
  description?: string;
  iconName?: string;
  actionId?: string;
  actionLabel?: string;
  onAction?: (id?: string) => void; 
}