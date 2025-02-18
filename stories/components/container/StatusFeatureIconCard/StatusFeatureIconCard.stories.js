import DsStatusFeatureIconCard from '../../../../components/DesignSystem/components/container/status-feature-icon-card/DsStatusFeatureIconCard.vue';

export default {
	title: 'Container/StatusFeatureIconCard',
	component: DsStatusFeatureIconCard,
	tags: ['autodocs'],

	argTypes: {
		href: {
			control: 'text',
			description: 'The link to which the component redirects.',
		},
		title: {
			control: 'text',
			description: 'The title of the link.',
		},
		mainText: {
			control: 'text',
			description: 'The main text of the component.',
		},
		variant: {
			control: 'select',
			options: ['primary', 'danger', 'success', 'secondary'],
			description: 'Variant of the card change the color and card icon.',
		},
	},
};
export const Default = {
	args: {},
};
