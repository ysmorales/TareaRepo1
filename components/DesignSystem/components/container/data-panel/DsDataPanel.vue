<script lang="ts" setup>
import { computed } from 'vue';
import { configDataPanel, exampleConfigData } from './exampleData';

const props = defineProps({
	model: {
		type: Object,
		default: () => exampleConfigData,
	},

	config: {
		type: Array as () => { title: string; field: string }[],
		default: () => configDataPanel,
	},
});

const _config = computed(() => {
	return props.config.map((option) => {
		const result: any = {
			title: option.title,
		};

		const value = props.model[option.field];

		result.values = isArray(value) ? value : [value];

		return result;
	});
});
const isArray = (value: any) =>
	typeof value === 'object' && typeof value?.push === 'function';
</script>

<template>
	<p
		v-for="option in _config"
		class="mb-5"
	>
		{{ option.title }}

		<template v-for="value in option.values">
			<br>

			<span class="font-bold">
				{{
					typeof value === "object" && value !== null && value.name
						? value.name
						: value
				}}
			</span>
		</template>
	</p>
</template>
