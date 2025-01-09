import { ref } from 'vue';

import DsCheckGroup from '../../../../components/DesignSystem/components/form/check-group/DsCheckGroup.vue';
import DsCheckBox from '../../../../components/DesignSystem/components/form/check-group/DsCheckBox.vue';
import { commonArgTypes, commonInputArgTypes } from '../../../common/common';

export default {
	title: 'Form/CheckGroup',
	component: DsCheckGroup,
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
	components: { DsCheckGroup, DsCheckBox },
	setup() {
		const selectedValue = ref([]); // Declara una ref como una variable reactiva
		return { args, selectedValue };
	},
	template: `
    <h1>{{ selectedValue }}</h1>
    <DsCheckGroup v-model="selectedValue" v-bind="args">
      <DsCheckBox value="Option 1">Option 1</DsCheckBox>
      <DsCheckBox value="Option 2">Option 2</DsCheckBox>
      <DsCheckBox value="Option 3">Option 3</DsCheckBox>
    </DsCheckGroup>
  `,
});
export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
	docs: {
		source: {
			code: `
<script setup lang="ts">
    const selectedValue = ref([]);
</script>

<div>
   <h1>{{ selectedValue }}</h1>
    <DsCheckGroup v-model="selectedValue" v-bind="args">
      <DsCheckBox value="Option 1">Option 1</DsCheckBox>
      <DsCheckBox value="Option 2">Option 2</DsCheckBox>
      <DsCheckBox value="Option 3">Option 3</DsCheckBox>
    </DsCheckGroup>
</div>
`,
		},
	},
};
