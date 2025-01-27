<script lang="ts" setup>
import { computed } from 'vue';
import useFocus from '../../../composables/useFocus';
import DsIcon from '../../basic/icon/DsIcon.vue';
import DsSpinner from '../spinner/DsSpinner.vue';
import type { IIconColor, IIconSize } from '../../../interfaces/elements';
import { colorButtonClass, sizeButtonClass } from './library';
import type { IButtonColor, IButtonSize, IButtonType } from './interfaces';

// resolve conflict and refactor
const props = defineProps({
	text: {
		type: String,
		default: 'default text',
	},

	color: {
		type: String as () => IButtonColor,
		default: 'primary',
	},
	variant: {
		type: String as () => 'buttonFile' | 'button',
		default: 'button',
	},

	size: {
		type: String as () => IButtonSize,
		default: 'default',
	},
	loading: {
		type: Boolean,
		default: false,
	},
	loadingColor: {
		type: String as () => 'white' | 'red' | 'blue' | 'gray',
		value: 'white',
	},
	startImage: {
		type: String,
		default: '',
	},
	iconColor: {
		type: String as () => IIconColor,
		default: null,
	},
	iconStyle: {
		type: String,
		default: null,
	},
	iconSize: {
		type: String as () => IIconSize,
		default: 'base',
	},
	endImage: {
		type: String,
		default: '',
	},

	type: {
		type: String as () => IButtonType,
		default: 'button',
	},

	disabled: {
		type: Boolean,
		default: false,
	},

	// rounded: {
	//   type: Boolean,
	//   default: true,
	// },

	focus: {
		type: Boolean,
		default: false,
	},
	class: {
		type: String,
		default: '',
	},
});

const emit = defineEmits<{
	(event: 'click', value: MouseEvent): void;
}>();
const filterClassComp = computed(() => {
	// return filterClass(predefinedClasses, props.class, ["max-h-[50px]"]);
	return props.class;
});

const { elementRef: buttonRef } = useFocus(
	() => props.focus,
	() => '',
);

const buttonClasses = computed(() => {
	const classes = [
		colorButtonClass[props.color],
		props.variant !== 'buttonFile' ? sizeButtonClass[props.size] : '',
		filterClassComp.value,
	];
	//
	// if (props.rounded) {
	//   classes.push("rounded");
	// } else {
	//   classes.push("rounded-none");
	// }

	if (props.disabled) {
		classes.push('opacity-50');
	}

	return classes;
});
</script>

<template>
	<button
		ref="buttonRef"
		:class="[
			'flex items-center',
			buttonClasses,
			{ 'btn-file': variant === 'buttonFile' },
		]"
		:disabled="disabled"
		:type="type"
		@click="$emit('click', $event)"
	>
		<DsIcon
			v-if="startImage"
			:class="[{ 'mr-1': !iconStyle }, iconStyle]"
			:color="iconColor"
			:name="startImage"
			:size="iconSize"
		/>

		<slot>{{ text }}</slot>
		<DsSpinner
			v-if="loading"
			:color="loadingColor"
		/>
		<DsIcon
			v-if="endImage"
			:class="[{ 'ml-1': !iconStyle }, iconStyle]"
			:color="iconColor"
			:name="endImage"
			:size="iconSize"
		/>
	</button>
</template>
