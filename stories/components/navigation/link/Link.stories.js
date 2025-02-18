import DsLink from '../../../../components/DesignSystem/components/navigation/link/DsLink.vue';

export default {
	components: { DsLink },
	title: 'Navigation/Link',
	component: DsLink,
	tags: ['autodocs'],
	argTypes: {
		text: {
			description: 'text of the link component',
		},
		color: {
			control: {
				type: 'select',
			},
			options: ['primary', 'dark', 'white'],
			description:
        'The variant property for the Link component can accept different values, such as'
        + ' \'primary\', \'dark\',\'rectangle\'. Each of these values '
        + 'applies a different set of styles to the link, defining its visual appearance.',
		},
		size: {
			control: {
				type: 'select',
			},
			options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
			description: 'Change the size of the element.',
		},
		// isTargetBlank: {
		//   description:
		//     "The isTargetBlank property is typically used to determine whether a link" +
		//     " should be opened in a new browser tab or window.",
		// },
		href: {
			description:
        'The href property is used to specify the URL of the page that a link leads to. In the context '
        + 'of a Link component, this could be any path or URL that you want users to be navigated to when '
        + 'they click on the link.',
		},
		class: {
			control: 'text',
			description:
        'The class property is used to apply CSS styles to HTML elements.',
		},
		default: {
			control: 'text',
			description:
        'The slot property is a system provided by some web frameworks and libraries to allow for content '
        + 'composition and reuse. It\'s used to define customizable areas or placeholders within steppers. '
        + 'These regions can be filled with any content provided by the component\'s usage context, allowing '
        + 'component consumers to alter pieces of the component output, without having to fully recreate or '
        + 'duplicate the entire component structure.',
		},
	},
};
const customArgs = {
	default: 'Example',
};
export const Default = {
	args: {},
};

export const SlotExample = {
	args: {
		default: customArgs.default,
	},
	parameters: {
		docs: {
			source: {
				code: '<DsLink>Example</DsLink>',
			},
		},
	},
};

export const Rectangle = {
	args: {
		color: 'white',
	},
};
export const Dark = {
	args: {
		color: 'dark',
	},
};

const Template = args => ({
	components: { DsLink },
	setup() {
		return { args };
	},
	template: '<DsLink v-bind="args" />',
});

export const Weight = Template.bind({});
Weight.args = {
	class: 'font-bold',
};
Weight.parameters = {
	docs: {
		source: {
			code: '<DsLink class="font-bold" />',
		},
	},
};

export const TextXs = Template.bind({});
TextXs.args = {
	size: 'xs',
};
TextXs.parameters = {
	docs: {
		source: {
			code: '<DsLink size="xs" />',
		},
	},
};

export const TextSm = Template.bind({});
TextSm.args = {
	size: 'sm',
};
TextSm.parameters = {
	docs: {
		source: {
			code: '<DsLink size="sm" />',
		},
	},
};

export const TextBase = Template.bind({});
TextBase.args = {
	size: 'base',
};
TextBase.parameters = {
	docs: {
		source: {
			code: '<DsLink size="base" />',
		},
	},
};

export const TextLg = Template.bind({});
TextLg.args = {
	size: 'lg',
};
TextLg.parameters = {
	docs: {
		source: {
			code: '<DsLink size="lg" />',
		},
	},
};

export const TextXl = Template.bind({});
TextXl.args = {
	size: 'xl',
};
TextXl.parameters = {
	docs: {
		source: {
			code: '<DsLink size="xl" />',
		},
	},
};

export const Text2Xl = Template.bind({});
Text2Xl.args = {
	size: '2xl',
};
Text2Xl.parameters = {
	docs: {
		source: {
			code: '<DsLink size="2xl" />',
		},
	},
};

export const Text3xl = Template.bind({});
Text3xl.args = {
	size: '3xl',
};
Text3xl.parameters = {
	docs: {
		source: {
			code: '<DsLink size="3xl" />',
		},
	},
};
export const Text4xl = Template.bind({});
Text4xl.args = {
	size: '4xl',
};
Text4xl.parameters = {
	docs: {
		source: {
			code: '<DsLink size="4xl" />',
		},
	},
};

export const Text5xl = Template.bind({});
Text5xl.args = {
	size: '5xl',
};
Text5xl.parameters = {
	docs: {
		source: {
			code: '<DsLink size="5xl" />',
		},
	},
};
