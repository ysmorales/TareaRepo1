<script lang="ts" setup>
import { ref } from 'vue';
import DsIcon from '../../basic/icon/DsIcon.vue';
import DsLink from '../link/DsLink.vue';
import type { MenuItem } from '../../../interfaces/elements';
import DsButton from '../../basic/button/DsButton.vue';

defineProps({
	menuItems: {
		type: Array as () => MenuItem[],
		default: [
			{ name: 'horarios', icon: 'clock', title: 'Horarios', url: '/horarios' },
			{ name: 'call', icon: 'phone', title: 'Call Center', url: '/call' },
			{ name: 'perfil', icon: 'user', title: 'Mi perfil', url: '/perfil' },
			{
				name: 'configuración',
				icon: 'cog',
				title: 'Configuración',
			},
			// ...
		],
	},
});

const menuOpen = ref(false);

const emit = defineEmits(['click']);
const handleClick = (item: MenuItem) => {
	if (!item.url) {
		emit('click', item);
	}
};
</script>

<template>
	<div class="md:w-full">
		<div class="relative w-full inline-block lg:hidden m-2">
			<button
				class="rounded-full h-10 w-10 flex items-center justify-center text-white border border-gray-300 hover:ring-0 hover:border-gray-400"
				@click="menuOpen = !menuOpen"
			>
				<DsIcon
					color="dark"
					name="plus"
					size="small"
				/>
			</button>
			<!--        Aquí va una modal -->
			<div
				v-if="menuOpen"
				class="fixed w-full h-full inset-0 flex items-center justify-center z-50 lg:hidden"
			>
				<div class="bg-white w-full h-full p-4 space-y-1 rounded-md">
					<div class="flex justify-end">
						<DsButton
							color="tertiary"
							class="border-none"
							@click="menuOpen = !menuOpen"
						>
							Cerrar X
						</DsButton>
					</div>
					<slot name="modalLink">
						<DsLink
							v-for="item in menuItems"
							:key="item.name"
							:to="item.url || 'javascript:void(0)'"
							class="flex items-center text-sm no-underline py-2 px-3"
							@click="handleClick(item)"
						>
							<DsIcon
								:name="item.icon"
								class="text-gray-500 mr-1"
								size="small"
							/>
							<span class="underline text-gray-600 hover:text-gray-950">{{
								item.title
							}}</span>
						</DsLink>
					</slot>
				</div>
			</div>
		</div>
		<nav>
			<!-- User Menu -->
			<div class="hidden lg:block w-full">
				<div
					id="dropdown_tools"
					role="menu"
				>
					<div class="flex justify-between lg:flex-row">
						<slot name="userMenuLink">
							<DsLink
								v-for="item in menuItems"
								:key="item.name"
								:title="item.title"
								:to="item.url || 'javascript:void(0)'"
								class="is-hidden-desktop"
								@click="handleClick(item)"
							>
								<DsIcon :name="item.icon" />
							</DsLink>
						</slot>
					</div>
				</div>
			</div>
		</nav>
		<!--    <div -->
		<!--      v-if="menuOpen" -->
		<!--      class="fixed w-full h-full inset-0 flex items-center justify-center z-50 md:hidden" -->
		<!--    > -->
		<!--      <div class="bg-white w-full h-full p-4 space-y-1 rounded-md">hola</div> -->
		<!--    </div> -->
	</div>
</template>
