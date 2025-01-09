import { commonArgTypes, commonInputArgTypes } from '../../../common/common';
import { DsSelect } from '../../../../components/DesignSystem';

export default {
	title: 'Form/Select',
	component: DsSelect,
	tags: ['autodocs'],

	argTypes: {
		...commonArgTypes,
		...commonInputArgTypes,
	},
};

export const Default = {
	args: {},
};
export const Error = {
	args: {
		error: 'Campo requerido.',
	},
};
export const Label = {
	args: {
		label: 'Seleccione la opción:',
	},
};
export const Size = {
	args: {
		size: 'small',
	},
};
export const Rounded = {
	args: {
		rounded: true,
	},
};
export const Disabled = {
	args: {
		disabled: true,
	},
};
export const HelpMessage = {
	args: {
		helpMessage: 'Text help',
	},
};
export const Option = {
	args: {
		option: [
			{ value: 1, text: 'Other option 1' },
			{ value: 2, text: 'Other option 2' },
			{ value: 3, text: 'Other option 3' },
		],
	},
};
