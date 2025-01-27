<script lang="ts" setup>
import DsTag from '../../../../DesignSystem/components/basic/tag/DsTag.vue';
import DsTypography from '../../../../DesignSystem/components/basic/typography/DsTypography.vue';

defineProps({
	cardData: {
		type: Object as () => {
			name: string;
			run: string;
			email: string;
			directLeadershipEmail: string;
			rangeType: string;
			idSolicitud: string;
			date: string;
			status: string;
		},
		default: {
			name: 'Alex Rivera',
			run: '12345678-9',
			email: 'alex.rivera@example.com',
			directLeadershipEmail: 'leadership@example.com',
			rangeType: '08:00 - 16:00',
			idSolicitud: 'REQ123456',
			date: '2023-04-15',
			status: 'Pendiente',
		},
	},
});
</script>

<template>
	<div class="p-5 border border-primary-500 bg-white rounded-lg mt-5">
		<DsTypography variant="h2">
			Detalle de la solicitud
		</DsTypography>
		<DsTypography>Comprobante solicitud cambio de franja horaria</DsTypography>
		<hr class="py-3">
		<DsTypography variant="h2">
			Solicitante
		</DsTypography>
		<DsTypography class="mb-3">
			<div class="flex flex-col">
				<strong>{{ cardData?.name }}</strong>
				<strong>{{ cardData?.run }}</strong>
			</div>
		</DsTypography>
		<DsTypography class="mb-3">
			Correo electrónico: <br>
			<strong>{{ cardData?.email }}</strong>
		</DsTypography>
		<DsTypography
			class="mt-5"
			variant="h2"
		>
			Jefatura directa
		</DsTypography>
		<DsTypography class="mb-3">
			Correo electrónico: <br>
			<strong>{{ cardData?.directLeadershipEmail }}</strong>
		</DsTypography>
		<DsTypography
			class="mt-5"
			variant="h2"
		>
			Franja horaria
		</DsTypography>
		<DsTypography class="mb-3">
			Horario: <br>
			<strong>{{ cardData?.rangeType }} hrs</strong>
		</DsTypography>
		<DsTypography
			class="mt-5"
			variant="h2"
		>
			Seguimiento
		</DsTypography>
		<DsTypography class="mb-3">
			Nº solicitud: <br>
			<strong>{{ cardData?.idSolicitud }}</strong>
		</DsTypography>
		<DsTypography class="mb-3">
			Fecha de solicitud: <br>
			<strong>{{ cardData?.date }}</strong>
		</DsTypography>
		<DsTypography>
			Estado: <br>
			<DsTag
				:text="cardData?.status"
				color="primary"
			/>
		</DsTypography>
	</div>
</template>
