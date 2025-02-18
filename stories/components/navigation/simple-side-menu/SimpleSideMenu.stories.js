import DsSimpleSideMenu from "../../../../components/DesignSystem/components/navigation/simple-side-menu/DsSimpleSideMenu.vue";

export default {
  title: "Navigation/SimpleSideMenu",
  component: DsSimpleSideMenu,
  tags: ["autodocs"],

  argTypes: {
    data: {
      description:
        "Array of objects, each representing a link in the side menu. Each object should have an `id`, `text`, and `icon` property. The `icon` should represent the path to the icon file.",
      control: "object",
      defaultValue: [
        {
          id: 1,
          text: "Submit request",
          icon: "file-upload",
        },
        { id: 2, text: "Consult", icon: "search" },
        { id: 3, text: "Inbox" },
      ],
    },
    click: {
      description: "Event emitted when a menu item is clicked.",
      table: {
        type: { summary: "function", detail: "function(id: number): void" },
      },
    },
  },
};

export const Default = {
  args: {},
};

const MenuSideTemplate = (args) => ({
  components: { DsSimpleSideMenu },
  setup() {
    return { args };
  },
  template: `
        <DsSimpleSideMenu
            :data="dataSimpleSideMenu"
            @click="handleClick"
        />
    `,
  methods: {
    handleClick(id) {
      alert(`Menu item with id ${id} was clicked`);
    },
  },
});
export const MenuSide = MenuSideTemplate.bind({});
MenuSide.parameters = {
  docs: {
    description: {
      story: `
### Usage

You can use this component to display a list of links in a side menu.

Each link is an object with the properties \`id\`, \`text\`, and \`icon\`.
The \`id\` is used to identify the active link.
The \`icon\` is used to display an icon for the menu item.
The \`text\` is displayed as the link text.

When a menu item is clicked, a \`click\` event is emitted with the \`id\` of the clicked item as the payload. This can be used to identify which menu item was clicked and potentially trigger further actions in your application.

### Example

Here is an example of how to use this component:

\`\`\`vue
< DsSimpleSideMenu
  :data="[
    { id: 1, text: 'Submit request', icon: "file-upload" },
    { id: 2, text: 'Consult', icon: "search" },
    { id: 3, text: 'Inbox' },
    // add more data if needed
  ]"
  @click="handleClick"
/>
\`\`\`

And in your methods:

\`\`\`javascript

  function handleClick(id) {
    alert(\`Menu item with id \${id} was clicked\`);
    // Add your logic here
  },

\`\`\`
`,
    },
  },
};
