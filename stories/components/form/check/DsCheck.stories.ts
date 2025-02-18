import { ref } from 'vue';
import DsCheck from '../../../../components/DesignSystem/components/form/check/DsCheck.vue';
import DsButton from '../../../../components/DesignSystem/components/basic/button/DsButton.vue';
import {
	commonArgTypes,
	commonInputArgTypes,
	buildStory,
} from '../../../common/common';

export default {
	title: 'Form/Check',
	component: DsCheck,
	tags: ['autodocs'],
	argTypes: {
		...commonArgTypes,
		...commonInputArgTypes,
		rounded: {
			control: 'boolean',
			description: 'Enable/disable rounded borders',
			defaultValue: true,
		},
		id: {
			description:
        'The id property uniquely identifies the check component within the application.',
		},
		helpMessage: {
			description:
        'The helpMessage property stores a guidance text to assist or inform the user about the component usage.',
		},
	},
};

export const Default = {};

export const Checked = buildStory({
	components: { DsCheck },

	setup: () => {
		const checked = ref(true);

		return { checked };
	},

	code: {
		setup: `const checked = ref(true);`,

		template: `
      <DsCheck v-model="checked" />
    `,
	},
});

export const Label = {
	args: {
		label: 'Example label',
	},
};

export const Rounded = buildStory({
	components: { DsCheck },

	code: {
		template: `
      <div>
        <DsCheck label="With rounded border" :rounded="true" />
      </div>
    `,
	},
});

export const Disabled = buildStory({
	components: { DsCheck },

	code: {
		template: `
      <div>
        <DsCheck label="Disabled state - visual change, non-interaction"
                 :disabled="true" />
      </div>
    `,
	},
});

export const Required = buildStory({
	components: { DsCheck },

	code: {
		template: `
      <div>
        <DsCheck label="Required Check" :required="true" />
      </div>
    `,
	},
});

export const ReactiveCheck = buildStory({
	components: { DsCheck, DsButton },

	setup: () => {
		const checkValue = ref(false);

		return { checkValue };
	},

	methods: {
		toggleCheck() {
			// @ts-ignore
			this.checkValue = !this.checkValue;
		},
	},

	code: {
		setup: `
const checkValue = ref(false);

function toggleCheck() {
  checkValue.value = !checkValue.value
}
`,

		template: `
      <div>
        v-model is a two-way binded property.
      </div>

      <DsCheck v-model="checkValue" />

      <div>
        Value: <strong>{{ checkValue }}</strong>
      </div>

      <div>
        <DsButton @click="toggleCheck">Toggle Check</DsButton>
      </div>
    `,
	},
});
