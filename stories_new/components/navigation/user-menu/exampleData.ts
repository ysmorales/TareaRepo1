import type { MenuItem } from '../../../../components/DesignSystem/interfaces/elements';

export const data: MenuItem[] = [
	{ name: 'horarios', icon: 'clock', title: 'Horarios', url: '/horarios' },
	{ name: 'call', icon: 'phone', title: 'Call Center', url: '/call' },
	{ name: 'perfil', icon: 'user', title: 'Mi perfil', url: '/perfil' },
	{
		name: 'configuración',
		icon: 'cog',
		title: 'Configuración',
	},
	// ...
];
