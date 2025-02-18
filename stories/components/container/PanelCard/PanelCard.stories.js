import DsPanelCard from '../../../../components/DesignSystem/components/container/panel-card/DsPanelCard.vue';

export default {
	title: 'Container/DsPanelCard',
	component: DsPanelCard,
	tags: ['autodocs'],

	argTypes: {
		title: {
			description: 'This is the main title to be displayed',
			defaultValue: 'Dirección',
			control: 'text',
		},
		headerLink: {
			description: 'This object defines the details of the header link',
			control: 'object',
		},
		listData: {
			description:
        'This is an array that contains a list of objects. Each object represents contact information such as a location with its address, rut, and call center number',
			defaultValue: [
				{
					mainTitle: 'Alameda Lib. B. O\'Higgins N° 1324. Stgo - Chile',
					firstText: 'Rut: 16.132.234-2',
					secondText: 'Callcenter: 101',
				},
				{
					mainTitle: 'Av. Apoquindo N° 4400. Las Condes - Chile',
					firstText: 'Rut: 15.432.654-8',
					secondText: 'Callcenter: 102',
				},
			],
			control: 'array',
		},
		infoText: {
			description: 'This is some additional information that will be displayed',
			control: 'text',
		},
	},
};

export const Default = {
	args: {},
};
export const LinkHeader = {
	args: {
		headerLink: {
			href: '#',
			title: 'Normativa sobre la seguridad laboral',
			text: 'Normativa sobre la seguridad laboral',
		},
		infoText: 'Reforma previsional',
	},
};
