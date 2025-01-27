import DsConfirmation from '../../../../components/DesignSystem/components/layout/confirmation/DsConfirmation.vue';
import DsConfirmationItem from '../../../../components/DesignSystem/components/layout/confirmation/DsConfirmationItem.vue';
import { commonArgTypes, buildStory } from '../../../common/common';

export default {
	title: 'Layout/Confirmation',
	component: DsConfirmation,
	tags: ['autodocs'],

	argTypes: {
		...commonArgTypes,

		title: {
			control: 'text',
			description: 'Confirmation panel title.',
		},

		subtitle: {
			control: 'text',
			description: 'Confirmation panel subtitle.',
		},

		default: {
			description: `Main content. Must be a sequence of DsConfirmationItem elements.
      Each DsConfirmationItem has a mandatory property title and HTML content.`,
		},
	},
};

export const Default = {};

export const Demo = buildStory({
	components: { DsConfirmation, DsConfirmationItem },

	code: {
		template: `
  <DsConfirmation title="Please confirm request"
                  subtitle="You are about to send this request, please confirm all the data.">
    <DsConfirmationItem title="First Panel">
      <ul class="text-neutral-500 mb-5">
        <li class="mb-2">
          Name
          <strong class="block">Marcelo Alarcón</strong>
        </li>

        <li class="mb-2">
          RUN
          <strong class="block">12.345.678-9  </strong>
        </li>

        <li class="mb-2">
          Address
          <strong class="block">Av. Los Leones 234, Providencia RM. </strong>
        </li>
      </ul>
    </DsConfirmationItem>

    <DsConfirmationItem title="Second Panel">
      <ul class="text-neutral-500 mb-5">
        <li class="mb-2">
          Phone number
          <strong class="block">+56 9 92742455</strong>
        </li>

        <li class="mb-2">
          Email
          <strong class="block">marceloa@correo.com</strong>
        </li>

        <li class="mb-2"><strong class="block">
          Family Group
          <strong class="block">Confirmed</strong>
        </li>
      </ul>
    </DsConfirmationItem>

    <DsConfirmationItem title="Third panel">
      More content here...
    </DsConfirmationItem>
</DsConfirmation>
    `,
	},
});
