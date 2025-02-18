import { ref } from 'vue';
import DsTextArea from '../../../../components/DesignSystem/components/form/textArea/DsTextArea.vue';
import DsButton from '../../../../components/DesignSystem/components/basic/button/DsButton.vue';
import { commonInputArgTypes } from '../../../common/common.ts';

export default {
	components: { DsButton, DsTextArea },
	title: 'Form/TextArea',
	component: DsTextArea,
	tags: ['autodocs'],

	argTypes: {
		...commonInputArgTypes,
		'modelValue': { table: { disable: true } },
		'update:modelValue': { table: { disable: true } },
		'label': {
			description:
        'The `Label` component is an essential element of any form. Provides textual information'
        + ' to users about what to enter in the associated input fields.',
		},

		'disabled': {
			description:
        'The `disabled` property is a boolean attribute that, when present, disables the associated input field. This prevents users from interacting with the field until it is enabled again.',
		},

		'error': {
			description: 'Error message .',
		},

		'readOnly': {
			description:
        'The `readOnly` property is a boolean attribute that, when true, sets the associated input field to read-only. This prevents the user from modifying the value of the field, while still allowing them to interact with it.',
		},

		'placeholder': {
			description: 'Placeholder text.',
		},

		'class': {
			description:
        'The `class` property allows you to apply CSS class(es) to the component. You can utilize this to style and customize the appearance of the component in alignment with the rest of your application\'s design.',
		},
		'size': {
			control: {
				type: 'select',
			},
			options: ['small', 'normal', 'medium', 'large', 'auto'],
			description: 'Small, normal, medium, large',
		},
		'radius': {
			description: 'border radius - boolean',
		},
		'focus': {
			description:
        'This can be particularly useful when you want to control or get further details about the focus behavior in the component programmatically.. ',
		},
		'required': {
			description: 'Required fields - boolean',
		},
	},
};
export const Default = {
	args: {},
};

const Template = args => ({
	components: { DsTextArea, DsButton },
	setup() {
		const textAreaValue = ref('this value as a reactive variable(ref)'); // Declara una ref como una variable reactiva
		return { args, textAreaValue };
	},
	template: `
    <div>
      <DsTextArea v-model="textAreaValue" /> <!-- Usa esa ref aquí -->
      <DsButton class="mt-2" @click="handleClick">Obtener valor</DsButton>
    </div>
  `,
	methods: {
		handleClick() {
			// Aquí estás accediendo al valor de textAreaValue cuando haces clic en el botón
			alert('Current value of textarea: ' + this.textAreaValue);
		},
	},
});

export const VModel = Template.bind({});
VModel.args = {};
VModel.parameters = {
	docs: {
		source: {
			code: `
<script setup lang="ts">
  const textAreaValue = ref("this value as a reactive variable(ref)");

  function handleClick() {
    alert("Current value of textarea: " + textAreaValue.value);
  }
</script>

<div>
  <DsTextArea v-model="textAreaValue" />
  <DsButton class="mt-2" @click="handleClick">Obtener valor</DsButton>
</div>
`,
		},
	},
};

export const Error = {
	args: {
		error: 'Custom error',
	},
};

export const Label = {
	args: {
		label: 'My label',
	},
};

export const Rounded = {
	args: {
		radius: true,
	},
};

export const Disabled = {
	args: {
		disabled: true,
	},
};

export const Readonly = {
	args: {
		readOnly: true,
	},
};
