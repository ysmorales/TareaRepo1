import { ref } from 'vue';
import DsStepExtra from './StepExtra.vue'
import {
    commonArgTypes,
    commonInputArgTypes,
} from '../../../stories/common/common.ts';

export default {
    title: 'Form/StepExtra',
    component: DsStepExtra,
    tags: ['autodocs'],

    argTypes: {
        ...commonArgTypes,
        ...commonInputArgTypes,
        default: { table: { disable: true }, slots: ['default'] },
        class: {
            control: 'text',
                description:
                'The `class` property allows you to apply CSS class(es) to the component. You can utilize this to style and customize the appearance of the component in alignment with the rest of your application\'s design.',
        },
    },
};

export const Default = {
    args: {},
};