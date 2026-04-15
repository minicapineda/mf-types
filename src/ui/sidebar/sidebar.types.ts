
export interface SidebarMenuItem {
  label: string;
  icon: () => unknown; 
  path: string;
}

export interface SidebarProps {
  open: boolean;
  toggleDrawer: () => void;
  menuItems?: SidebarMenuItem[];
}