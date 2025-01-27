<script lang="ts" setup>
import { computed } from 'vue';
import {
	predefinedClasses,
	sizeImagesClasses,
} from '../../../../common/propsStyle';
import { filterClass } from '../../../../utils/filterClass';

type ISize =
	| 'xSmall'
	| 'small'
	| 'medium'
	| 'large'
	| 'xLarge'
	| 'xxLarge'
	| 'auto';
const props = defineProps({
	radius: {
		type: Boolean,
	},
	size: {
		type: String as () => ISize,
		default: 'xxLarge',
	},
	alt: {
		type: String,
		default: 'Text for description',
	},
	src: {
		type: String,
		default: '/images/sample-image.jpg',
	},
	class: {
		type: String,
		default: '',
	},
});
const filterClassComp = computed(() => {
	return filterClass(predefinedClasses, props.class);
});
const elementSize = computed(() => {
	const size = props.size || 'normal';
	return sizeImagesClasses[size];
});
</script>

<template>
	<NuxtImg
		:alt="alt"
		:class="[filterClassComp, { rounded: radius }, elementSize]"
		:src="src"
	/>
</template>
