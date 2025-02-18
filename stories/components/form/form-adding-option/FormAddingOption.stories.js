import DsFormAddingOption from '../../../../components/DesignSystem/components/form/form-adding-option/DsFormAddingOption.vue';

export default {
	title: 'Form/FormAddingOption',
	component: DsFormAddingOption,
	tags: ['autodocs'],

	argTypes: {
		title: {
			description: 'The title that will be displayed at the top of the form.',
			control: 'text',
		},
		inputLabel: {
			description: 'The label that will be displayed for the form input field.',
			control: 'text',
		},
		cancelButtonText: {
			description: 'The text that will be displayed on the cancel button.',
			control: 'text',
		},
		submitButtonText: {
			description: 'The text that will be displayed on the submit button.',
			control: 'text',
		},
		validationRules: {
			description:
        'The validation rules that will be applied to the form input field.',
			control: 'object',
		},
		customClass: {
			description: 'A custom class that will be applied to the form container.',
			control: 'text',
		},
		cancel: {
			description: 'Emitted when the cancel button is clicked.',
		},
		submit: {
			description:
        'Emitted when the form is successfully submitted. Returns the value of the input field.',
		},
	},
};

// This is the default usage of the component without any props.
// It will use the default values defined in the component itself.
export const Default = {};
Default.parameters = {
	docs: {
		description: {
			story:
        'This is the default usage of the component without any props. It will use the default values defined in the component itself.',
		},
	},
};

// This is an example of using the component with a custom title and input label.
// The title will be "My Custom Title" and the input label will be "My Custom Input Label".
export const CustomTitleAndInputLabel = {
	args: {
		title: 'My Custom Title',
		inputLabel: 'My Custom Input Label',
	},
};
CustomTitleAndInputLabel.parameters = {
	docs: {
		description: {
			story:
        'This is an example of using the component with a custom title and input label. The title will be "My Custom Title" and the input label will be "My Custom Input Label".',
		},
	},
};

// This is an example of using the component with custom button texts.
// The cancel button will display "My Cancel Text" and the submit button will display "My Submit Text".
export const CustomButtonTexts = {
	args: {
		cancelButtonText: 'My Cancel Text',
		submitButtonText: 'My Submit Text',
	},
};
CustomButtonTexts.parameters = {
	docs: {
		description: {
			story:
        'This is an example of using the component with custom button texts. The cancel button will display "My Cancel Text" and the submit button will display "My Submit Text".',
		},
	},
};

// This is an example of using the component with custom validation rules.
// The input field will be required and its length must be between 5 and 10.
export const CustomValidationRules = {
	args: {
		validationRules: {
			required: true,
			length: { min: 5, max: 10 },
		},
	},
};
CustomValidationRules.parameters = {
	docs: {
		description: {
			story:
        'This is an example of using the component with custom validation rules. The input field will be required and its length must be between 5 and 10.',
		},
	},
};

// This is an example of using the component with a custom class.
// The form container will have the class "my-custom-class".
export const CustomClass = {
	args: {
		customClass: 'my-custom-class',
	},
};
CustomClass.parameters = {
	docs: {
		description: {
			story:
        'This is an example of using the component with a custom class. The form container will have the class "my-custom-class".',
		},
	},
};
