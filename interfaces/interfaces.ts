export interface IItemBuilder {
    id?: number;
    name?: string;
    type: 'DsConfirmationButton' | 'DsSelect' | 'DsInput' | 'DsTextArea';
    validation?: { required: boolean, custom?: null | 'mail' | 'number' | 'text' | 'run' };
    props?: {
        [key: string]: any;
    };
}
