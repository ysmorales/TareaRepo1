import DsDropdown from '../../../../components/DesignSystem/components/basic/dropdown/DsDropdown.vue';
import DsDropdownItem from '../../../../components/DesignSystem/components/basic/dropdown/DsDropdownItem.vue';
import { buildStory, commonArgTypes } from '../../../common/common';
import DsLink from '../../../../components/DesignSystem/components/navigation/link/DsLink.vue';

export default {
	components: { DsLink, DsDropdown },
	title: 'Basic/Dropdown',
	component: DsDropdown,
	tags: ['autodocs'],

	argTypes: {
		...commonArgTypes,

		select: { table: { disable: true } },
		default: { table: { disable: true } },

		menuData: {
			control: { type: 'object' },
			description: 'Data for the dropdown menu',
		},
		color: {
			control: { type: 'select' },
			options: ['tertiary', 'primary'],
			description: 'Dropdown borderColor',
		},

		dropDirection: {
			control: { type: 'select' },
			options: ['dropdown', 'dropup'],
			description: 'Drop direction',
		},

		// size: {
		//   control: { type: "select" },
		//   options: ["default", "small", "large"],
		//   description: "Dropdown size",
		// },

		label: {
			control: 'text',
			description:
        'Label for the component. Is optional, and it shows over the component.',
		},

		disabled: {
			control: 'boolean',
			description:
        'Enabled/disabled state. When disabled, shows a visual \'disabled\' state and the textbox is read-only.',
		},

		rounded: {
			control: 'boolean',
			description: 'Enable/disable rounded borders',
		},
		click: {
			description: 'Click event',
		},
	},
};

const defaultOptions = {
	components: { DsDropdown, DsDropdownItem },

	viewport: {
		height: 150,
	},
};

export const Default = buildStory({
	...defaultOptions,

	code: {
		template: `
      <DsDropdown/>
    `,
	},
});

export const Rounded = buildStory({
	...defaultOptions,

	code: {
		template: `
      <DsDropdown rounded="true"/>
    `,
	},
});

// export const SizeSmall = buildStory({
//   ...defaultOptions,
//
//   code: {
//     template: `
//       <DsDropdown size="small"/>
//     `,
//   },
// });

// export const SizeDefault = buildStory({
//   ...defaultOptions,
//
//   code: {
//     template: `
//       <DsDropdown>
//         <DsDropdownItem>
//           Option 1
//         </DsDropdownItem>
//
//         <DsDropdownItem>
//           Option 2
//         </DsDropdownItem>
//       </DsDropdown>
//     `,
//   },
// });

// export const SizeLarge = buildStory({
//   ...defaultOptions,
//
//   code: {
//     template: `
//       <DsDropdown size="large">
//         <DsDropdownItem>
//           Option 1
//         </DsDropdownItem>
//
//         <DsDropdownItem>
//           Option 2
//         </DsDropdownItem>
//       </DsDropdown>
//     `,
//   },
// });

export const Label = buildStory({
	...defaultOptions,

	code: {
		template: `
      <DsDropdown label="Custom Label"/>
    `,
	},
});

export const Disabled = buildStory({
	...defaultOptions,

	code: {
		template: `
      <DsDropdown disabled/>
    `,
	},
});

export const DropUp = buildStory({
	...defaultOptions,

	viewport: {
		height: 120,
		offset: 100,
	},

	code: {
		template: `
      <DsDropdown dropDirection="dropup"/>
    `,
	},
});

export const ItemsWithHtml = buildStory({
	...defaultOptions,

	code: {
		template: `
      <DsDropdown>
      <div class="flex flex-col p-5">
         <DsLink href="#">Enlace</DsLink>
           <DsLink  href="#">Enlace</DsLink>
           <DsLink  href="#">Enlace</DsLink>
           </div>
      </DsDropdown>
    `,
	},
});

// export const ItemsWithLabels = buildStory({
//   ...defaultOptions,
//
//   code: {
//     template: `
//       <DsDropdown>
//         <DsDropdownItem label="Option 1" />
//         <DsDropdownItem label="Option 2" />
//         <DsDropdownItem label="Option 3" />
//       </DsDropdown>
//     `,
//   },
// });

// export const ItemsWithIcons = buildStory({
//   ...defaultOptions,
//
//   code: {
//     template: `
//       <DsDropdown>
//         <DsDropdownItem icon="/images/claveunica-icon.svg" />
//         <DsDropdownItem icon="/images/claveunica-icon.svg" />
//         <DsDropdownItem icon="/images/claveunica-icon.svg" />
//       </DsDropdown>
//     `,
//   },
// });

// export const HandleItemSelected = buildStory({
//   ...defaultOptions,
//
//   setup: () => {
//     const selectedItem = ref(null);
//     const items = reactive(["Item 1", "Item 2", "Item 3"]);
//
//     function onItemSelected(item: any) {
//       selectedItem.value = item;
//     }
//
//     return { selectedItem, items, onItemSelected };
//   },
//
//   code: {
//     setup: `
//       const selectedItem = ref(null);
//       const items = reactive(['Item 1', 'Item 2', 'Item3']);
//
//       const onItemSelected = (item: any) => {
//         selectedItem.value = item;
//       };
//     `,
//
//     template: `
//             <div>
//                 Selected Item: {{ selectedItem }}
//             </div>
//
//             <DsDropdown @select="onItemSelected" label="Select Item">
//                 <DsDropdownItem label="Option 1" :data="items[0]"/>
//                 <DsDropdownItem label="Option 2" :data="items[1]"/>
//                 <DsDropdownItem label="Option 3" :data="items[2]"/>
//             </DsDropdown>
//         `,
//   },
// });
