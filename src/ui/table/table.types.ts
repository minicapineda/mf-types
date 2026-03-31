// table.types.ts
export interface TableColumn<T, R = unknown> {
	key: keyof T | string;
	header: string;
	render?: (item: T) => R;
}

export interface TableProps<T, R = unknown> {
	data: T[];
	columns: TableColumn<T, R>[];
	loading?: boolean;
	emptyMessage?: string;
}
