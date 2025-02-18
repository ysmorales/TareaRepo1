import { ref } from 'vue';
import DsStepperExtra from './StepperExtra.vue'
import {
    commonArgTypes,
    commonInputArgTypes,
} from '../../../stories/common/common.ts';

export default {
    title: 'Form/DsStepperExtra',
    component: DsStepperExtra,
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
        stepCount: {
            description: 'This property defines the total number of steps that will be ' +
                'rendered in the Stepper component. Simple yet concise, it should be a number ' +
                'representing the amount of steps needed in your process flow. By default, ' +
                'this value could be 01. Use this ' +
                'prop to dynamically control the number of steps in your Stepper according to' +
                ' your process flow requirements.',
        },
        selected: {
            description: 'This property defines the step that is currently active or selected. ' +
                'It should be a number representing the step you want to highlight as the current ' +
                'one in your set of steps. Based on this prop, you can customize the appearance of ' +
                'the active step to make it stand out from the others, perhaps by changing its borderColor ' +
                'or size. It is an effective way to guide the user through your process flow, always' +
                ' clearly indicating what step they are in.',
        },
        changeStep: {
            description: 'This property is typically a function or a method that allows you to programmatically' +
                ' control the active step of the Stepper component. When invoked, it should update the selected' +
                ' prop, effectively changing the highlighted step. It can be used to dynamically navigate through ' +
                'the steps of your process flow based on user input or program logic. By controlling which step is ' +
                'currently active, it helps guide the user through the steps in your application\'s process flow. ' +
                'The parameter passed to this function should typically be the number of the step you want to switch ' +
                'to.',
        },
    },
};

export const Default = {
    args: {},
};