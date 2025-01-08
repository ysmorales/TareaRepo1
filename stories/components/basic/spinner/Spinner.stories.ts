import DsSpinner from '../../../../components/DesignSystem/components/basic/spinner/DsSpinner.vue';

// const { margin, ...otherProps } = commonArgTypes;
export default {
	title: 'Basic/Spinner',
	component: DsSpinner,
	tags: ['autodocs'],
	argTypes: {
		color: {
			description: 'Change de borderColor of the spinner',
			options: ['red', 'blue', 'gray', 'white'],
		},
	},
};
export const Default = {
	args: {},
};
