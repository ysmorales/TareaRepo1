<script lang="ts" setup>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { getErrorMessage } from '../../../utils/translateErrorMessage';
import { DsTypography } from '../../basic/typography';
import DsInput from '../input/DsInput.vue';
import DsButton from '../../basic/button/DsButton.vue';

const props = defineProps({
	title: String,
	modelValue: { type: String, default: '' },
	inputLabel: String,
	cancelButtonText: { type: String, default: 'Cancelar' },
	submitButtonText: { type: String, default: 'Agregar' },
	validationRules: {
		type: Object,
		default: () => ({ required }),
	},
	customClass: { type: String, default: '' },
});
const emits = defineEmits(['cancel', 'submit', 'update:modelValue']);
const form = reactive(
	props.modelValue ? { input: props.modelValue } : { input: '' },
);
const validationRulesFormat = reactive({
	input: props.validationRules,
});

const v$ = useVuelidate(validationRulesFormat, form);

function onCancel() {
	emits('cancel');
}

function onSubmit() {
	v$.value.$touch();
	if (!v$.value.$invalid) {
		emits('update:modelValue', form.input);
		emits('submit', form.input);
	}
}
</script>

<template>
	<div :class="['p-8 bg-[#f7f7f7]', customClass]">
		<DsTypography
			:text="title"
			variant="h3"
		/>
		<form
			class="flex flex-col space-y-2"
			@submit.prevent="onSubmit"
		>
			<div class="flex flex-col">
				<DsInput
					v-model="form.input"
					:error="v$.input ? getErrorMessage(v$.input.$errors[0]) : ''"
					:label="inputLabel"
					required
				/>
			</div>
			<div class="flex justify-end space-x-1">
				<DsButton
					color="tertiary"
					@click="onCancel"
				>
					{{ cancelButtonText }}
				</DsButton>
				<DsButton type="submit">
					{{ submitButtonText }}
				</DsButton>
			</div>
		</form>
	</div>
</template>
