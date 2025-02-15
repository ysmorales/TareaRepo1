import RadioGroupExtra from './RadioGroupExtra.vue'
import {
    commonArgTypes,
    commonInputArgTypes,
} from '../../../stories/common/common.ts';

//https://www.npmjs.com/package/ts-json-schema-generator
//https://typia.io/docs/random/

export default {
    title: 'Form/RadioGroupExtra',
    component: RadioGroupExtra,
    tags: ['autodocs'],

    argTypes: {
        ...commonArgTypes,
        ...commonInputArgTypes,
        default: { table: { disable: true } },
        items: {
            control: {
                type: 'object',
                iType: 'ListOptions',
                labels: {
                    first: 'First Option',
                    second: 'Second Option'
                }
            },
            options: ['first', 'second'],
            mapping: {
                first: { id: 1, value: 'value 1' },
                second: { id: 2, value: 'value 2' },
            }
        }
    },
};

export const Default = {
    args: {},
};