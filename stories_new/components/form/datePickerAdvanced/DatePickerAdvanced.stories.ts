// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { DsDatePickerAdvanced } from '../../../../components/DesignSystem';

const meta: Meta<typeof DsDatePickerAdvanced> = {
	title: 'Form/DatePickerAdvanced',
	component: DsDatePickerAdvanced,
	tags: ['autodocs'],
	argTypes: {
		mode: {
			control: 'select',
			options: ['simple'],
		},
		disabled: {
			control: 'boolean',
		},
		label: {
			control: 'text',
			description: 'Input label',
		},
	},
};
export default meta;

type Story = StoryObj<typeof DsDatePickerAdvanced>;

const Template = (args: unknown) => ({
	components: { DsDatePickerAdvanced },
	setup() {
		const modelValue = ref(new Date()); // Declara una ref como una variable reactiva
		return { args, modelValue };
	},
	template: `
    <h3>v-model: {{ modelValue }}</h3>
    <DsDatePickerAdvanced v-model="modelValue" v-bind="args" />
  `,
});

export const Model = Template.bind({});
