import { ref } from 'vue';
import DsTabs from '../../../../components/DesignSystem/components/navigation/tabs/DsTabs.vue';
import DsTabItem from '../../../../components/DesignSystem/components/navigation/tabs/DsTabItem.vue';
import DsButton from '../../../../components/DesignSystem/components/basic/button/DsButton.vue';
import { commonArgTypes, buildStory } from '../../../common/common';

export default {
	components: { DsTabs },
	title: 'Navigation/Tabs',
	component: DsTabs,
	tags: ['autodocs'],

	argTypes: {
		...commonArgTypes,

		rounded: {
			control: 'boolean',
			description: 'Enable/disable rounded tab borders',
		},

		// Events
		tabChange: {
			description: 'Event triggered inmediately before a new tab is activated.',
		},

		// Slots
		default: {
			description:
        'Main content, DsTabItem is used for every tab, with properties title and icon.',
		},
	},
};

export const Default = buildStory({
	components: { DsTabs, DsTabItem, DsButton },

	setup() {
		const currentTab = ref(null);

		const onTabChange = (tab) => {
			currentTab.value = tab;
		};

		return { currentTab, onTabChange };
	},

	code: {
		setup: `
      const currentTab = ref(null);

      const onTabChange = (tab) => {
        currentTab.value = tab;
      };
    `,

		template: `
            <DsTabs @tabChange="onTabChange">
                <DsTabItem title="Home Tab" icon="las la-home">
                    <div>
                        Fugiat sunt nisi incididunt exercitation duis reprehenderit cupidatat. Laboris proident veniam
                        est ea esse quis exercitation labore veniam ad et fugiat eu elit. Tempor in pariatur consequat
                        laborum in enim ad fugiat id non. Non commodo pariatur adipisicing magna id. Fugiat sunt irure
                        non proident nostrud veniam exercitation cupidatat ut esse.ksfjklsjdflsjsklj
                    </div>

                    <DsButton>Button 1</DsButton>
                </DsTabItem>

                <DsTabItem title="Second Tab">
                    <div>
                        Culpa eu sit aliquip duis. Elit amet cupidatat ut ullamco sit quis anim laborum voluptate anim.
                        Nisi incididunt anim occaecat magna ipsum ipsum nisi velit fugiat aliquip. Duis aliquip
                        voluptate ullamco occaecat consectetur ad eiusmod voluptate nostrud ut velit laboris enim enim.
                        Deserunt ipsum nulla commodo ullamco culpa.
                    </div>

                    <DsButton>Button 2</DsButton>
                </DsTabItem>

                <DsTabItem title="Third Tab" icon="las la-asterisk">
                    <div>
                        Amet nulla consequat et occaecat ipsum commodo deserunt nulla et. Minim amet ullamco mollit
                        irure voluptate nostrud. Dolor aute laboris minim pariatur esse ipsum est veniam ea.
                    </div>

                    <DsButton>Button 3</DsButton>
                </DsTabItem>
            </DsTabs>

            <div v-if="currentTab">
                Tab changed to: {{ currentTab ? currentTab.title : '' }}
            </div>
        `,
	},
});

export const NonRounded = buildStory({
	components: { DsTabs, DsTabItem, DsButton },

	code: {
		template: `
      <DsTabs :rounded="false">
        <DsTabItem title="Home Tab">
          <div>
            Fugiat sunt nisi incididunt exercitation duis reprehenderit cupidatat. Laboris proident veniam est ea esse quis exercitation labore veniam ad et fugiat eu elit. Tempor in pariatur consequat laborum in enim ad fugiat id non. Non commodo pariatur adipisicing magna id. Fugiat sunt irure non proident nostrud veniam exercitation cupidatat ut esse.ksfjklsjdflsjsklj
          </div>

          <DsButton>Button 1</DsButton>
        </DsTabItem>

        <DsTabItem title="Second Tab">
          <div>
            Culpa eu sit aliquip duis. Elit amet cupidatat ut ullamco sit quis anim laborum voluptate anim. Nisi incididunt anim occaecat magna ipsum ipsum nisi velit fugiat aliquip. Duis aliquip voluptate ullamco occaecat consectetur ad eiusmod voluptate nostrud ut velit laboris enim enim. Deserunt ipsum nulla commodo ullamco culpa.
          </div>

          <DsButton>Button 2</DsButton>
        </DsTabItem>

        <DsTabItem title="Third Tab">
          <div>
            Amet nulla consequat et occaecat ipsum commodo deserunt nulla et. Minim amet ullamco mollit irure voluptate nostrud. Dolor aute laboris minim pariatur esse ipsum est veniam ea.
          </div>

          <DsButton>Button 3</DsButton>
        </DsTabItem>
      </DsTabs>
`,
	},
});

