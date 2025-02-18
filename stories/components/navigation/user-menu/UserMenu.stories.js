import { ref } from 'vue';
import DsUserMenu from '../../../../components/DesignSystem/components/navigation/user-menu/DsUserMenu.vue';
import DsIcon from '../../../../components/DesignSystem/components/basic/icon/DsIcon.vue';
import DsLink from '../../../../components/DesignSystem/components/navigation/link/DsLink.vue';
import { data } from './exampleData.ts';

export default {
	methods: {
		data() {
			return data;
		},
	},
	components: { DsLink, DsIcon },
	title: 'Navigation/UserMenu',
	component: DsUserMenu,
	tags: ['autodocs'],

	argTypes: {
		click: {
			description: 'Event emitted when a menu item is clicked.',
			table: {
				type: { summary: 'function', detail: 'function(item: MenuItem): void' },
			},
		},
	},
};

// export const Default = {
//   args: {},
// };

const MenuSideTemplate = args => ({
	components: { DsUserMenu },
	setup() {
		return { args };
	},
	template: `
        <div class="w-[150px]">
            <DsUserMenu @click="handleClick"/>
        </div>
    `,
	methods: {
		handleClick(item) {
			alert(`Menu item with name -${item.name}- was clicked`);
		},
	},
});
export const MenuSide = MenuSideTemplate.bind({});
MenuSide.parameters = {
	docs: {
		description: {
			story: `
### Usage

You can use this component to display a list of links in a nav bar.

Each link is an object with the properties \`name\`, \`icon\`, \`title\`, and an optional \`url\`.
The \`name\` is used to identify the menu item.
The \`icon\` is used to display an icon for the menu item.
The \`title\` is displayed as the link text.
The \`url\` is used as the destination URL when the menu item is clicked.

If a \`url\` is not provided for a menu item, a \`click\` event is emitted with the menu item object as the payload when the menu item is clicked. This can be used to identify which menu item was clicked and potentially trigger further actions in your application.

### Example

Here is an example of how to use this component:

\`\`\`vue
< DsUserMenu
  :menuItems="[
    { name: 'horarios', icon: 'clock', title: 'Horarios', url: '/horarios' },
    { name: 'call', icon: 'phone', title: 'Call Center', url: '/call' },
    { name: 'perfil', icon: 'user', title: 'Mi perfil', url: '/perfil' },
    { name: 'configuración', icon: 'cog', title: 'Configuración' },
    // add more menu items if needed
  ]"
  @click="handleClick"
/>
\`\`\`

And in your methods:

\`\`\`javascript

  function handleClick(item) {
    alert(\`Menu item with name \${item.name} was clicked\`);
    // Add your logic here
  },

\`\`\`
`,
		},
	},
};

const responsiveTemplate = args => ({
	components: { DsUserMenu, DsLink, DsIcon },

	setup() {
		let menuOpen = ref(false);
		const dataExample = ref(data);

		const handleMenu = () => {
			menuOpen.value = !menuOpen.value;
		};
		const handleClick = (item) => {
			alert(`Menu item with name -${item.name}- was clicked`);
		};
		return { args, menuOpen, handleClick, handleMenu, dataExample };
	},
	template: `
        <div class="relative w-full inline-block  m-2 h-[200px]">
            <button
                class="rounded-full h-6 w-6 flex items-center justify-center text-white border border-gray-300 hover:ring-0 hover:border-gray-400"
                @click="handleMenu"
            >
                <DsIcon color="dark" name="plus" size="small"/>
            </button>

            <div
                v-if="menuOpen"
                class="fixed top-[30px] right-0 bottom-0 left-0 space-y-1 w-fit rounded shadow bg-white pt-5 mt-3"
            >

                <DsLink
                    v-for="item in dataExample"
                    :key="item.name"
                    :to="item.url || 'javascript:void(0)'"
                    class="flex items-center text-sm no-underline py-2 px-3"
                    @click="handleClick(item)"
                >
                    <DsIcon :name="item.icon" class="text-gray-500 mr-1" size="small"/>
                    <span class="underline text-gray-600 hover:text-gray-950">{{
                            item.title
                        }}</span>
                </DsLink>
            </div>
        </div>
    `,
});
export const Responsive = responsiveTemplate.bind({});
Responsive.parameters = {
	docs: {
		description: {
			story: `
### Mobile View

This is how the component will look on smaller screens.

In mobile view, the component switches to a more compact layout. The menu items are hidden by default and can be toggled by clicking on the button.

`,
		},
	},
};
