// navbar.types.ts
export interface NavItem {
	label: string;
	path: string;
	icon?: string;
}

export interface NavbarProps {
	items: NavItem[];
	logo?: string;
	onLogout?: () => void;
	userName?: string;
}

