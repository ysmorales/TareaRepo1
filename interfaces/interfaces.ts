export interface IItemBuilder {
    id?: number;
    name?: string;
    validation?: { required: boolean, custom?: null | 'mail' | 'number' | 'text' | 'run' };
    props?: {
        [key: string]: any;
    };
}
