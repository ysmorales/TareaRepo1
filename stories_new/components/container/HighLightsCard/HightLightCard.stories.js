import HighLightsCard from '../../../../components/DesignSystem/components/container/high-lights-card/HighLightsCard.vue';

export default {
	title: 'Container/HighLightsCard',
	component: HighLightsCard,
	tags: ['autodocs'],

	argTypes: {
		cardColor: {
			control: 'select',
			options: ['primary', 'danger', 'success', 'warning'],
			description: 'Change de color of the card.',
		},
		imageSrc: {
			description: 'Image source.',
		},
		imageAlt: {
			description: 'Alternative text of the image.',
		},
		linkUrl: {
			description: 'Url of the main link.',
		},
		linkText: {
			description: 'Text of the link component.',
		},
		linkTarget: {
			description: 'Target to the main link',
		},
		textFirstTab: {
			description: 'Text of the first tab',
		},
		textSecondTab: {
			description: 'Text of the second tab',
		},
		smallText: {
			description: 'Text of the subtitle',
		},
	},
};

export const Default = {};
export const Primary = {
	args: {
		cardColor: 'primary',
	},
};
export const Danger = {
	args: {
		cardColor: 'danger',
	},
};
export const Success = {
	args: {
		cardColor: 'success',
	},
};
export const Warning = {
	args: {
		cardColor: 'warning',
	},
};
