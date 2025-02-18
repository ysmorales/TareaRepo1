import { ref } from 'vue';
import DsModal from '../../../../components/DesignSystem/components/container/modal/DsModal.vue';
import Confirmation from '../../../../components/DesignSystem/components/layout/confirmation/DsConfirmation.vue';
import DsButton from '../../../../components/DesignSystem/components/basic/button/DsButton.vue';
import DsTelematic from '../../../../components/DesignSystem/components/layout/telematic/DsTelematic.vue';
import DsTypography from '../../../../components/DesignSystem/components/basic/typography/DsTypography.vue';

export default {
	components: { DsTypography, DsTelematic, DsButton, Confirmation },
	title: 'Container/Modal',
	component: DsModal,
	tags: ['autodocs'],

	argTypes: {
		'modelValue': { table: { disable: true } },
		'update:modelValue': { table: { disable: true } },

		'title': {
			control: 'text',
			description: 'Text shown in modal dialog header.',
		},

		'acceptText': {
			control: 'text',
			description: 'Text shown in Accept button.',
		},

		'acceptTooltip': {
			control: 'text',
			description: 'Tooltip (title) shown when hovering Accept button.',
		},

		'showHeader': {
			control: 'boolean',
			description: 'Shows/hides modal header.',
		},

		'showFooter': {
			control: 'boolean',
			description: 'Shows hides modal footer.',
		},

		// Slots
		'header': {
			description: 'Slot to insert HTML content in header.',
		},

		'default': {
			description: 'Any Nuxt3 component can be inserted in this slot.',
		},

		'footer': {
			description: 'A Vue 3 component to be inserted in the footer slot.',
		},

		// Events
		'accept': {
			description: 'Event emitted when the Accept button is clicked.',
		},

		'close': {
			description: 'Event emitted when the Close button is clicked or Escape key pressed.',
		},
	},
};

const Template = args => ({
	components: { DsModal, DsButton, DsTypography },
	setup() {
		const isShowModal = ref(false); // Declara una ref como una variable reactiva
		return { args, isShowModal };
	},
	template: `
    <div style="height: 400px">
      <DsModal v-model="isShowModal" v-bind="args">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed sit amet mi id eros egestas condimentum. Aliquam erat volutpat. Phasellus ac auctor
        mauris. Proin ullamcorper metus ut lectus tristique, et vehicula erat semper. Vivamus
        convallis purus ante, vitae tempus mi auctor id. Integer a ipsum sem. Curabitur euismod
        ut augue eget tristique. Nunc et porttitor quam. Integer tristique malesuada erat, vitae
        fermentum quam tempor a. Cras vitae mattis purus. Fusce at scelerisque ligula.
      </DsModal>
      <dsTypography variant="h1">Modal Template</dsTypography>
      <DsTypography variant="p" class="mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </DsTypography>
      <DsButton class="mt-5" @click="handleClick">Abrir Modal</DsButton>
    </div>
  `,
	methods: {
		handleClick() {
			this.isShowModal = true;
			// Aquí estás accediendo al valor de textAreaValue cuando haces clic en el botón
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
  const isShowModal = ref(false);

  function handleClick() {
    isShowModal.value=!this.isShowModal.value
  }
</script>

<div>
      <DsModal v-model="isShowModal"/> <!-- Usa esa ref aquí -->
      <DsButton class="mt-2" @click="handleClick">Abrir Modal</DsButton>
</div>
`,
		},
	},
};
const WithBodyComponentTemplate = args => ({
	components: { DsModal, DsButton, DsTelematic },
	setup() {
		const isShowModal = ref(false); // Declara una ref como una variable reactiva
		return { args, isShowModal };
	},
	template: `
    <div style="height: 1000px">
      <DsModal v-model="isShowModal" :is-header="false">
        <DsTelematic />
      </DsModal>
      <DsButton class="mt-2" @click="handleClick">Open telematic in modal</DsButton>
      <DsTelematic />

    </div>
  `,
	methods: {
		handleClick() {
			this.isShowModal = true;
			// Aquí estás accediendo al valor de textAreaValue cuando haces clic en el botón
		},
	},
});

export const UseBodySlot = WithBodyComponentTemplate.bind({});
UseBodySlot.args = {};

UseBodySlot.parameters = {
	docs: {
		source: {
			code: `
<script setup lang="ts">
  const isShowModal = ref(false);

  function handleClick() {
    isShowModal.value=!isShowModal.value
  }
</script>

<div>
      <DsModal v-model="isShowModal"/><DsTelematic/></DsModal>
      <DsButton class="mt-2" @click="handleClick">Open telematic in modal</DsButton>
      <DsTelematic />
</div>
`,
		},
	},
};
