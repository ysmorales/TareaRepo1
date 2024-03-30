export interface ITableColumn {
  title: string;
  key?: string;
  filter?: boolean;
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
