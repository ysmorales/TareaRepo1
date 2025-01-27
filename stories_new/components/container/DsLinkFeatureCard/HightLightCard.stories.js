import DsLinkFeatureCard from '../../../../components/DesignSystem/components/container/link-feature-card/DsLinkFeatureCard.vue';

export default {
	title: 'Container/LinkFeatureCard',
	component: DsLinkFeatureCard,
	tags: ['autodocs'],
	argTypes: {
		href: {
			control: 'text',
			description: 'The link to which the component redirects.',
			defaultValue: '#',
		},
		title: {
			control: 'text',
			description: 'The title of the link.',
			defaultValue: 'Go to the article',
		},
		mainText: {
			control: 'text',
			description: 'The main text of the component.',
			defaultValue: 'Benefits and pensions',
		},
		icon: {
			control: 'text',
			description: 'The icon displayed in the component.',
			defaultValue: 'arrow-right',
		},
	},
};

export const Default = {};
