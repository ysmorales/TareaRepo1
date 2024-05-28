export interface IItemBuilder {
    id?: number;
    name?: string;
    validation?: { required: boolean };
    props?: {
        [key: string]: any;
    };
}
