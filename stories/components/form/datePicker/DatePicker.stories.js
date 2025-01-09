import { ref } from 'vue';
import DsDatePicker from '../../../../components/DesignSystem/components/form/datePicker/DsDatePicker.vue';
import { commonArgTypes } from '../../../common/common.ts';
import DsButton from '../../../../components/DesignSystem/components/basic/button/DsButton.vue';

export default {
	components: { DsDatePicker },
	title: 'Form/DatePicker',
	component: DsDatePicker,
	tags: ['autodocs'],

	argTypes: {
		...commonArgTypes,
		disabled: {
			description: 'Disabled date picker - boolean',
		},

		label: {
			description: 'Edit text for the label',
		},

		rounded: {
			description: 'border radius - boolean',
		},
		hideLabel: { description: 'Show or hide label text' },

		focus: {
			description:
        'This can be particularly useful when you want to control or get further details about the focus behavior in the component programmatically.. ',
		},
		id: {
			description:
        'The id property uniquely identifies the date picker component within the application.',
		},

		required: {
			control: 'boolean',
			description:
        'Enabled/disabled required state. This state is used to validate when submitting a form.',
		},

		error: {
			control: 'boolean',
			description: 'Enable/disable error state.',
		},
	},
};
export const Default = {
	args: {},
};
const Template = args => ({
	components: { DsDatePicker, DsButton },
	setup() {
		const datePicker = ref(new Date(1982, 3, 3)); // Declara una ref como una variable reactiva
		return { args, datePicker };
	},
	template: `
      <div>
        <DsDatePicker v-model="datePicker"/> <!-- Usa esa ref aquí -->
        <DsButton class="mt-2" @click="handleClick">Obtener valor</DsButton>
      </div>
    `,
	methods: {
		handleClick() {
			// Aquí estás accediendo al valor de textAreaValue cuando haces clic en el botón
			alert('Current value of datePicker: ' + this.datePicker);
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
  const datePicker = ref("this value as a reactive variable(ref)");

  function handleClick() {
    alert("Current value of datePicker: " + datePicker.value);
  }
</script>

<div>
  <DsDatePicker v-model="datePickerValue" />
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

export const Required = {
	args: {
		required: true,
	},
};
export const Disabled = {
	args: {
		disabled: true,
	},
};
