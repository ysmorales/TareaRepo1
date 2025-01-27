import { ref } from 'vue';
import DsSomosLayout from '../../../../components/DesignSystem/components/layout/somos-layout/DsSomosLayout.vue';
import SomosPage from '../../../../components/DesignSystem/components/pages/somos-page/SomosPage.vue';

export default {
	title: 'Layout/SomosLayout',
	component: DsSomosLayout,
	tags: ['autodocs'],
	argTypes: {},
};

export const Default = {
	args: {},
};

const Template = args => ({
	components: { DsSomosLayout, SomosPage },
	setup() {
		// Declara una ref como una variable reactiva
		return {};
	},
	template: `
        <DsSomosLayout>
            <SomosPage/>
        </DsSomosLayout>
    `,
});
export const examplePageComponent = Template.bind({});
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
