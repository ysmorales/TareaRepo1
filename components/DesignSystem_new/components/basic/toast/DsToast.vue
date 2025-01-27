<script lang="ts" setup>
import { watchEffect } from 'vue';
import DsIcon from '../icon/DsIcon.vue';
import { toastStyleClass } from './library';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
	modelValue: { type: Boolean, default: true },
	title: { type: String, default: 'Title' },
	message: { type: String, default: 'Petición enviada satisfactoriamente' },
	time: { type: Number, default: 3000 },
	variant: {
		type: String as () => 'success' | 'danger' | 'info',
		default: 'success',
	},
	position: {
		type: String as () => 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft',
		default: 'topRight',
	},
});
const getPositionClass = () => {
	switch (props.position) {
		case 'topRight':
			return 'right-4 top-4';
		case 'topLeft':
			return 'left-[200px] top-4';
		case 'bottomRight':
			return 'right-4 bottom-4';
		case 'bottomLeft':
			return 'left-[200px] bottom-4';
		default:
			return 'left-1/2 bottom-4 transform -translate-x-1/2';
	}
};
let timerRef: ReturnType<typeof setTimeout> | null = null; // reference to the timeout for auto-dismiss

const showToast = () => {
	clearTimeout(timerRef as ReturnType<typeof setTimeout>);
	timerRef = setTimeout(() => {
		emit('update:modelValue', false);
	}, props.time);
};

watchEffect(() => {
	if (props.modelValue) {
		showToast();
	}
	else {
		clearTimeout(timerRef as ReturnType<typeof setTimeout>);
	}
});
const closeToast = () => {
	emit('update:modelValue', false);
};
</script>

<template>
	<transition name="toast-fade">
		<div
			v-if="modelValue"
			:class="[
				'fixed transform -translate-x-1/2 p-4  max-w-sm w-full  rounded-lg shadow-md border border-gray-200 space-y-2 z-50',
				toastStyleClass[variant].bg,
				getPositionClass(),
			]"
		>
			<div class="flex justify-between items-start">
				<div class="flex">
					<DsIcon
						:name="toastStyleClass[variant].icon"
						class="mr-2"
						color="neutral"
					/>
					<h2 class="text-lg font-semibold text-white">
						{{ title }}
					</h2>
				</div>
				<button
					class="text-white p-1 hover:text-gray-100 absolute top-1 right-1 rounded border-0"
					@click="closeToast"
				>
					X
				</button>
			</div>
			<p class="text-white text-sm">
				{{ message }}
			</p>
		</div>
	</transition>
</template>

<style scoped src="./toastTransitions.css"></style>
