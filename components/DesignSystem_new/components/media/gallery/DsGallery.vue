<script lang="ts" setup>
import { ref, computed } from 'vue';
import DsModal from '../../container/modal/DsModal.vue';
import DsIcon from '../../basic/icon/DsIcon.vue';
import { filterClass } from '../../../utils/filterClass';
import { predefinedClasses } from '../../../common/propsStyle';
import { useImageGallery } from '../../../composables/useImageGallery';
import type { IGalleryData } from './interfaces';
import images from './data';

// type IColumns = 1 | 2 | 3 | 4;
// const columnClasses = {
//   1: "grid-cols-1",
//   2: "grid-cols-2",
//   3: "grid-cols-3",
//   4: "grid-cols-4",
// };
//
// interface IImages {
//   id: number;
//   url: string;
//   description: string;
//   alt: string;
// }

const props = defineProps({
	galleryData: {
		type: Array as () => IGalleryData[],
		default: images,
	},
	rounded: {
		type: Boolean,
		default: true,
	},
	textHover: {
		type: String,
		default: 'Ver detalle',
	},
	class: {
		type: String,
		default: '',
	},
});
const {
	selectedImageIndex,
	isAtStart,
	isAtEnd,
	goToNextImage,
	goToPreviousImage,
} = useImageGallery(props.galleryData);
const filterClassComp = computed(() => {
	return filterClass(predefinedClasses, props.class);
});
const isImageLoaded = ref(false);
const showModal = ref(false);

const openModal = (index: number) => {
	selectedImageIndex.value = index;
	showModal.value = true;
};

function modalImageLoaded() {
	isImageLoaded.value = true;
}
</script>

<template>
	<div :class="['relative p-2', filterClassComp]">
		<div
			class="grid gap-4 min-w-[250px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			<button
				v-for="(image, index) in galleryData"
				id="goModal"
				:key="image.id"
				class="relative p-2"
				@click="openModal(index)"
			>
				<img
					:alt="image.alt"
					:class="['w-full h-full object-cover', { 'rounded-lg': rounded }]"
					:src="image.url"
				>
				<span
					class="rounded-lg overlay absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50 flex items-center justify-center"
				>
					<span class="text-white font-bold uppercase">{{ textHover }}</span>
				</span>
			</button>
		</div>
		<DsModal
			v-model="showModal"
			:modal-title="galleryData[selectedImageIndex]?.alt"
		>
			<div class="items-center modal bg-white rounded-lg z-20 overflow-hidden">
				<div class="flex flex-col">
					<img
						:src="galleryData[selectedImageIndex]?.url"
						alt="Selected Image"
						class="w-auto h-auto object-cover rounded-lg mb-4"
						@load="modalImageLoaded"
					>
					<p
						v-if="isImageLoaded"
						class="w-[90vw] max-w-[600px] text-justify overflow-hidden whitespace-nowrap"
					>
						<span
							:class="{
								'animate-typing': isImageLoaded,
								'opacity-0': !isImageLoaded,
							}"
							class="inline-block"
						>
							{{ galleryData[selectedImageIndex]?.description }}
						</span>
					</p>
				</div>
			</div>
			<template #footer>
				<button
					:class="{ 'opacity-50 cursor-not-allowed': isAtStart }"
					:disabled="isAtStart"
					class="mr-2 underline rounded border border-neutral-300 text-primary-500 px-3 py-2 hover:bg-primary-900 hover:text-white"
					title="Abrir en sección"
					@click="goToPreviousImage"
				>
					<DsIcon
						aria-hidden="true"
						name="angle-left"
					/>

					<!-- <i aria-hidden="true" class="las la-angle-left"></i> -->
				</button>
				<button
					:class="{ 'opacity-50 cursor-not-allowed': isAtEnd }"
					:disabled="isAtEnd"
					class="underline mr-2 rounded border border-neutral-300 text-primary-500 px-3 py-2 hover:bg-primary-900 hover:text-white"
					title="Abrir en sección"
					@click="goToNextImage"
				>
					<DsIcon
						aria-hidden="true"
						name="angle-right"
					/>

					<!-- <i aria-hidden="true" class="las la-angle-right"></i> -->
				</button>
			</template>
		</DsModal>
	</div>
</template>
