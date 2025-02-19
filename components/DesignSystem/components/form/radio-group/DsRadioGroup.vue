<script lang="ts" setup>
import { ref, computed, onMounted, toRefs, provide, watch } from 'vue';
import type { PropType, Ref } from 'vue';
import generateUniqueId from '../../../utils/generateUniqueId';
import useFocus from '../../../composables/useFocus';
import { filterClass } from '../../../utils/filterClass';
import { predefinedClasses } from '../../../common/propsStyle';

const props = defineProps({
	modelValue: {
		type: String,
		defaultValue: '',
	},
	id: {
		type: String,
	},
	required: {
		type: Boolean,
		default: false,
	},
	label: {
		type: String,
		default: 'Default label',
	},
	error: {
		type: String as () => string | null | undefined | Ref<string>,
		default: null,
	},
	helpMessage: {
		type: String as PropType<string | null>,
		default: null,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	focus: {
		type: Boolean,
		default: false,
	},
	class: {
		type: String,
		default: '',
	},
});
const { elementRef: selectRef } = useFocus(
	() => props.focus,
	() => props.error,
);
const filterClassComp = computed(() => {
	return filterClass(predefinedClasses, props.class);
});
const uniqueID = ref('');
onMounted(() => {
	uniqueID.value = generateUniqueId('radio');
});
const { modelValue } = toRefs(props);
const selectedRadio = ref(null);
provide('selectedRadio', selectedRadio);
provide('initialValue', modelValue);
provide('disabled', props.disabled);
const emit = defineEmits(['update:modelValue']);
watch(selectedRadio, (newValue) => {
	emit('update:modelValue', newValue);
});

const hasError = computed(() => !!props.error);
</script>

<template>
	<div
		:id="id ?? uniqueID"
		ref="selectRef"
		:class="[
			'flex flex-col justify-center z-0 focus:outline-pink-500 focus:outline-2 focus:outline-offset-2',
			filterClassComp,
		]"
		tabindex="0"
	>
		<label
			v-if="label"
			:for="id ?? uniqueID"
			class="mb-2"
		>
			{{ label }}
			<span
				v-if="required"
				aria-hidden="true"
				class="required-marker"
			>*</span>
		</label>
		<slot />
		<label
			v-if="hasError"
			class="error-message block mb-0"
		>
			{{ error }}
		</label>

		<label
			v-if="helpMessage"
			class="help-message block"
		>
			{{ helpMessage }}
		</label>
	</div>
</template>
