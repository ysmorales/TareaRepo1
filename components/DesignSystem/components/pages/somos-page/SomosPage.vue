<script lang="ts" setup>
import {
	DsButton,
	DsIcon,
	DsLink,
	DsSimpleSideMenu,
	DsTypography,
} from '../../../index';
import DsLinkFeatureCard from '../../container/link-feature-card/DsLinkFeatureCard.vue';
import DsPanelCard from '../../container/panel-card/DsPanelCard.vue';
import type { ISimpleSideMenu } from '../../../interfaces/elements';

defineProps({
	menuData: {
		type: Array as () => ISimpleSideMenu[],
		default: () => [
			{ id: 1, text: 'Ingresar solicitud' },
			{ id: 2, text: 'Consultar' },
			{ id: 3, text: 'Bandeja de entrada' },
		],
	},
	topMenuTitle: {
		type: String,
		default: 'Cambio de Franja Horaria',
	},
	hideSideRight: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(['clickAnyMenuSide']);

function handleClickSideMenu(id: number) {
	emit('clickAnyMenuSide', id);
}
</script>

<template>
	<div class="lg:flex w-full">
		<div class="w-full lg:w-1/5 px-2">
			<div class="py-2 flex justify-between lg:hidden items-center">
				<div>
					Estás en la aplicación:
					<strong><span> {{ topMenuTitle }}</span></strong>
				</div>

				<DsButton
					class="p-2 border-0 flex items-center text-dark-500 bg-white hover:text-dark-500 hover:bg-white"
				>
					Menú
					<DsIcon
						class="ml-2"
						name="bars"
					/>
				</DsButton>
			</div>
			<DsSimpleSideMenu
				:data="menuData"
				class="hidden lg:block"
				@click="handleClickSideMenu"
			/>
		</div>
		<div
			class="w-full block md:flex bg-[#f2f9ff] border border-l-[#cfeafe] border-b-0 border-r-0 border-t-1 border-t-[#cfeafe] lg:border-t-0"
		>
			<div
				:class="hideSideRight ? 'md:w-full' : 'md:w-2/3'"
				class="md:w-2/3 px-5 py-3"
			>
				<slot> (Contenido main de la página)</slot>
			</div>
			<div
				v-if="!hideSideRight"
				class="border-t border-[#cfeafe] md:border-none md:w-1/3 md:flex flex-col py-6 md:py-2 md:my-2"
			>
				<slot name="right-side">
					<div class="mx-3">
						<DsButton
							class="justify-center mb-5 rounded-full hover:text-primary-500 text-dark-500 w-full text-center inline"
							color="secondary"
						>
							Ir a la Intranet anterior
						</DsButton>
					</div>
					<div class="flex justify-between mx-4 mb-2">
						<DsTypography variant="h3">
							Noticias regionales
						</DsTypography>
						<DsLink> Ver todas</DsLink>
					</div>
					<div class="mx-4 mb-6">
						<DsLinkFeatureCard class="mb-2" />
						<DsLinkFeatureCard class="mb-2" />
						<DsPanelCard />
					</div>
					<div class="flex justify-between mx-4 mb-2">
						<DsTypography variant="h3">
							Enlaces
						</DsTypography>
						<DsLink> Ver todas</DsLink>
					</div>
					<div class="mx-4">
						<DsLinkFeatureCard class="mb-2" />
						<DsLinkFeatureCard class="mb-2" />
						<DsLinkFeatureCard class="mb-2" />
						<DsLinkFeatureCard class="mb-2" />
						<DsLinkFeatureCard class="mb-2" />
						<DsLinkFeatureCard class="mb-2" />
					</div>
				</slot>
			</div>
		</div>
	</div>
</template>
