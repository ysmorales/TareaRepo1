<script lang="ts" setup>
import { inject, computed } from 'vue';
import { elementSizes, predefinedClasses } from '../../../common/propsStyle';
import { filterClass } from '../../../utils/filterClass';
import generateUniqueId from '../../../utils/generateUniqueId';
import type { ISize } from '../../../interfaces/elements';
import type { IDropType } from '../dropdown/interfaces';

const props = defineProps({
	type: {
		type: String as () => IDropType,
		default: 'default',
	},

	class: {
		type: String,
		default: '',
	},

	size: {
		type: String as () => ISize,
		default: 'normal',
	},

	label: {
		type: String,
		default: 'Default label',
	},

	icon: {
		type: String,
		default: '',
	},

	data: {
		type: Object,
		default: null,
	},
});

const uniqueId = computed(() => generateUniqueId('menu-item'));

const defaultClasses
  = 'flex items-center text-sm py-1.5 px-4 relative whitespace-nowrap w-full hover:bg-primary-900';

const filterClassComp = computed(() => {
	return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() => [
	filterClassComp,
	elementSizes[props.size],
	defaultClasses,
]);

const { onItemSelected }: any = inject('itemSelected');

const emit = defineEmits(['click']);

const handleClick = (e: any) => {
	const item = {
		target: e.target,
		label: props.label,
		data: props.data,
	};

	emit('click', item);
	onItemSelected(item);
};
</script>

<template>
	<a
		:id="uniqueId"
		:class="cssClasses"
		:title="label"
		href="#"
		role="listitem"
		@click.prevent="handleClick"
	>
		<img
			v-if="icon"
			:src="icon"
			class="w-4 mr-2"
		>
		<slot>{{ label }}</slot>
	</a>
</template>

<style scoped></style>
