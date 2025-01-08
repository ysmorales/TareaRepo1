import DsButtonAvatar from '../../../../components/DesignSystem/components/basic/button-avatar/DsButtonAvatar.vue';
import DsNavbar from '../../../../components/DesignSystem/components/navigation/navbar/DsNavbar.vue';
import DsLink from '../../../../components/DesignSystem/components/navigation/link/DsLink.vue';

export default {
	components: { DsLink, DsButtonAvatar, DsNavbar },
	title: 'Basic/ButtonAvatar',
	component: DsButtonAvatar,
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			description: 'The title displayed on the avatar button.',
		},
		userData: {
			control: 'object',
			description: 'The user data displayed in the dropdown menu.',
		},
		class: {
			control: 'text',
			description: 'The custom CSS classes applied to the component.',
		},
		editProfile: {
			description: 'Event emitted when the user clicks on "Edit profile".',
		},
		closeSession: {
			description: 'Event emitted when the user clicks on "Close session".',
		},
	},
};

const ButtonAvatarTemplate = args => ({
	components: { DsNavbar, DsButtonAvatar, DsLink },
	setup() {
		return { args };
	},
	template: `
        <div class="h-[250px]">
            <DsNavbar>
                <div class="flex">
                    <DsLink class="m-2">Link 1</DsLink>
                    <DsLink class="m-2">Link 2</DsLink>
                </div>
                <DsButtonAvatar v-bind="args"/>
            </DsNavbar>
        </div>
    `,
});

export const ButtonAvatar = ButtonAvatarTemplate.bind({});
ButtonAvatar.args = {
	title: 'My account',
	userData: { name: 'guest', email: 'email not defined' },
	class: '',
};
ButtonAvatar.parameters = {
	docs: {
		description: {
			story: `
### Usage

The \`DsButtonAvatar\` component is an avatar button with a dropdown menu. When the button is clicked, a menu is displayed with user information and options to edit the profile and close the session.

The properties you can pass to the component are:

- \`title\`: The title displayed on the avatar button.
- \`userData\`: The user data displayed in the dropdown menu.
- \`class\`: The custom CSS classes applied to the component.

The component emits the following events:

- \`editProfile\`: Emitted when the user clicks on "Edit profile".
- \`closeSession\`: Emitted when the user clicks on "Close session".

Here is an example of how to use the component:

\`\`\`vue
< DsButtonAvatar
  title="My account"
  :userData="{ name: 'guest', email: 'email not defined' }"
  class="my-custom-class"
  @editProfile="handleEditProfile"
  @closeSession="handleCloseSession"
/>
\`\`\`
`,
		},
	},
};
