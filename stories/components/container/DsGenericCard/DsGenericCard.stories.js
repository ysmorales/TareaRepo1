import DsGenericCard from '../../../../components/DesignSystem/components/container/generic-card/DsGenericCard.vue';
import { buildStory, commonArgTypes } from '../../../common/common';

export default {
	title: 'Container/GenericCard',
	component: DsGenericCard,
	tags: ['autodocs'],

	argTypes: {
		...commonArgTypes,

		rounded: {
			control: 'boolean',
			description: 'Enable/disable rounded borders',
		},

		headerText: {
			control: 'text',
			description: 'Text shown in header zone.',
		},

		bodyText: {
			control: 'text',
			description: 'Text shown in central body zone.',
		},

		footerText: {
			control: 'text',
			description: 'Text shown in footer zone.',
		},

		topColor: {
			control: 'select',
			options: ['primary', 'dark'],
			description: 'Top borderColor style',
		},

		// Slots
		header: {
			description: 'HTML to show in header zone (alternative to headerText).',
		},

		body: {
			description: 'HTML to show in main body zone (alternative to bodyText)',
		},

		footer: {
			description: 'HTML to show in footer zone (alternative to footerText)',
		},
	},
};

export const Default = {};

export const FullTextWithProperties = {
	args: {
		headerText: 'Custom header (in properties)',
		bodyText: 'Custom body (in properties)',
		footerText: 'Custom footer (in properties)',
	},
};

export const NoHeader = {
	args: {
		headerText: null,
		bodyText: 'Custom body (in properties)',
		footerText: 'Custom footer (in properties)',
	},
};

export const NoBody = {
	args: {
		headerText: 'Custom header (in properties)',
		footerText: 'Custom footer (in properties)',
	},
};

export const NoFooter = {
	args: {
		headerText: 'Custom header (in properties)',
		bodyText: 'Custom body (in properties)',
	},
};

export const NoRounded = {
	args: {
		rounded: false,
		headerText: 'Custom header (in properties)',
		bodyText: 'Custom body (in properties)',
		footerText: 'Custom footer (in properties)',
	},
};

export const TopColorDark = {
	args: {
		topColor: 'dark',
		headerText: 'Custom header (in properties)',
		bodyText: 'Custom body (in properties)',
		footerText: 'Custom footer (in properties)',
	},
};

export const FullTextWithSlots = buildStory({
	components: { DsGenericCard },

	code: {
		template: `
      <DsGenericCard>
        <template #header>
          Custom header (in slot)
        </template>

        <template #body>
          Custom body (in slot)
        </template>

        <template #footer>
          Custom footer (in slot)
        </template>
      </DsGenericCard>
    `,
	},
});

export const NoHeaderSlot = buildStory({
	components: { DsGenericCard },

	code: {
		template: `
      <DsGenericCard>
        <template #body>
          Custom body (in slot)
        </template>

        <template #footer>
          Custom footer (in slot)
        </template>
      </DsGenericCard>
    `,
	},
});

export const NoBodySlot = buildStory({
	components: { DsGenericCard },

	code: {
		template: `
      <DsGenericCard>
        <template #header>
          Custom header (in slot)
        </template>

        <template #footer>
          Custom footer (in slot)
        </template>
      </DsGenericCard>
    `,
	},
});

export const NoFooterSlot = buildStory({
	components: { DsGenericCard },

	code: {
		template: `
      <DsGenericCard>
        <template #header>
          Custom header (in slot)
        </template>

        <template #body>
          Custom body (in slot)
        </template>
      </DsGenericCard>
    `,
	},
});

export const SlotOverrideProperty = buildStory({
	components: { DsGenericCard },

	code: {
		template: `
      <DsGenericCard headerText="Real header">
        <template #header>
          This header slot overrides the assigned headerText property.
        </template>

        <template #body>
          Custom body
        </template>
      </DsGenericCard>
    `,
	},
});
