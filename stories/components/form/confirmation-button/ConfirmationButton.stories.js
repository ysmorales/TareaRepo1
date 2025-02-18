import { DsConfirmationButton } from '../../../../components/DesignSystem/index.ts';

export default {
	title: 'Form/ConfirmationButton',
	component: DsConfirmationButton,
	tags: ['autodocs'],
	argTypes: {
		colorCancel: {
			description: 'Color of the cancel button in the confirmation steppers.',
		},
		colorOk: {
			description: 'Color of the ok button in the confirmation steppers.',
		},
		textCancel: {
			description: 'Text of the cancel button in the confirmation steppers.',
		},
		textOk: {
			description: 'Text of the ok button in the confirmation steppers.',
		},
		cancel: {
			description: 'Event emitted when the cancel button is clicked.',
		},
		ok: {
			description: 'Event emitted when the ok button is clicked.',
		},
	},
};

export const Default = {
	args: {},
};
export const ColorCustomization = {
	args: {
		colorCancel: 'danger',
		colorOk: 'tertiary',
	},
	parameters: {
		docs: {
			description: {
				story:
          'This story demonstrates the use of the "colorCancel" and "colorOk" properties. '
          + 'When "colorCancel" is set, it changes the color of the cancel button in the confirmation dialog. '
          + 'Similarly, when "colorOk" is set, it changes the color of the ok button in the confirmation dialog. '
          + 'In this case, the color of the cancel button is set to "red", and the color of the ok button is set to "green".',
			},
		},
	},
};

export const TextCustomization = {
	args: {
		textCancel: 'Regresar',
		textOk: 'Enviar',
	},
	parameters: {
		docs: {
			description: {
				story:
          'This story demonstrates the use of the "textCancel" and "textOk" properties. '
          + 'When "textCancel" is set, it changes the text of the cancel button in the confirmation dialog. '
          + 'Similarly, when "textOk" is set, it changes the text of the ok button in the confirmation dialog. '
          + 'In this case, the text of the cancel button is set to "Cancelar", and the text of the ok button is set to "Aceptar".',
			},
		},
	},
};
