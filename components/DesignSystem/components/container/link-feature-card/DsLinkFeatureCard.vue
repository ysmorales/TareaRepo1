<script lang="ts" setup>
defineProps({
	href: {
		type: String,
		default: '#',
	},
	title: {
		type: String,
		default: 'Ir al artículo',
	},
	mainText: {
		type: String,
		default: 'Beneficios y pensiones',
	},
	icon: {
		type: String,
		default: 'arrow-right',
	},
});
</script>

<template>
	<article class="border overflow-hidden rounded-lg flex flex-col">
		<header class="p-4 flex items-top justify-between">
			<a
				:href="href"
				:title="title"
			>
				<h3 class="mb-0">{{ mainText }}</h3>
			</a>
			<a
				:href="href"
				class="text-xl"
				tabindex="-1"
			>
				<i
					:class="'las la-' + icon"
					aria-hidden="true"
				/>
			</a>
		</header>
	</article>
</template>
