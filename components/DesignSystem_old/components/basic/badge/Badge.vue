<script lang="ts" setup>
import { computed } from 'vue';
import DsIcon from '../icon/DsIcon.vue';
import { filterClass } from '../../../utils/filterClass';
import { predefinedClasses } from '../../../common/propsStyle';

const props = defineProps({
	icon: {
		type: String,
		required: true,
	},

	value: {
		type: Number,
		default: 0,
		required: true,
	},

	class: {
		type: String,
		default: '',
	},
});

const filterClassComp = computed(() => {
	return filterClass(predefinedClasses, props.class);
});
</script>

<template>
	<div
		:class="[
			filterClassComp,
			'group relative w-12 h-12 rounded-full flex justify-center items-center',
		]"
	>
		<DsIcon
			:name="icon"
			size="large"
		/>

		<span
			v-if="value > 0"
			class="absolute top-0 right-0 h-5 w-5 rounded-full text-xs ring-2 ring-white bg-blue-400 text-white font-bold flex items-center justify-center"
		>
			{{ value }}
		</span>
	</div>
</template>
