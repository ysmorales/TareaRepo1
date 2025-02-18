import DsAvatar from '../../../../components/DesignSystem/components/basic/avatar/DsAvatar.vue';

export default {
	title: 'Basic/Avatar',
	component: DsAvatar,
	tags: ['autodocs'],

	argTypes: {
		size: {
			control: {
				type: 'select',
			},
			options: ['xSmall', 'small', 'normal', 'medium', 'large', 'xLarge'],
			description: '16px, 32px, 48px, 64px, 96px',
		},
		alt: {
			description: 'Text for description',
		},
		src: {
			description:
        'The URL of the image to be fetched and used in the element.',
		},
		class: {
			description:
        'The class property allows you to apply CSS class(es) to the component. You can utilize this to '
        + 'style and customize the appearance of the component in alignment with the rest of your application\'s design.',
		},
	},
};

export const Default = {
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
