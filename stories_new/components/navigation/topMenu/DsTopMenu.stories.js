import { ref } from 'vue';
import DsTopMenu from '../../../../components/DesignSystem/components/navigation/topMenu/DsTopMenu.vue';
import { buildStory, commonArgTypes } from '../../../common/common.ts';
import { exampleData } from './example-data.ts';

export default {
	title: 'Navigation/TopMenu',
	component: DsTopMenu,
	tags: ['autodocs'],

	argTypes: {
		...commonArgTypes,

		items: {
			control: 'array',
			description:
        'Array with the item\'s data. Every entry will have properties: text (mandatory) and icon (optional). Also, could have a property items, which will be the sub-items for the item (with same properties). This can be nested up to 3 levels.',
		},

		// Events
		itemClick: {
			description:
        'Event emitted when an item is clicked. It passes the item data as parameter.',
		},
	},
};

export const Default = {
	args: {
		items: exampleData,
	},
};

export const Demo = buildStory({
	components: { DsTopMenu },

	viewport: {
		height: 300,
	},

	setup() {
		const items = ref(exampleData);

		const onItemClick = (item) => {
			alert(`Item clicked: "${item.text}", ID = "${item.id}"`);
		};

		return { items, onItemClick };
	},

	code: {
		setup: `
      const items = exampleData;

      const onItemClick = (item) => {
        alert( \`Item clicked: "\${item.text}", ID = "\${item.id}"\`);
      };
    `,

		template: `<DsTopMenu :items="items" @itemClick="onItemClick" />`,
	},
});
