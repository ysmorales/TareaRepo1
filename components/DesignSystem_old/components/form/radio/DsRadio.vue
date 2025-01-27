<script lang="ts" setup>
import { type PropType, ref } from 'vue';
import { onMounted, computed } from 'vue';
import { elementSizes, predefinedClasses } from '../../../common/propsStyle';
import type { ISize } from '../../../interfaces/elements';
import { filterClass } from '../../../utils/filterClass';
import generateUniqueId from '../../../utils/generateUniqueId';
import { translateError } from '../../../utils/translateErrorMessage';
import buildAriaLabels from '../../../utils/buildAriaLabels';
import useFocus from '../../../composables/useFocus';

const props = defineProps({
	modelValue: {
		type: String,
	},

	value: {
		type: String,
		default: null,
	},
	id: {
		type: String,
	},

	class: {
		type: String,
		default: '',
	},

	group: {
		type: String,
		default: 'Default Group',
	},

	size: {
		type: String as () => ISize,
		default: 'normal',
	},

	disabled: {
		type: Boolean,
		default: false,
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
		type: String,
		default: null,
	},

	helpMessage: {
		type: String as PropType<string | null>,
		default: null,
	},
	focus: {
		type: Boolean,
		default: false,
	},
});
const { elementRef: selectRef } = useFocus(
	() => props.focus,
	() => props.error,
);
const uniqueID = ref('');
onMounted(() => {
	uniqueID.value = generateUniqueId('radio');
});
const labelId = computed(() => `${uniqueID.value}-label`);
const errorMessageId = computed(() => `${uniqueID.value}-error-message`);
const helpMessageId = computed(() => `${uniqueID.value}-help-message`);

const defaultClasses = 'hover:border-dark-500 border p-2 mb-2 w-auto mr-1';

const filterClassComp = computed(() => {
	return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() => [
	elementSizes[props.size],
	{
		error: hasError.value,
	},
	defaultClasses,
]);

const emit = defineEmits(['update:modelValue']);

const model = computed({
	get() {
		return props.modelValue;
	},

	set(value) {
		emit('update:modelValue', value);
	},
});

const hasError = computed(() => !!props.error);
const errorMessage = computed(() => translateError(props.error));

const ariaLabels = computed(() =>
	buildAriaLabels(props, {
		label: labelId.value,
		error: errorMessageId.value,
		helpMessage: helpMessageId.value,
	}),
);
</script>

<template>
	<div :class="filterClassComp">
		<div class="flex items-center">
			<input
				:id="id ?? uniqueID"
				ref="selectRef"
				v-model="model"
				:aria-checked="model === value ? 'true' : 'false'"
				:aria-invalid="hasError"
				:aria-labelledby="ariaLabels"
				:aria-required="required"
				:class="cssClasses"
				:disabled="disabled"
				:name="group"
				:value="value"
				type="radio"
			>

			<label
				v-if="label"
				:id="labelId"
				:for="uniqueID"
				class="mb-2"
			>
				{{ label }}
				<span
					v-if="required"
					aria-hidden="true"
					class="required-marker"
				>*</span>
			</label>
		</div>

		<label
			v-if="hasError"
			:id="errorMessageId"
			class="error-message block mb-0"
		>
			{{ errorMessage }}
		</label>

		<label
			v-if="helpMessage"
			:id="helpMessageId"
			class="help-message block"
		>
			{{ helpMessage }}
		</label>
	</div>
</template>
