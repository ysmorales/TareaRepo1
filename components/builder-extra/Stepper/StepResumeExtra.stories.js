import { ref } from 'vue';
import StepResumeExtra from './StepResumeExtra.vue';
import {
    commonArgTypes,
    commonInputArgTypes,
} from '../../../stories/common/common.ts';

export default {
    title: 'Form/StepResumeExtra',
    component: StepResumeExtra,
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