export const WithIcons = buildStory({
	components: { DsTabs, DsTabItem, DsButton },

	code: {
		template: `
      <DsTabs>
        <DsTabItem title="Home Tab" icon="las la-home">
          <div>
            Fugiat sunt nisi incididunt exercitation duis reprehenderit cupidatat. Laboris proident veniam est ea esse quis exercitation labore veniam ad et fugiat eu elit. Tempor in pariatur consequat laborum in enim ad fugiat id non. Non commodo pariatur adipisicing magna id. Fugiat sunt irure non proident nostrud veniam exercitation cupidatat ut esse.ksfjklsjdflsjsklj
          </div>

          <DsButton>Button 1</DsButton>
        </DsTabItem>

        <DsTabItem title="Second Tab" icon="las la-home">
          <div>
            Culpa eu sit aliquip duis. Elit amet cupidatat ut ullamco sit quis anim laborum voluptate anim. Nisi incididunt anim occaecat magna ipsum ipsum nisi velit fugiat aliquip. Duis aliquip voluptate ullamco occaecat consectetur ad eiusmod voluptate nostrud ut velit laboris enim enim. Deserunt ipsum nulla commodo ullamco culpa.
          </div>

          <DsButton>Button 2</DsButton>
        </DsTabItem>

        <DsTabItem title="Third Tab" icon="las la-asterisk">
          <div>
            Amet nulla consequat et occaecat ipsum commodo deserunt nulla et. Minim amet ullamco mollit irure voluptate nostrud. Dolor aute laboris minim pariatur esse ipsum est veniam ea.
          </div>

          <DsButton>Button 3</DsButton>
        </DsTabItem>
      </DsTabs>
`,
	},
});

export const TabChangeEvent = buildStory({
	components: { DsTabs, DsTabItem, DsButton },

	setup() {
		const onTabChange = (tab) => {
			alert(`Changed to tab: ${tab.title}`);
		};

		return { onTabChange };
	},

	code: {
		setup: `
      const onTabChange = (tab) => {
        alert( \`Changed to tab: \${tab.title}\`);
      };

      return { onTabChange };
    `,

		template: `
            <DsTabs @tabChange="onTabChange">
                <DsTabItem title="Home Tab" icon="las la-home">
                    <div>
                        Fugiat sunt nisi incididunt exercitation duis reprehenderit cupidatat. Laboris proident veniam
                        est ea esse quis exercitation labore veniam ad et fugiat eu elit. Tempor in pariatur consequat
                        laborum in enim ad fugiat id non. Non commodo pariatur adipisicing magna id. Fugiat sunt irure
                        non proident nostrud veniam exercitation cupidatat ut esse.ksfjklsjdflsjsklj
                    </div>

                    <DsButton>Button 1</DsButton>
                </DsTabItem>

                <DsTabItem title="Second Tab">
                    <div>
                        Culpa eu sit aliquip duis. Elit amet cupidatat ut ullamco sit quis anim laborum voluptate anim.
                        Nisi incididunt anim occaecat magna ipsum ipsum nisi velit fugiat aliquip. Duis aliquip
                        voluptate ullamco occaecat consectetur ad eiusmod voluptate nostrud ut velit laboris enim enim.
                        Deserunt ipsum nulla commodo ullamco culpa.
                    </div>

                    <DsButton>Button 2</DsButton>
                </DsTabItem>

                <DsTabItem title="Third Tab" icon="las la-asterisk">
                    <div>
                        Amet nulla consequat et occaecat ipsum commodo deserunt nulla et. Minim amet ullamco mollit
                        irure voluptate nostrud. Dolor aute laboris minim pariatur esse ipsum est veniam ea.
                    </div>

                    <DsButton>Button 3</DsButton>
                </DsTabItem>
            </DsTabs>
        `,
	},
});
