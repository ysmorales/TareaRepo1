<script lang="ts" setup>
/**
 * ------------------------------------------
 *	Components
 * ------------------------------------------
 */

import DsTypography from '../../../components/basic/typography/DsTypography.vue';
import DsLink from '../../../components/navigation/link/DsLink.vue';
import DsButton from '../../../components/basic/button/DsButton.vue';
import DsAlert from '../../../components/basic/alert/DsAlert.vue';

/**
 * ------------------------------------------
 *	Types
 * ------------------------------------------
 */
import type { IUser } from './types';

interface IEmit {
	(e: 'submit', v: IUser): void;
}

interface IProp {
	value?: IUser;
	title: string;
}

/**
 * ------------------------------------------
 *	Utils
 * ------------------------------------------
 */

const $emit = defineEmits<IEmit>();
const $props = defineProps<IProp>();
</script>

<template>
	<div class="form-sector mt-5">
		<header class="mb-5">
			<DsTypography variant="h2">
				{{ title }}
			</DsTypography>
		</header>
		<DsAlert
			role="alert"
			text="Felipe (RUN 13.432.586-2), la visita ha sido recepcionada, pronto nos
        pondremos en contacto para confirmar la fecha en los próximos XX días
        hábiles."
			title="Su solicitud de visita ha sido recepcionada"
			type="success"
		/>
		<DsAlert
			text="Importante: En el momento de la visita debe tener
      físicamente la cédula de identidad del apoderado y la cédula de identidad
      del pensionado vigentes."
		/>
		<DsAlert
			text="Su número de atención es el AB-09082019, por favor imprima este
        comprobante o verifique su correo electrónico donde recibirá la fecha de
        confirmación, ante cualquier consulta comuníquese al teléfono
        101."
		/>
		<div class="my-5">
			<DsTypography variant="h3">
				Detalle
			</DsTypography>

			<div class="border rounded-lg p-4">
				<DsTypography class="mb-4">
					Número de solicitud
					<strong class="block">456355345-67</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Tipo de solicitud
					<strong class="block">Agendar una visita para el trámite en residencia de
						pensionado</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Estado actual
					<strong class="block">Solicitud ingresada</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Nombre, RUN del pensionado y Caja<br>
					<strong class="block">Alberto Martinez Guzman</strong>
					<strong class="block">5.987.678-9</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Nombre, RUN del pensionado y Caja<br>
					<strong class="block">Alberto Martinez Guzman</strong>
					<strong class="block">5.987.678-9</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Solicitante de la visita<br>
					<strong class="block">Familiar directo</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Motivo fundado<br>
					<strong class="block">Pensionado con enfermedades graves</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Teléfono del solicitante<br>
					<strong class="block">+5699456478</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Teléfono del pensionado<br>
					<strong class="block">+5698364937</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Dirección donde se debe realizar la visita (Residencia particular)<br>
					<strong class="block">Del Rodeo, #334, Parque Casas de lo Ovalle, Quilicura, Santiago,
						Región Metropolitana.</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Tipo de parentesco con el pensionado<br>
					<strong class="block">Sobrino</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Solicitud presentada a nombre de un tercero<br>
					<strong class="block">Magdalena Martinez</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Correo electrónico del apoderado que recibirá notificaciones<br>
					<strong class="block">felipe@gmail.com</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Oficina IPS/ChileAtiende encargada de coordinar visita<br>
					<strong class="block">Oficina ChileAtiende Peñalolen</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Fecha de resolución<br>
					<strong class="block">13-12-2021</strong>
				</DsTypography>
				<DsTypography class="mb-4">
					Archivo digital<br>
					<strong class="block">
						<DsLink>DescargarPDF333</DsLink>
					</strong>
				</DsTypography>
			</div>
		</div>
		<hr class="my-5">
		<DsTypography
			class="mb-5"
			variant="p"
		>
			Si necesita más información por favor visite una de
			<DsLink>nuestras sucursales IPS/ChileAtiende</DsLink>
			, o llame al 101.
		</DsTypography>
		<div class="field cont-btn">
			<DsButton color="tertiary">
				Volver a la ficha
			</DsButton>
		</div>
	</div>
</template>
