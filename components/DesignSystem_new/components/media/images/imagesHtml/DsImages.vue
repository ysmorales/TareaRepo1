<script lang="ts" setup>
import { computed } from 'vue';
import { sizeImagesClasses } from '../../../../common/propsStyle';

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
const elementSize = computed(() => {
	const size = props.size || 'normal'; // Si props.size es undefined, usamos 'normal'
	return sizeImagesClasses[size];
});
const filterClassComp = computed(() => {
	// return filterClass(predefinedClasses, props.class, ["max-h-[200px]"]);
	return props.class;
});
const imageSrc = computed(() => {
	return props.src;
});
</script>

<template>
	<img
		:alt="alt"
		:class="[filterClassComp, { rounded: radius }, elementSize]"
		:src="`${imageSrc}`"
	>
</template>
