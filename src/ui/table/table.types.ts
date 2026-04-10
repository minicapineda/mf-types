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
	totalCount?: number;
	page?: number;
	rowsPerPage?: number;
	onPageChange?: (page: number) => void;
	onRowsPerPageChange?: (rowsPerPage: number) => void;
	onSearch?: (query: string) => void;
}

export interface Invoices {
	id: number;
	codigo: string;
	cliente: string;
	total: string;
	fecha: string;
}
