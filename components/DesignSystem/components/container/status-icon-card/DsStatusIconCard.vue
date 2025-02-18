<script lang="ts" setup>
defineProps({
	icon: {
		type: String,
		default: 'check-circle',
	},
	mainText: {
		type: String,
		default:
      'Pensión ex cajas de previsión para madres de hijos de afiliación no matrimonial - Estado',
	},
	title: {
		type: String,
		default: 'Ir al artículo',
	},
	href: {
		type: String,
		default: '#',
	},
	textInfo: {
		type: String,
		default: 'AD015 Caja de Previsión de la Defensa Nacional',
	},
});
</script>

<template>
	<article class="border overflow-hidden rounded-lg mb-2 flex flex-row h-auto">
		<header class="p-4 text-white w-full flex">
			<div class="mr-2">
				<i :class="`las la-${icon} text-success-500 text-2xl`" />
			</div>
			<div>
				<a
					:href="href"
					:title="title"
				><h3>
					{{ mainText }}
				</h3></a>
				<p class="text-primary-500">
					{{ textInfo }}
				</p>
			</div>
		</header>
	</article>
</template>
