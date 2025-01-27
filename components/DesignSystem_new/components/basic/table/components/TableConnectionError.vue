<script lang="ts" setup>
import DsTypography from '../../typography/DsTypography.vue';
</script>

<template>
	<div class="flex items-center justify-center bg-gray-100">
		<div class="flex flex-col items-center justify-center p-6">
			<div class="text-red-500 text-6xl">
				<i class="las la-exclamation-triangle" />
			</div>
			<DsTypography
				class="mt-4 text-2xl font-semibold text-gray-700"
				variant="h2"
			>
				Error de Conexión
			</DsTypography>
			<DsTypography
				class="mt-2 text-gray-500"
				variant="p"
			>
				Lo sentimos, no pudimos conectar con nuestros servidores en este
				momento. Por favor, verifica tu conexión a internet e inténtalo de
				nuevo.
			</DsTypography>
		</div>
	</div>
</template>
