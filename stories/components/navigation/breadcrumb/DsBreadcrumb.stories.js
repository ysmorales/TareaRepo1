import DsBreadcrumb from '../../../../components/DesignSystem/components/navigation/breadcrumb/DsBreadcrumb.vue';
import { commonArgTypes, buildStory } from '../../../common/common';

export default {
	title: 'Navigation/Breadcrumb',
	component: DsBreadcrumb,
	tags: ['autodocs'],

	argTypes: {
		...commonArgTypes,

		items: {
			control: 'array',
			description: `Items shown in breadcrumb. Each item has: id, label, link and icon.
        The only mandatory property is label. Items with link property are shown
        as a link (with DsLink component) to the target URL. Items without link defined
        are shown as link, but with target URL as "#".
      `,
		},

		hideSeparator: {
			control: 'boolean',
			description: 'Shows/hides separator line between items.',
		},

		showLinkAtLastItem: {
			control: 'boolean',
			description: `If true, and last item has a link, it shows as a link.
        If false, last item is shown as a simple text (even if has link assigned).
      `,
		},

		// Events
		itemClick: {
			description: `Emitted when item is clicked. The item is passed as parameter.
        If the item has link defined, it will navigate to that URl (using DsLink).`,
		},
	},
};

const demoItems = [{
	id: 1,
	label: 'Home',
	link: '/',
	icon: 'home',
}, {
	id: 2,
	label: 'First Level',
	link: '/first/level',
}, {
	id: 3,
	label: 'Second Level',
	link: '#',
}, {
	id: 4,
	label: 'Last level',
}];

const defaultOptions = {
	components: { DsBreadcrumb },

	setup() {
		const items = demoItems;

		return { items };
	},
};

const defaultSetupCode = `
  const items = [{
    id: 1,
    label: 'Home',
    link: '/',
    icon: 'home'
  }, {
    id: 2,
    label: 'First Level',
    link: '/first/level',
  }, {
    id: 3,
    label: 'Second Level',
    link: '#',
  }, {
    id: 4,
    label: 'Last level',
  }];
`;

export const Default = {};

export const Demo = buildStory({
	...defaultOptions,

	setup() {
		const items = demoItems;

		const onItemClicked = (item) => {
			alert(`Clicked ${item.label}`);
		};

		return { items, onItemClicked };
	},

	code: {
		setup: `
      const items = [{
        label: 'Home',
        link: '/',
        icon: 'home'
      }, {
        label: 'First Level',
        link: '/first/level',
      }, {
        label: 'Second Level',
        link: '#',
      }, {
        label: 'Last level',
      }];

      const onItemClicked = (item) => {
        alert( \`Clicked "\${item.label}"\`);
      };
    `,

		template: `
      <DsBreadcrumb :items="items" @itemClick="onItemClicked" />
    `,
	},
});

export const HideSeparator = buildStory({
	...defaultOptions,

	code: {
		setup: defaultSetupCode,

		template: `
      <DsBreadcrumb :items="items" :hideSeparator="true" />
    `,
	},
});

export const ShowLinkAtLastItem = buildStory({
	...defaultOptions,

	code: {
		setup: defaultSetupCode,

		template: `
      <DsBreadcrumb :items="items" :showLinkAtLastItem="true" />
    `,
	},
});

export const ItemClick = buildStory({
	...defaultOptions,

	setup() {
		const items = [{
			label: 'Home',
			link: '#',
			icon: 'home',
		}, {
			label: 'To Google',
			link: 'https://www.google.com/',
		}, {
			label: 'Last level',
			// No link implies "#"
		}];

		const onItemClicked = (item) => {
			if (item.link !== '#') {
				alert('Goes to Google!');
			}
			else {
				alert('No target URL, just executes event handler.');
			}
		};

		return { items, onItemClicked };
	},

	code: {
		setup: `
      const items = [{
        label: 'Home',
        link: '#',
        icon: 'home'
      }, {
        label: 'To Google',
        link: 'https://www.google.com/',
      }, {
        label: 'Last level',
        // No link implies "#"
      }];

      const onItemClicked = (item) => {
        if (item.link !== '#') {
          alert( 'Goes to Google!');
        } else {
          alert( 'No target URL, just executes event handler.');
        }
      };
    `,

		template: `
      <DsBreadcrumb :items="items" @itemClick="onItemClicked" />
    `,
	},
});
