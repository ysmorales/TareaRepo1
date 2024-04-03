export interface ITableColumnData {
    title: string;
    key?: string;
    filter?: boolean;
    type?: 'link' | 'default'
    actions?: {
        delete?: boolean;
        edit?: boolean;
        view?: boolean;
        custom?: boolean;
    };
}

export interface IPagination {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    itemsPerPageOptions: number[];
}
