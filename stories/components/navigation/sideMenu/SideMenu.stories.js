import dataSideMenuSecondExample from '../../../../stories/components/navigation/sideMenu/data.ts';
import DsSideMenu from '../../../../components/DesignSystem/components/navigation/sideMenu/DsSideMenu.vue';
import { menuItems } from '../../../../components/DesignSystem/components/navigation/sideMenu/data.ts';

export default {
	title: 'Navigation/SideMenu',
	component: DsSideMenu,
	tags: ['autodocs'],

	argTypes: {
		dataSideMenu: { description: 'Contains the data for the side menu' },
		showTitle: { description: 'Title text' },
	},
	class: {
		control: 'text',
		description:
      'The class property is used to apply CSS styles to HTML elements.',
	},
};

export const Default = {
	args: {
		dataSideMenu: menuItems,
	},
};

export const OtherData = {
	args: {
		dataSideMenu: dataSideMenuSecondExample,
	},
};
