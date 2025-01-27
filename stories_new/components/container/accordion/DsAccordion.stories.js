import { ref } from 'vue';
import DsAccordion from '../../../../components/DesignSystem/components/container/accordion/DsAccordion.vue';
import { buildStory, commonArgTypes } from '../../../common/common';

export default {
	components: { DsAccordion },
	title: 'Container/Accordion',
	component: DsAccordion,
	tags: ['autodocs'],

	argTypes: {
		...commonArgTypes,
		default: { table: { disable: true } },

		type: {
			control: 'select',
			options: ['standard', 'card'],
			description: 'Accordion type',
		},

		title: {
			control: 'text',
			description: 'Accordion title.',
		},

		triggerText: {
			control: 'text',
			description: 'Text shown on the trigger, when type = \'card\'.',
		},

		children: {
			control: 'text',
			description:
        'Text shown in the content, if no inner HTML text is defined.',
		},

		collapsed: {
			control: 'boolean',
			description: 'Accordion collapsed state.',
		},
	},
};

export const Default = {};

export const Card = {
	args: {
		type: 'card',
	},
};

export const TriggerText = {
	args: {
		type: 'card',
		triggerText: 'Custom trigger',
	},
};

export const Title = {
	args: {
		title: 'Custom title',
	},
};

export const NonCollapsed = {
	args: {
		collapsed: false,
	},
};

export const Children = {
	args: {
		children: 'Custom content (on children property)',
	},
};

export const HtmlContent = buildStory({
	components: { DsAccordion },

	code: {
		template: `
      <DsAccordion>
        Custom content (on main HTML).
      </DsAccordion>
    `,
	},
});

const Template = args => ({
	components: { DsAccordion },
	setup() {
		const open = ref(false);

		function handleToggleCollapse() {
			open.value = !open.value;
		}

		return { args, open, handleToggleCollapse };
	},
	template: `
        <DsAccordion
            title="example1"
            :collapsed="open"
            @toggleCollapse="handleToggleCollapse"
        >
            Example1
        </DsAccordion>
        <DsAccordion
            title="example2"
            :collapsed="!open"
            @toggleCollapse="handleToggleCollapse"
        >
            Example2
        </DsAccordion>
    `,
});

export const CustomAction = Template.bind({});
CustomAction.args = {};

CustomAction.parameters = {
	docs: {
		source: {
			code: `
        <script setup lang="ts">
          const open = ref(false);
          function handleToggleCollapse() {
            open.value = !open.value;
          }
        </script>
        <template>
          <DsAccordion 
            title="example1" 
            :collapsed="open" 
            @toggleCollapse="handleToggleCollapse"
          >
            Example1
          </DsAccordion>
          <DsAccordion 
            title="example2" 
            :collapsed="!open" 
            @toggleCollapse="handleToggleCollapse"
          >
            Example2
          </DsAccordion>
        </template>
      `,
		},
	},
};
