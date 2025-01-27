export interface ITableColumnData {
    id?: number;
    title?: string;
    key?: string;
    dataType?: string;
    noShow?: boolean;
    customComponent?: object;
    filter?: {
        title?: string;
        filterType?: 'date' | 'select' | 'text' | 'number' | 'run';
        config?: {
            options: { value: string; text: string }[];
        };
        placeholder?: string;
    };
    customStyle?: string;
    size?: string;
    type?: 'link' | 'default' | 'avatar' | 'tag';
    actions?: {
        delete?: boolean;
        edit?: boolean;
        view?: boolean;
        custom?: boolean;
        type?: 'link' | 'button'
        labels?: {
            delete?: string;
            edit?: string;
            view?: string;
        }
    };
}

export interface IPagination {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    noUpdateDataOnPagination?: 'yes' | 'no'
}

export interface IFilterInfo {
    title: string,
    buttonOkText: string,
    buttonCancelText: string
    extraFilters: any[]
}
