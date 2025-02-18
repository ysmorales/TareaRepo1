<script lang="ts" setup>
import { computed } from 'vue';
import { filterClass } from '../../../utils/filterClass';
import { predefinedClasses } from '../../../common/propsStyle';

type IType = 'spinner' | 'dots';
const props = defineProps({
	type: {
		type: String as () => IType,
		default: 'spinner',
	},
	isDefaultText: {
		type: Boolean,
		default: false,
	},
	text: {
		type: String,
		default: 'Cargando datos...',
	},
	class: {
		type: String,
		default: '',
	},
});
const filterClassComp = computed(() => {
	return filterClass(predefinedClasses, props.class, [
		'items-start',
		'items-center',
		'items-end',
	]);
});
</script>

<template>
	<div
		v-if="type === 'spinner'"
		:class="[filterClassComp, 'flex items-center']"
	>
		<img
			alt="Cargando datos"
			class="motion-safe:animate-spin h-10 w-10 mr-3"
			src="/images/spinner.png"
		>
		<span
			v-if="isDefaultText && type === 'spinner'"
			class="text-primary-500 text-xs"
		>{{ text }}</span>
	</div>
	<img
		v-if="type === 'dots'"
		alt="Cargando datos"
		class="w-8"
		src="/images/loading-dots.gif"
	>
</template>

<style scoped></style>
