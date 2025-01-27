<script lang="ts" setup>
import { computed } from 'vue';
import { loremItsum } from '../../../utils/loremItsum';
import { filterClass } from '../../../utils/filterClass';
import { predefinedClasses } from '../../../common/propsStyle';

const props = defineProps({
	class: {
		type: String,
		default: '',
	},
});
const filterClassComp = computed(() => {
	return filterClass(predefinedClasses, props.class, [
		'flex',
		'flex-col',
		'justify-end',
		'items-end',
	]);
});
</script>

<template>
	<div
		:class="[
			'p-6  bg-white rounded-xl border border-gray-300 borderCustom space-y-4 overflow-auto',
			filterClassComp,
		]"
	>
		<slot>{{ loremItsum }}</slot>
	</div>
</template>

<style scoped>
.borderCustom {
  box-shadow:
    5px 5px 5px rgba(0, 0, 0, 0.2),
    -5px -5px 5px rgba(255, 255, 255, 0.7);
}
</style>
