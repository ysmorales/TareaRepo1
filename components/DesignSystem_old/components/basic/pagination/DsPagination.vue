<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import DsIcon from '../icon/DsIcon.vue';
import DsButton from '../button/DsButton.vue';

// Opciones de válidos prop
const props = defineProps({
	totalItems: { type: Number, default: 0 },
	itemsPerPage: { type: Number, default: 10 },
	currentPage: { type: Number, default: 1 },
	itemsPerPageOptions: { type: Array, default: () => [5, 10, 20, 50] },
});
const localItemsPerPage = ref(props.itemsPerPage);
// Range
const range = computed(
	() =>
		(props.currentPage - 1) * localItemsPerPage.value
		+ (props.totalItems === 0 ? 0 : 1)
		+ '–'
		+ Math.min(props.currentPage * localItemsPerPage.value, props.totalItems),
);
watch(
	() => props.itemsPerPage,
	(newValue) => {
		localItemsPerPage.value = newValue;
	},
);
const emit = defineEmits(['change', 'itemsPerPageChange']);
const nextPage = () => {
	emit('change', props.currentPage + 1);
};

const previousPage = () => {
	if (props.currentPage > 1) {
		emit('change', props.currentPage - 1);
	}
};
const onItemsPerPageChange = () => {
	emit('itemsPerPageChange', localItemsPerPage.value);
	emit('change', 1);
};
</script>

<template>
	<div class="flex items-center justify-center">
		<div class="px-4 py-2 text-sm text-[#000000de]">
			Item por página:
		</div>
		<select
			v-model="localItemsPerPage"
			class="mr-4 cursor-pointer w-[60px] text-sm"
			@change="onItemsPerPageChange"
		>
			<option
				v-for="option in itemsPerPageOptions"
				:key="option as number"
				:value="option"
			>
				{{ option }}
			</option>
		</select>
		<div class="px-4 py-2 text-sm text-[#000000de]">
			{{ range }} de {{ totalItems }}
		</div>
		<DsButton
			:disabled="currentPage === 1"
			color="tertiary"
			@click="previousPage"
		>
			<DsIcon name="angle-left" />
		</DsButton>
		<div class="no-underline text-blue-800 text-lg p-2">
			{{ currentPage }}
		</div>
		<DsButton
			:disabled="currentPage >= Math.ceil(totalItems / localItemsPerPage)"
			color="tertiary"
			@click="nextPage"
		>
			<DsIcon name="angle-right" />
		</DsButton>
	</div>
</template>
