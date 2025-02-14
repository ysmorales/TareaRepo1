import { ref } from 'vue';
import RadioGroupExtra from './RadioGroupExtra.vue'
import {
    commonArgTypes,
    commonInputArgTypes,
} from '../../../stories/common/common.ts';

export default {
    title: 'Form/RadioGroupExtra',
    component: RadioGroupExtra,
    tags: ['autodocs'],

    argTypes: {
        ...commonArgTypes,
        ...commonInputArgTypes,
        default: { table: { disable: true } },
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