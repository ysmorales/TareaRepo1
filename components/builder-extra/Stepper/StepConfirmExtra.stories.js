import { ref } from 'vue';
import StepConfirmExtra from './StepConfirmExtra.vue';
import {
    commonArgTypes,
    commonInputArgTypes,
} from '../../../stories/common/common.ts';

export default {
    title: 'Form/StepConfirmExtra',
    component: StepConfirmExtra,
    tags: ['autodocs'],

    argTypes: {
        ...commonArgTypes,
        ...commonInputArgTypes,
        default: { table: { disable: true }, slots: ['default'] },
        items: {
            control: {
                type: 'object',
                iType: 'ListItems',
            },
        }
    },
};

export const Default = {
    args: {},
};