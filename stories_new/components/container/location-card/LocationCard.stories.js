import LocationCard from '../../../../components/DesignSystem/components/container/location-card/LocationCard.vue';

export default {
	title: 'Container/LocationCard',
	component: LocationCard,
	tags: ['autodocs'],

	argTypes: {
		title: {
			description: 'Title of the card',
		},
		dataLink: {
			description: 'list of link to display on the card',
		},
	},
};
export const Default = {
	args: {},
};
export const DataLinkExample = {
	args: {
		dataLink: [
			{
				text: 'Ir a Google-',
				textLink: 'Visita a Google',
				titleLink: 'Google',
				urlLink: 'https://www.google.com',
				targetLink: '_blank',
			},
			{
				text: 'Ir a Microsoft-',
				textLink: 'Visita a Microsoft',
				titleLink: 'Microsoft',
				urlLink: 'https://www.microsoft.com',
				targetLink: '_self',
			},
			{
				text: 'ChileAtiende Antofagasta-',
				textLink: 'Sucre N° 311, Piso 2',
				titleLink: 'Ir al artículo',
				urlLink: '#',
				targetLink: 'blank',
			},
			{
				text: 'ChileAtiende Antofagasta-',
				textLink: 'Sucre N° 311, Piso 2',
				titleLink: 'Ir al artículo',
				urlLink: '#',
				targetLink: 'blank',
			},
		],
	},
};
