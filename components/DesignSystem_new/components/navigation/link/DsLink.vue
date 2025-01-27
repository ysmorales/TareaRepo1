<script lang="ts" setup>
import { computed } from 'vue';
import { variantLinkClasses } from './library';
import type { ILinkSize, ILinkVariant } from './interface';

const props = defineProps({
	text: {
		type: String,
		default: 'default text',
	},

	color: {
		type: String as () => ILinkVariant,
		default: 'primary',
	},

	size: {
		type: String as () => ILinkSize,
		default: 'base',
	},

	href: {
		type: String,
	},

	class: {
		type: String,
		default: '',
	},
	target: {
		type: String as () => '_self' | '_blank',
	},
	title: {
		type: String,
	},
});

const filterClassComp = computed(() => {
	// return filterClass(predefinedClasses, props.class, otherStyle);
	return props.class;
});

const cssClasses = computed(() => [
	filterClassComp.value,
    `text-${props.size}`,
    variantLinkClasses[props.color],
    {
    	underline: !filterClassComp.value.includes('no-underline'),
    },
]);
</script>

<template>
	<NuxtLink
		:class="['cursor-pointer', cssClasses]"
		:target="target"
		:title="title"
		:to="href"
	>
		<slot>
			{{ text }}
		</slot>
	</NuxtLink>
</template>
