import DsFormValidatorPanel from '../../../../components/DesignSystem/components/form/form-validator-panel/DsFormValidatorPanel.vue';
import { errorPanel } from '../../../components/form/validatePanel/dataErrors';

export default {
	title: 'Form/ValidatePanel',
	component: DsFormValidatorPanel,
	tags: ['autodocs'],

	argTypes: {
		class: {
			control: 'text',
			description:
        'The `class` property allows you to apply CSS class(es) to the component. You can utilize this to style and customize the appearance of the component in alignment with the rest of your application\'s design.',
		},
		id: {
			control: 'text',
			description:
        'The id property uniquely identifies individual instances of a component within your application.',
		},
		errors: {
			description: 'Array of error, type errorPanelInterface.',
		},
	},
};

export const Default = {
	args: {
		errors: errorPanel,
	},
};
