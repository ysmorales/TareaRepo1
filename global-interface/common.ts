
export interface ItemOption {
    id: string | number;
    value: string | number;
}

export type ListOptions = ItemOption[]

export interface SubItem {
    label: string;
    value: string | string[];
    isTag?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rowRender?: any;
    class?: string
}

export interface IItem {
    title: string;
    subItems: SubItem[];
}

export type ListItems = IItem[]
