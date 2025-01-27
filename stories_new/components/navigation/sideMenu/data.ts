export const dataSideMenuSecondExample = [
	{
		id: 'home',
		label: 'Inicio',
		icon: 'las la-home',
	},
	{
		id: 'about',
		label: 'Acerca de',
		link: '/about',
	},
	{
		id: 'help',
		label: 'Ayuda',
		subMenu: [
			{
				id: 'faq',
				label: 'Preguntas frecuentes',
				link: '/help/faq',
			},
			{
				id: 'contact',
				label: 'Contacto',
				link: '/help/contact',
			},
		],
	},
	{
		id: 'products',
		label: 'Productos',
		link: '/products',
	},
	{
		id: 'services',
		label: 'Servicios',
		link: '/services',
	},
];

export default dataSideMenuSecondExample;
