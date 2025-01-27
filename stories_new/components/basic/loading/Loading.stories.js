import DsLoading from '../../../../components/DesignSystem/components/basic/loading/DsLoading.vue';

export default {
	title: 'Basic/Loading',
	component: DsLoading,
	tags: ['autodocs'],

	argTypes: {
		type: {
			control: {
				type: 'select',
			},
			options: ['spinner', 'dots'],
			description: 'Select the type of loading',
		},
		isDefaultText: {
			description: 'Select the component text, only work in loading type',
		},
		text: {
			description:
        'Edit text of the loading component, only work in loading type',
		},
		class: {
			control: 'text',
			description:
        'The `class` property allows you to apply CSS class(es) to the component. You can utilize this to style and customize the appearance of the component in alignment with the rest of your application\'s design.',
		},
	},
};
export const Default = {
	args: {},
};

export const Dots = {
	args: {
		type: 'dots',
	},
};

export const Text = {
	args: {
		isDefaultText: true,
	},
};
