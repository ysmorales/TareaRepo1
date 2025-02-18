import DsStatusIconCard from '../../../../components/DesignSystem/components/container/status-icon-card/DsStatusIconCard.vue';

export default {
	title: 'Container/StatusIconCard',
	component: DsStatusIconCard,
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
		icon: {
			control: 'text',
			description: 'The icon displayed in the component.',
		},
		textInfo: {
			control: 'text',
			description: 'Information text.',
		},
	},
};
export const Default = {
	args: {},
};
