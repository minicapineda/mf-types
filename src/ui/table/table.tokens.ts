export const TABLE_DENSITY = {
	COMPACT: "compact",
	NORMAL: "normal",
	SPACED: "spaced",
} as const;

export type TableDensity = (typeof TABLE_DENSITY)[keyof typeof TABLE_DENSITY];
