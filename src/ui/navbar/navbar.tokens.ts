export const NAVBAR_ITEM_TYPES = {
	LINK: "link",
	DROPDOWN: "dropdown",
} as const;

export type NavbarItemType =
	(typeof NAVBAR_ITEM_TYPES)[keyof typeof NAVBAR_ITEM_TYPES];
