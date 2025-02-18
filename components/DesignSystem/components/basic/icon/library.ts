import type { IIconName } from './types';

export const iconSizeClass = {
	xlarge: 'text-7xl',
	large: 'text-5xl',
	medium: 'text-3xl',
	base: 'text-base',
	small: 'text-sm',
	default: '',
};
export const imagenIconSizeClass = {
	xlarge: 'h-[50px]',
	large: 'h-[40px]',
	medium: 'h-[30px]',
	base: 'h-[20px]',
	small: 'h-[10px]',
	default: '',
};

export const AllIcons: IIconName[] = ['bell', 'check-circle', 'exclamation-circle', 'home', 'times-circle'];

export * from './types';
