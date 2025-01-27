import { ref } from 'vue';
import DsInput from '../../../../components/DesignSystem/components/form/input/DsInput.vue';
import DsButton from '../../../../components/DesignSystem/components/basic/button/DsButton.vue';
import {
	commonArgTypes,
	commonInputArgTypes,
	buildStory,
} from '../../../common/common';

export default {
	title: 'Form/Input',
	component: DsInput,
	tags: ['autodocs'],

	argTypes: {
		...commonArgTypes,
		...commonInputArgTypes,

		type: {
			control: { type: 'select' },
			options: [
				'text',
				'number',
				'email',
				'url',
				'phone',
				'search',
				'password',
			],
			description:
        'Input type: text, number, email, url, phone, search, password',
		},
		rounded: {
			control: 'boolean',
			description: 'Enable/disable rounded borders',
		},

		readOnly: {
			control: 'boolean',
			description:
        'Enabled/disabled read-only state. The visual state don\'t change.',
		},

		focus: {
			control: 'boolean',
			description: 'If enabled, set input focus to this component.',
		},
		id: {
			description:
        'The id property uniquely identifies the check component within the application.',
		},
		placeholder: {
			control: 'text',
			description: 'Text for placeholder',
		},
	},
};

export const Default = {};

export const NumberType = buildStory({
	components: { DsInput },

	code: {
		template: `
      <DsInput type="number" placeholder="Enter number" />
    `,
	},
});

export const EmailType = buildStory({
	components: { DsInput },

	code: {
		template: `
      <DsInput type="email" placeholder="Enter email" />
    `,
	},
});

export const UrlType = buildStory({
	components: { DsInput },

	code: {
		template: `
      <DsInput type="url" placeholder="Enter URL" />
    `,
	},
});

export const PhoneType = buildStory({
	components: { DsInput },

	code: {
		template: `
      <DsInput type="phone" placeholder="Enter phone number" />
    `,
	},
});

export const SearchType = buildStory({
	components: { DsInput },

	code: {
		template: `
      <DsInput type="search" placeholder="Search..." />
    `,
	},
});

export const PasswordType = buildStory({
	components: { DsInput },

	code: {
		template: `
      <DsInput type="password" placeholder="Enter password" />
    `,
	},
});

export const Label = {
	args: {
		label: 'Example label',
	},
};

export const Rounded = buildStory({
	components: { DsInput },

	code: {
		template: `
      <div>
        <DsInput label="With rounded border" :rounded="true" />
      </div>
    `,
	},
});

export const Disabled = buildStory({
	components: { DsInput },

	setup() {
		const text = ref('Text');

		return { text };
	},

	code: {
		setup: `const text = ref("Text");`,

		template: `
      <div>
        <DsInput v-model="text" label="Disabled state - visual change, non-writable"
                 :disabled="true" />
      </div>
    `,
	},
});

export const ReadOnly = buildStory({
	components: { DsInput },

	setup() {
		const text = ref('Text');

		return { text };
	},

	code: {
		setup: `const text = ref("Text");`,

		template: `
      <div>
        <DsInput v-model="text" label="Read Only state - no visual change, only can select"
                 :readOnly="true" />
      </div>
    `,
	},
});

export const Required = buildStory({
	components: { DsInput },

	setup() {
		const text = ref('Text');

		return { text };
	},

	code: {
		setup: `const text = ref("Text");`,

		template: `
      <div>
        <DsInput v-model="text" label="Required Input" :required="true" />
      </div>
    `,
	},
});

export const Focus = buildStory({
	components: { DsInput, DsButton },

	setup() {
		const focused = ref(false);

		return { focused };
	},

	code: {
		setup: `const focused = ref(false);`,

		template: `
      <div>
        <DsInput label="This input will receive focus when button is clicked" />
      </div>

      <div>
        <DsButton @click="focused.value = true;">
          Focus!
        </DsButton>
      </div>
    `,
	},
});

export const VModel = buildStory({
	components: { DsInput, DsButton },

	setup: () => {
		const inputValue = ref('reactive value (ref)');

		return { inputValue };
	},

	methods: {
		handleClick() {
			// @ts-ignore
			alert('Current value of Input: ' + this.inputValue);
		},
	},

	code: {
		setup: `
const inputValue = ref("reactive value (ref)");

function handleClick() {
  alert("Current value of Input: " + inputValue.value);
}
`,

		template: `
      <div>
        v-model is a two-way binded property.
      </div>

      <DsInput v-model="inputValue" />

      <div>
        Value: <strong>{{ inputValue }}</strong>
      </div>

      <div>
        <DsButton @click="handleClick">Get Value</DsButton>
      </div>
    `,
	},
});
