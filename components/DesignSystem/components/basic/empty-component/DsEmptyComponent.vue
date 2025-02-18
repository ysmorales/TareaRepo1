<script lang="ts" setup>
import DsButton from '../button/DsButton.vue';
import DsIcon from '../icon/DsIcon.vue';

const emit = defineEmits(['reload']);
defineProps({
	loading: {
		type: Boolean,
		default: false,
	},
	isReloadButton: {
		type: Boolean,
		default: true,
	},
	message: {
		type: String,
		default: 'No hay datos disponibles',
	},
	icon: {
		type: String,
		default: 'box',
	},
});

function handleReload() {
	emit('reload');
}
</script>

<template>
	<div class="flex flex-col items-center justify-center space-y-2 w-full">
		<DsIcon
			:name="icon"
			class="m-4"
			size="xlarge"
		/>
		<p class="text-lg text-gray-500 m-4">
			{{ message }}
		</p>
		<DsButton
			v-if="!loading && !isReloadButton"
			color="primary"
			text="Recargar"
			@click="handleReload"
		/>
	</div>
</template>
