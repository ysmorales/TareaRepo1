import DsSeparator from '../../../../components/DesignSystem/components/basic/separator/DsSeparator.vue';

export default {
	title: 'Basic/Separator',
	component: DsSeparator,
	tags: ['autodocs'],
	argTypes: {
		class: {
			description:
        'The class property allows you to apply CSS class(es) to the component. You can utilize this to '
        + 'style and customize the appearance of the component in alignment with the rest of your application\'s design.',
		},
		color: {
			description:
        'The color property allows you to apply a color to the separator.',
		},
	},
};

export const Default = {
	args: {},
};
