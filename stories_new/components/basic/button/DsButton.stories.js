import DsButton from '../../../../components/DesignSystem/components/basic/button/DsButton.vue';
import { commonArgTypes } from '../../../common/common';

export default {
	title: 'Basic/Button',
	component: DsButton,
	tags: ['autodocs'],
	argTypes: {
		...commonArgTypes,
		default: { table: { disable: true } },

		text: {
			control: 'text',
			description: 'Text of the button component.',
		},

		type: {
			control: 'select',
			options: ['button', 'submit'],
			description: 'Button type: simple button or submit button',
		},

		color: {
			control: 'select',
			options: [
				'primary',
				'danger',
				'success',
				'tertiary',
				'secondary',
				'info',
				'warning',
				'light',
				'dark',
			],
			description: 'Button color',
		},

		startImage: {
			control: 'text',
			description: 'Icon or .svg image displayed before the button text.',
		},

		endImage: {
			control: 'text',
			description: 'Icon or .svg image displayed after the button text.',
		},

		disabled: {
			control: 'boolean',
			description:
        'Enabled/disabled state. When disabled, shows a visual \'disabled\' state and the textbox is read-only.',
		},

		// rounded: {
		//   control: "boolean",
		//   description: "Enable/disable rounded borders",
		// },

		size: {
			description: 'Input text size',
			control: { type: 'select' },
			options: ['small', 'normal', 'medium', 'large'],
		},

		click: {
			control: 'none',
			description: 'Emit event button click.',
		},
	},
};

const customArgs = {
	default: 'Prueba',
};

export const Default = {};

export const Slot = {
	template: `<DsButton>${customArgs.default}</DsButton>`,
	args: {
		default: customArgs.default,
	},
	parameters: {
		docs: {
			source: {
				code: `<DsButton>${customArgs.default}</DsButton>`,
			},
		},
	},
};

const Template = args => ({
	components: { DsButton },

	setup() {
		return { args };
	},

	template: '<DsButton v-bind="args">Other text or other component</DsButton>',
});

export const FontLeft = {
	args: {
		startImage: 'plus',
	},
};

export const FontRight = {
	args: {
		endImage: 'plus',
	},
};

export const StartIcon = {
	args: {
		startImage: 'home',
	},
};

export const StartIconAsImage = {
	args: {
		startImage: '/images/claveunica-icon.svg',
	},
};

export const EndIcon = {
	args: {
		startImage: 'star',
	},
};

export const EndIconAsImage = {
	args: {
		endImage: '/images/claveunica-icon.svg',
	},
};

export const DobleIcon = {
	args: {
		startImage: 'star',
		endImage: 'star',
	},
};

export const OtherText = {
	args: {
		text: 'Other text',
		endImage: '/images/claveunica-icon.svg',
	},
};

export const Primary = {
	args: {
		color: 'primary',
	},
};

export const Secondary = {
	args: {
		color: 'secondary',
	},
};
export const Tertiary = {
	args: {
		color: 'tertiary',
	},
};
export const Success = {
	args: {
		color: 'success',
	},
};

export const Danger = {
	args: {
		color: 'danger',
	},
};
export const Info = {
	args: {
		color: 'info',
	},
};

export const Small = {
	args: {
		size: 'small',
	},
};

export const Large = {
	args: {
		size: 'large',
	},
};

export const Rounded = {
	args: {
		rounded: true,
	},
};

export const Disabled = {
	args: {
		disabled: true,
	},
};
