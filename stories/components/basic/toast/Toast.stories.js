import { ref } from 'vue';
import DsToast from '../../../../components/DesignSystem/components/basic/toast/DsToast.vue';
import DsButton from '../../../../components/DesignSystem/components/basic/button/DsButton.vue';

// const { margin, ...otherProps } = commonArgTypes;
export default {
	components: { DsToast },
	title: 'Basic/Toast',
	component: DsToast,
	tags: ['autodocs'],
	argTypes: {
		modelValue: {
			control: 'boolean',
			description:
        'Controls visibility of the toast. Set to \'true\' to show the toast, and \'false\' to hide it.',
			defaultValue: true,
		},
		title: {
			control: 'text',
			description: 'Specifies the title of the toast.',
			defaultValue: 'Title',
		},
		message: {
			control: 'text',
			description: 'Defines the actual message/content of the toast.',
			defaultValue: 'Petición enviada satisfactoriamente',
		},
		time: {
			control: 'number',
			description:
        'Amount of time (in milliseconds) for which the toast is visible. After this time, the toast will disappear.',
			defaultValue: 3000,
		},
		variant: {
			control: 'select',
			options: ['success', 'danger', 'info'],
			description:
        'Determines the type or category of the toast. Can be \'success\', \'danger\', or \'info\'. This generally affects the color and icon of the toast.',
			defaultValue: 'success',
		},
		position: {
			control: 'select',
			options: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'],
			description:
        'Controls where on the screen the toast is positioned. Can be \'topRight\', \'topLeft\', \'bottomRight\', or \'bottomLeft\'.',
			defaultValue: 'topRight',
		},
	},
};

const Template = args => ({
	components: { DsButton, DsToast },
	setup() {
		const showToast = ref(false); // Declara una ref como una variable reactiva
		return { args, showToast };
	},
	template: `
      <div class="h-[200px]"><!-- Usa esa ref aquí -->
        <DsToast v-model="showToast" v-bind="args"/>
        <DsButton class="mt-2" @click="handleClick">Open toast</DsButton>
      </div>
    `,
	methods: {
		handleClick() {
			this.showToast = true;
		},
	},
});
export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
	docs: {
		source: {
			code: `
<script setup lang="ts">
  const showToast = ref(false);

  function handleClick() {
    showToast.value = true;
  }
</script>

<div>
  <div class="h-[200px]">
        <DsToast v-model="showToast"/>
        <DsButton class="mt-2" @click="handleClick">Open toast</DsButton>
      </div>
</div>
`,
		},
	},
};
