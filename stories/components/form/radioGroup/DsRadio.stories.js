import { ref } from 'vue';
import {
	commonArgTypes,
	commonInputArgTypes,
	buildStory,
} from '../../../common/common';
import DsRadioGroup from '../../../../components/DesignSystem/components/form/radio-group/DsRadioGroup.vue';
import DsRadio from '../../../../components/DesignSystem/components/form/radio-group/DsRadio.vue';

export default {
	components: { DsRadioGroup },
	title: 'Form/RadioGroup',
	component: DsRadioGroup,
	tags: ['autodocs'],
	argTypes: {
		...commonArgTypes,
		...(({ size, ...rest }) => rest)(commonInputArgTypes),
		default: {
			table: {
				disable: true,
			},
		},
	},
};
const Template = args => ({
	components: { DsRadioGroup, DsRadio },
	setup() {
		const selectedValue = ref(null); // Declara una ref como una variable reactiva
		return { args, selectedValue };
	},
	template: `
    <h1>{{ selectedValue || 'wait value' }}</h1>
    <DsRadioGroup v-model="selectedValue" v-bind="args">
      <DsRadio :value="'Option 1'" name="prueba">Option 1</DsRadio>
      <DsRadio :value="'Option 2'" name="prueba">Option 2</DsRadio>
      <DsRadio :value="'Option 3'" name="prueba">Option 3</DsRadio>
    </DsRadioGroup>
  `,
});
export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
	docs: {
		source: {
			code: `
<script setup lang="ts">
    const selectedValue = ref("Option 1");
</script>

<div>
    <h1>{{ selectedValue || 'wait value' }}</h1>
    <DsRadioGroup v-model="selectedValue" :focus="true" >
      <DsRadio :value="'Option 1'" name="prueba">Option 1</DsRadio>
      <DsRadio :value="'Option 2'" name="prueba">Option 2</DsRadio>
      <DsRadio :value="'Option 3'" name="prueba">Option 3</DsRadio>
    </DsRadioGroup>
</div>
`,
		},
	},
};

// export const Label = {
//   args: {
//     label: "Example label",
//   },
// };
//
// export const Disabled = buildStory({
//   steppers: { DsRadio },
//
//   code: {
//     template: `
//       <div>
//         <DsRadio label="Disabled state - visual change, non-interaction"
//                  :disabled="true" />
//       </div>
//     `,
//   },
// });
//
// export const Required = buildStory({
//   steppers: { DsRadio },
//
//   code: {
//     template: `
//       <div>
//         <DsRadio label="Required" :required="true" />
//       </div>
//     `,
//   },
// });
