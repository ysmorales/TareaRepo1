import type { Meta, StoryObj } from '@storybook/vue3';
import { AllIcons } from '../../../../components/DesignSystem/components/basic/icon/library';
import { buildStory } from '../../../common/common';

/**
 * ------------------------------------------
 *	Components
 * ------------------------------------------
 */

import { DsTag } from '../../../../components/DesignSystem';

/**
 * ------------------------------------------
 *	Types
 * ------------------------------------------
 */
import type { IDsTagType } from '../../../../components/DesignSystem/components/basic/tag/types';

type Story = StoryObj<typeof DsTag>;

/**
 * ------------------------------------------
 *	Utils
 * ------------------------------------------
 */

const iconOptions: IDsTagType[] = ['danger', 'dark', 'gray', 'neutral', 'primary', 'success', 'warning'];

const meta: Meta<typeof DsTag> = {
	title: 'Basic/Tag',
	component: DsTag,
	tags: ['autodocs'],
	argTypes: {
		text: {
			description: 'Text of the tag',
		},
		color: {
			control: {
				type: 'select',
			},
			options: iconOptions,
			description: 'Predefined tag class',
		},
		outline: {
			control: {
				type: 'boolean',
			},
			description: 'Add outline styles',
		},
		icon: {
			control: {
				type: 'select',
			},
			options: AllIcons,
			description: 'Add outline styles',
		},
		class: {
			control: 'text',
			description:
				'The class property is used to apply CSS styles to HTML elements.',
		},
	},
};
export default meta;

export const Icon: Story = {
	args: {
		text: 'Tag With Icon',
		icon: 'exclamation-circle',

	},
};
export const Outline: Story = {
	args: {
		text: 'Outlined',
		icon: 'times-circle',
		color: 'primary',
		outline: true,
	},
};

export const Variant = buildStory({
	name: 'Variants',
	components: { DsTag },
	code: {
		template: `
			<div class='space-y-2'>
				<div>
					<DsTag text='Enviado | Rechazado (color="primary")' color='primary'></DsTag>
				</div>
				<div>
					<DsTag text='Aprobado (color: "success")' color='success'></DsTag>
				</div>
				<div>
					<DsTag text='Confirmar (color: "success", outline=true)' color='success' outline></DsTag>
				</div>
				<div>
					<DsTag text='Pendiente (color: "waning")' color='warning'></DsTag>
				</div>
				<div>
					<DsTag text='Urgente (color: "danger")' color='danger'></DsTag>
				</div>
				<div>
					<DsTag text='Neutral (color: "primary")' color='primary' outline></DsTag>
				</div>
			</div>
    `,
	},
});
