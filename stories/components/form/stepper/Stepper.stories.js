import { ref } from 'vue';
import DsStepper from '../../../../components/DesignSystem/components/form/stepper/DsStepper.vue';
import DsButton from '../../../../components/DesignSystem/components/basic/button/DsButton.vue';
import {
	commonArgTypes,
	commonInputArgTypes,
} from '../../../common/common.ts';

export default {
	title: 'Form/Stepper',
	component: DsStepper,
	tags: ['autodocs'],

	argTypes: {
		...commonArgTypes,
		...commonInputArgTypes,
		class: {
			control: 'text',
			description:
        'The `class` property allows you to apply CSS class(es) to the component. You can utilize this to style and customize the appearance of the component in alignment with the rest of your application\'s design.',
		},
		stepCount: {
			description:
        'This property defines the total number of steps that will be '
        + 'rendered in the Stepper component. Simple yet concise, it should be a number '
        + 'representing the amount of steps needed in your process flow. By default, '
        + 'this value could be 01. Use this '
        + 'prop to dynamically control the number of steps in your Stepper according to'
        + ' your process flow requirements.',
		},
		selected: {
			description:
        'This property defines the step that is currently active or selected. '
        + 'It should be a number representing the step you want to highlight as the current '
        + 'one in your set of steps. Based on this prop, you can customize the appearance of '
        + 'the active step to make it stand out from the others, perhaps by changing its borderColor '
        + 'or size. It is an effective way to guide the user through your process flow, always'
        + ' clearly indicating what step they are in.',
		},
		changeStep: {
			description:
        'This property is typically a function or a method that allows you to programmatically'
        + ' control the active step of the Stepper component. When invoked, it should update the selected'
        + ' prop, effectively changing the highlighted step. It can be used to dynamically navigate through '
        + 'the steps of your process flow based on user input or program logic. By controlling which step is '
        + 'currently active, it helps guide the user through the steps in your application\'s process flow. '
        + 'The parameter passed to this function should typically be the number of the step you want to switch '
        + 'to.',
		},
	},
};

export const Default = {
	args: {},
};
export const ActionTemplate = args => ({
	components: { DsStepper },
	setup() {
		const step = ref(1);

		const handleStep = (newStep) => {
			step.value = newStep;
		};

		return {
			step,
			handleStep,
		};
	},
	template:
    '<div><DsStepper :selected="step" @change-step="handleStep"/> </div>',
});
ActionTemplate.storyName = 'ActionTemplate';
ActionTemplate.parameters = {
	docs: {
		description: {
			story: `This story demonstrates the use of the DsStepper component with an initial selection
      and a function to handle the step change. In the template, the 'selected' property is bound 
      to 'step' and the 'change-step' event calls the 'handleStep' function. When the 'change-step' 
      event is triggered on the component, 'handleStep' runs, changing the value of 'step'.`,
		},
		source: {
			code: `
      <template>
    <DsStep :selected="step" @change-step="handleStep" />
</template>
<script>

const step = ref(1);


function handleStep(step) {
  step.value = step;
}
</script>`,
		},
	},
};
export const StepCount = {
	args: {
		stepCount: 8,
	},
};
const otherTemplate = args => ({
	components: { DsStepper, DsButton },
	setup() {
		const step = ref(1);

		const handleStep = (newStep) => {
			if (newStep === 'sumar' && step.value < 4) {
				step.value = step.value + 1;
			}
			else if (newStep === 'restar' && step.value > 1) {
				step.value = step.value - 1;
			}
		};

		return {
			step,
			handleStep,
		};
	},
	template: `
    <div>
      <DsStepper v-model="step" hide-button />
      <div class="flex">
        <DsButton @click="handleStep('restar')" class="m-1 mt-3" start-image="las la-angle-left">back</DsButton>
        <DsButton @click="handleStep('sumar')" class="m-1 mt-3" end-image="las la-angle-right">forward</DsButton>
      </div>
    </div>`,
});
export const ButtonStepperDemostration = otherTemplate.bind({});
ButtonStepperDemostration.args = {};
ButtonStepperDemostration.parameters = {
	docs: {
		source: {
			code: `
<script setup lang="ts">
    const step = ref(1);
    const handleStep = (newStep) => {
      if (newStep === "sumar" && step.value < 4) {
        step.value = step.value + 1;
      } else if (newStep === "restar" && step.value > 1) {
        step.value = step.value - 1;
      }
    };
</script>
<template>
     <div>
      <DsStepper :selected="step" hide-button v-model="step"/>
      <div class="flex">
        <DsButton @click="handleStep('restar')" class="m-1 mt-3" start-image="las la-angle-left">back</DsButton>
        <DsButton @click="handleStep('sumar')" class="m-1 mt-3" end-image="las la-angle-right">forward</DsButton>
      </div>
    </div>
</template>
        `,
		},
	},
};

const exampleTemplate = args => ({
	components: { DsStepper, DsButton },
	setup() {
		const step = ref(1);

		const handleStep = (newStep) => {
			step.value = newStep;
		};

		return {
			step,
			handleStep,
		};
	},
	template: `
        <div>
            <DsStepper v-model="step" @change-step="handleStep">
                <div class="flex justify-center mt-10">
                    <h1 v-if="step===1">Componente1</h1>
                    <h1 v-if="step===2">Componente2</h1>
                    <h1 v-if="step===3">Componente3</h1>
                    <h1 v-if="step===4">Componente4</h1>
                </div>
            </DsStepper>
        </div>`,
});
export const exampleDemostration = exampleTemplate.bind({});
ButtonStepperDemostration.args = {};
ButtonStepperDemostration.parameters = {
	docs: {
		source: {
			code: `
<script setup lang="ts">
    const step = ref(1);
    const handleStep = (newStep) => {
      if (newStep === "sumar" && step.value < 4) {
        step.value = step.value + 1;
      } else if (newStep === "restar" && step.value > 1) {
        step.value = step.value - 1;
      }
    };
</script>
<template>
     <div>
      <DsStepper :selected="step" hide-button v-model="step"/>
      <div class="flex">
        <DsButton @click="handleStep('restar')" class="m-1 mt-3" start-image="las la-angle-left">back</DsButton>
        <DsButton @click="handleStep('sumar')" class="m-1 mt-3" end-image="las la-angle-right">forward</DsButton>
      </div>
    </div>
</template>
        `,
		},
	},
};
