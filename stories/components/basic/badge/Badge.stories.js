import Badge from '../../../../components/DesignSystem/components/basic/badge/Badge.vue';

export default {
	title: 'Basic/Badge',
	component: Badge,
	tags: ['autodocs'],

	argTypes: {
		icon: {
			control: 'text',
			description: 'Line Awesome icon name or .svg image URL.',
		},

		value: {
			control: 'number',
			description: 'Number shown in badge.',
		},

		class: {
			control: 'text',
			description: 'The `class` property allows you to apply CSS class(es) to the component. You can utilize this to style and customize the appearance of the component in alignment with the rest of your application\'s design.',
		},
	},
};
export const Default = {
	args: {
		icon: 'ambulance',
		value: 5,
	},
};
export const Card = {
	args: {
		icon: 'search',
		value: 2,
	},
};
