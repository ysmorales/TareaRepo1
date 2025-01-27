<script lang="ts" setup>
import { ref } from 'vue';
import { DsAccordion, DsTypography } from '../../../index';

defineProps({
	title: {
		type: String,
		default: 'Confirma tus datos',
	},
	description: {
		type: String,
		default:
      'Estás a punto de enviar tu solicitud. Por favor verifica la exactitud de tus datos. Si todo está bien dale al botón \'confirmar\'.',
	},
	user: {
		type: Object as () => { name: string; run: string; email: string },
		default: () => ({ name: 'test', run: '99999', email: 'test@gmail.com' }),
	},
});

// Paso 1: Crear una referencia al elemento del DOM
const containerRef = ref(null);
</script>

<template>
	<div
		ref="containerRef"
		class="mt-5"
	>
		<DsTypography variant="h2">
			{{ title }}
		</DsTypography>
	</div>
	<DsTypography>{{ description }} </DsTypography>
	<!-- Paso 2: Asignar la referencia al elemento que deseas enfocar -->
	<div class="mt-10">
		<DsAccordion title="Información del solicitante">
			<hr class="pb-4 border-neutral-300">
			<p class="mb-3">
				Nombre: <br>
				<strong>{{ user.name }}</strong>
			</p>
			<p class="mb-3">
				RUN: <br>
				<strong>{{ user.run }}</strong>
			</p>
			<p class="mb-3">
				Correo Electrónico: <br>
				<strong>{{ user.email }}</strong>
			</p>
		</DsAccordion>
		<slot>
			<DsAccordion
				class="mt-5"
				title="Jefatura Directa"
			>
				<hr class="pb-4 border-neutral-300">
				<p class="mb-3">
					Correo electrónico: <br>
					<strong>test@gmail.com</strong>
				</p>
			</DsAccordion>
			<DsAccordion
				class="mt-5"
				title="Franja Horaria"
			>
				<hr class="pb-4 border-neutral-300">
				<p class="mb-3">
					Horario: <br>
					<strong>8:00 a 17:00 hrs</strong>
				</p>
			</DsAccordion>
		</slot>
	</div>
</template>
