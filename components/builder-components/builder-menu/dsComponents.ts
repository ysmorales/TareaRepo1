import {InputProperty, SelectProperty, TextAreaProperty} from "~/library/ComponentsLibraryProperty";
import type {IItemBuilder} from "~/interfaces/interfaces";

export const DsComponents: IItemBuilder[] = [
    {
        name: 'DsInput',
        type: 'DsInput',
        props: InputProperty
    },
    {
        name: 'DsTextArea',
        type: 'DsTextArea',
        props: TextAreaProperty
    },
    {
        name: 'DsSelect',
        type: 'DsSelect',
        props: SelectProperty
    },
    {
        name: 'DsConfirmationButton',
        type: 'DsConfirmationButton',
        props: SelectProperty
    },
]