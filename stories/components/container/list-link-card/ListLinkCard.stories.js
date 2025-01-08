import DsListLinkCard from '../../../../components/DesignSystem/components/container/list-link-card/DsListLinkCard.vue';

export default {
	title: 'Container/ListLinkCard',
	component: DsListLinkCard,
	tags: ['autodocs'],

	argTypes: {},
};

export const Default = {};
export const linkList = {
	args: {
		linkList: [
			{
				textTitle: 'Haz la solicitud a través de una videollamada',
				href: 'https://www.google.com',
				target: '_blank',
				title: 'Ir al sitio',
			},
			{
				textTitle: 'Debes estar en el Registro Social de Hogares',
				href: 'https://www.google.com',
				target: '_blank',
				title: 'Ir al sitio',
			},
			{
				textTitle: 'Realiza la compra a través de nuestro sitio web',
				href: 'https://www.ejemplo-tienda.com',
				target: '_blank',
				title: 'Visitar Tienda',
			},
			{
				textTitle: 'Revisa los registros de nuestra base de datos',
				href: 'https://www.ejemplo-database.com',
				target: '_blank',
				title: 'Ir a Base de Datos',
			},
			{
				textTitle: 'Consulta nuestras políticas de privacidad',
				href: 'https://www.ejemplo-privacidad.com',
				target: '_blank',
				title: 'Ir a Políticas',
			},
			{
				textTitle: 'Visita nuestra sección de FAQ\'S',
				href: 'https://www.ejemplo-faq.com',
				target: '_blank',
				title: 'Ir a FAQ\'S',
			},
		],
	},
};
