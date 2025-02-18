import DsTypography from '../../../../components/DesignSystem/components/basic/typography/DsTypography.vue';

export default {
	components: { DsTypography },
	title: 'Basic/Typography',
	component: DsTypography,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: {
				type: 'select',
			},
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
			description:
        'The variant property for the Link component can accept different values, such as'
        + ' \'primary\', \'dark\',\'rectangle\'. Each of these values '
        + 'applies a different set of styles to the link, defining its visual appearance.',
		},
		class: {
			control: 'text',
			description:
        'The class property is used to apply CSS styles to HTML elements.',
		},
		text: {
			description:
        'The text property holds the typographic content displayed by the component.',
		},
		id: {
			description:
        'The id property uniquely identifies the typographic component within the application.',
		},
		default: {
			sort: 9,
			control: 'text',
			defaultValue: 'Example',
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
	variant: 'p',
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
				code: '<DsTypography>Example</DsTypography>',
			},
		},
	},
};

export const H1 = {
	name: 'H1',
	args: {
		...customArgs,
		default: 'h1. Encabezado UiKit',
		variant: 'h1',
	},
	parameters: {
		docs: {
			source: {
				code: '<DsTypography variant="h1">h1. Encabezado UiKit</DsTypography>',
			},
		},
	},
};
export const H2 = {
	name: 'H2',
	args: {
		...customArgs,
		default: 'h2. Encabezado UiKit',
		variant: 'h2',
	},
	parameters: {
		docs: {
			source: {
				code: '<DsTypography variant="h2">h2. Encabezado UiKit</DsTypography>',
			},
		},
	},
};
export const H3 = {
	name: 'H3',
	args: {
		...customArgs,
		default: 'h3. Encabezado UiKit',
		variant: 'h3',
	},
	parameters: {
		docs: {
			source: {
				code: '<DsTypography variant="h3">h3. Encabezado UiKit</DsTypography>',
			},
		},
	},
};
export const H4 = {
	name: 'H4',
	args: {
		...customArgs,
		default: 'h4. Encabezado UiKit',
		variant: 'h4',
	},
	parameters: {
		docs: {
			source: {
				code: '<DsTypography variant="h4">h4. Encabezado UiKit</DsTypography>',
			},
		},
	},
};
export const H5 = {
	name: 'H5',
	args: {
		...customArgs,
		default: 'h5. Encabezado UiKit',
		variant: 'h5',
	},
	parameters: {
		docs: {
			source: {
				code: '<DsTypography variant="h5">h5. Encabezado UiKit</DsTypography>',
			},
		},
	},
};
export const H6 = {
	name: 'H6',
	args: {
		...customArgs,
		default: 'h6. Encabezado UiKit',
		variant: 'h6',
	},
	parameters: {
		docs: {
			source: {
				code: '<DsTypography variant="h6">h5. Encabezado UiKit</DsTypography>',
			},
		},
	},
};
export const P = {
	name: 'P',
	args: {
		...customArgs,
		default:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.',
		variant: 'p',
	},
	parameters: {
		docs: {
			source: {
				code: '<DsTypography variant="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.</DsTypography>',
			},
		},
	},
};

const Template = args => ({
	components: { DsTypography },
	setup() {
		return { args };
	},
	template: `
    <DsTypography :variant="args.variant" :class="args.class">{{ args.default }}</DsTypography>`,
});

export const FontBold = Template.bind({});
FontBold.args = {
	...customArgs,
	default:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.',
	class: 'font-bold',
};
FontBold.parameters = {
	docs: {
		source: {
			code: '<DsTypography variant="p" class="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.</DsTypography>',
		},
	},
};

export const TextXs = Template.bind({});
TextXs.args = {
	...customArgs,
	default:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.',
	class: 'text-xs',
};
TextXs.parameters = {
	docs: {
		source: {
			code: `<DsTypography variant="p" class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.</DsTypography>`,
		},
	},
};

export const TextSm = Template.bind({});
TextSm.args = {
	...customArgs,
	default:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.',
	class: 'text-sm',
};
TextSm.parameters = {
	docs: {
		source: {
			code: `<DsTypography variant="p" class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.</DsTypography>`,
		},
	},
};

export const TextBase = Template.bind({});
TextBase.args = {
	...customArgs,
	default:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.',
	class: 'text-base',
};
TextBase.parameters = {
	docs: {
		source: {
			code: `<DsTypography variant="p" class="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.</DsTypography>`,
		},
	},
};

export const TextLg = Template.bind({});
TextLg.args = {
	...customArgs,
	default:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.',
	class: 'text-lg',
};
TextLg.parameters = {
	docs: {
		source: {
			code: `<DsTypography variant="p" class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.</DsTypography>`,
		},
	},
};

export const TextXl = Template.bind({});
TextXl.args = {
	...customArgs,
	default:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.',
	class: 'text-xl',
};
TextXl.parameters = {
	docs: {
		source: {
			code: `<DsTypography variant="p" class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.</DsTypography>`,
		},
	},
};

export const Text2Xl = Template.bind({});
Text2Xl.args = {
	...customArgs,
	default:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.',
	class: 'text-2xl',
};
Text2Xl.parameters = {
	docs: {
		source: {
			code: `<DsTypography variant="p" class="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.</DsTypography>`,
		},
	},
};

export const Text3xl = Template.bind({});
Text3xl.args = {
	...customArgs,
	default:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.',
	class: 'text-3xl',
};
Text3xl.parameters = {
	docs: {
		source: {
			code: `<DsTypography variant="p" class="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.</DsTypography>`,
		},
	},
};
export const Text4xl = Template.bind({});
Text4xl.args = {
	...customArgs,
	default:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.',
	class: 'text-4xl',
};
Text4xl.parameters = {
	docs: {
		source: {
			code: `<DsTypography variant="p" class="text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.</DsTypography>`,
		},
	},
};

export const Text5xl = Template.bind({});
Text5xl.args = {
	...customArgs,
	default:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.',
	class: 'text-5xl',
};
Text5xl.parameters = {
	docs: {
		source: {
			code: `<DsTypography variant="p" class="text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis fugit aliquid reiciendis exercitationem pariatur sunt quibusdam, ea quo facere, maiores nemo itaque sequi corrupti, vitae eius enim magnam? Nemo.</DsTypography>`,
		},
	},
};
