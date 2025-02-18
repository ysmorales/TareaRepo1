import DsVideoCard from '../../../../components/DesignSystem/components/container/video-card/DsVideoCard.vue';

export default {
	title: 'Container/VideoCard',
	component: DsVideoCard,
	tags: ['autodocs'],

	argTypes: {
		src: {
			control: 'text',
			description: 'The link to which the component redirects.',
		},
		title: {
			control: 'text',
			description: 'The title of the link.',
		},
	},
};
export const Default = {
	args: {},
};
