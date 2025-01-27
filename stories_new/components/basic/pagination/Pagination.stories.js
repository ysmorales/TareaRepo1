import { ref } from 'vue';
import DsPagination from '../../../../components/DesignSystem/components/basic/pagination/DsPagination.vue';

export default {
	title: 'Basic/Pagination',
	component: DsPagination,
	tags: ['autodocs'],
	argTypes: {
		totalItems: {
			description: 'The total number of items to be paginated.',
			control: { type: 'number' },
		},
		itemsPerPage: {
			description: 'The number of items to be displayed per page.',
			control: { type: 'number' },
		},
		currentPage: {
			description: 'The current active page.',
			control: { type: 'number' },
		},
	},
};

export const Default = {
	args: {},
};
const Template = args => ({
	components: { DsPagination },
	setup() {
		const currentPage = ref(1);

		const handlePage = (value) => {
			currentPage.value = value;
		};

		return { args, currentPage, handlePage };
	},

	template: `
      <div class="container">
        <DsPagination
            :current-page="currentPage"
            :items-per-page="5"
            :total-items="150"
            @change="handlePage"
        />
      </div>
    `,
});
export const ChangePage = Template.bind({});
ChangePage.args = {};
ChangePage.parameters = {
	docs: {
		source: {
			code: `
<script lang="ts" setup>
import { ref } from "vue";

const currentPage = ref(1);

function handlePage(value) {
  currentPage.value=value;
}
</script>

<template>
  <div class="container">
    <DsPagination
      :current-page="currentPage"
      :items-per-page="5"
      :total-items="150"
      @change="handlePage"
    />
  </div>
</template>
`,
		},
	},
};
