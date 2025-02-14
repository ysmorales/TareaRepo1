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