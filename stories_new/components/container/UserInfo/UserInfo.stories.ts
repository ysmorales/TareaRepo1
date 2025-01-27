import { ref } from 'vue';

/**
 * ------------------------------------------
 *	Components
 * ------------------------------------------
 */

import type { Meta, StoryObj } from '@storybook/vue3';
import { DsUserInfo } from '../../../../components/DesignSystem';

/**
 * ------------------------------------------
 *	Types
 * ------------------------------------------
 */
import type { IUserInfo } from '../../../../components/DesignSystem/components/container/user-info/types';

type Story = StoryObj<typeof DsUserInfo>;

const meta: Meta<typeof DsUserInfo> = {
	title: 'Container/UserInfo',
	component: DsUserInfo,
	tags: ['autodocs'],
	argTypes: {
		user: {
			control: 'object',
			description: `{<br />
			&nbsp;&nbsp;	email: 'user@email.com',<br />
			&nbsp;&nbsp;	first_name: 'User FirstName',<br />
			&nbsp;&nbsp;	last_name: 'User lastname',<br />
			&nbsp;&nbsp;	phone: '25125675'<br />
		}`,
		},
	},
};
export default meta;

const Template = (args: unknown) => ({
	components: { DsUserInfo },
	setup() {
		const user = ref<IUserInfo>({
			email: 'user@email.com',
			first_name: 'User FirstName',
			last_name: 'User lastname',
			phone: '25125675',
		}); // Declara una ref como una variable reactiva
		return { args, user };
	},
	template: `
    <DsUserInfo :user="user" />
  `,
});

export const Model = Template.bind({});
