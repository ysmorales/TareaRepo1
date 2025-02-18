import DsImages from '../../../../components/DesignSystem/components/media/images/imagesHtml/DsImages.vue';

export default {
	title: 'Media/Image',
	component: DsImages,
	tags: ['autodocs'],

	argTypes: {
		size: {
			control: {
				type: 'select',
			},
			options: [
				'xSmall',
				'small',
				'normal',
				'medium',
				'large',
				'xLarge',
				'xxLarge',
				'auto',
			],
			description: 'xSmall,small, normal, medium, large,xLarge,xxLarge,auto',
		},
		radius: {
			description: 'border radius - boolean',
		},
		alt: {
			description:
        'A text description of the image, displayed if the image cannot be'
        + ' loaded or read by assistive technology like a screen reader.',
		},
		class: {
			control: 'text',
			description:
        'The class property is used to apply CSS styles to HTML elements.',
		},
		src: {
			control: 'text',
			description:
        'The URL of the image to be fetched and used in the element.',
		},

		// disabled: {
		//   description: 'border radius - boolean',
		// },
	},
};
export const Classic = {
	args: {},
};

export const xSmall = {
	args: {
		size: 'xSmall',
	},
};

export const small = {
	args: {
		size: 'small',
	},
};

export const normal = {
	args: {
		size: 'normal',
	},
};
export const medium = {
	args: {
		size: 'medium',
	},
};

export const large = {
	args: {
		size: 'large',
	},
};

export const xLarge = {
	args: {
		size: 'xLarge',
	},
};
export const xxLarge = {
	args: {
		size: 'xxLarge',
	},
};
export const auto = {
	args: {
		size: 'auto',
	},
};
export const rounded = {
	args: {
		radius: true,
	},
};
export const Src = {
	args: {
		src: '/images/avatar.jpg',
	},
};
