import Gallery from '../../../../components/DesignSystem/components/media/gallery/DsGallery.vue';

// const { backgroundColor, ...otherProps } = commonArgTypes;
export default {
	title: 'media/Gallery',
	component: Gallery,
	tags: ['autodocs'],

	argTypes: {
		textHover: {
			control: 'text',
			description:
        'Text displayed when hovering over an element in the user interface. This text can provide '
        + 'additional details or context about the element\'s function.',
		},
		rounded: {
			description: 'border radius - boolean',
		},
		galleryData: {
			description:
        'An array of objects representing the data of each image in the gallery. Each object '
        + 'may contain details such as the image\'s URL, alt text, and any other relevant information.',
		},
		class: {
			control: 'text',
			description:
        'The class property is used to apply CSS styles to HTML elements.',
		},
	},
};

export const Default = {
	args: {},
};
