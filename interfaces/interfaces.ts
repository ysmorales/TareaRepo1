export interface IItemBuilder {
    id: number;
    name: string;
    props?: {
        [key: string]: any;
    };
}
