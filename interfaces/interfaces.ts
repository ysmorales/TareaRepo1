export interface IItemBuilder {
    id?: number;
    name?: string;
    type: 'DsConfirmationButton' | 'DsSelect' | 'DsInput' | 'DsTextArea';
    validation?: { required: boolean, custom?: 'defecto' | 'email' | 'number' | 'text' | 'run' };
    props?: {
        [key: string]: any;
    };
}
