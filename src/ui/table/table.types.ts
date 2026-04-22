export interface TableColumn<RowData, RenderResult = unknown> {
    key: keyof RowData | string;
    header: string;
    render?: (item: RowData) => RenderResult;
}

export interface TableProps<RowData, RenderResult = unknown> {
    data: RowData[];
    columns: TableColumn<RowData, RenderResult>[];
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