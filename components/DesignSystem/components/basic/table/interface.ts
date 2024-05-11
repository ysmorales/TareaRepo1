export interface ITableColumnData {
    title: string;
    key?: string;
    filter?: { filterType: 'date' | 'select' | 'text' | 'number' | 'run', config?: any };
    size?: string;
    type?: 'link' | 'default' | 'avatar'
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
