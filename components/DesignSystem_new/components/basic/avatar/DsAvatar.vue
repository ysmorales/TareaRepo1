<script lang="ts" setup>
import { computed } from 'vue';
import { sizeAvatarClasses } from '../../../common/propsStyle';

type ISize = 'xSmall' | 'small' | 'normal' | 'medium' | 'large';

const props = defineProps({
	size: {
		type: String as () => ISize,
		default: 'large',
	},
	alt: {
		type: String,
		default: 'alt-default',
	},
	src: {
		type: String,
		default: '/images/avatar.jpeg',
	},
	class: {
		type: String,
		default: '',
	},
});
const filterClassComp = computed(() => {
	// return filterClass(predefinedClasses, props.class);
	return props.class;
});
</script>

<template>
	<img
		:alt="alt"
		:class="['rounded-full', filterClassComp, sizeAvatarClasses[size]]"
		:src="src || '/images/icono-user.jpg'"
	>
</template>
