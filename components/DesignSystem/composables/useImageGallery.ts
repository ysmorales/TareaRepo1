// useImageGallery.ts
import { ref, computed } from "vue";

export function useImageGallery(images: any) {
  const selectedImageIndex = ref(0); // iniciando con la primera imagen
  const isAtStart = computed(() => selectedImageIndex.value === 0);
  const isAtEnd = computed(
    () => selectedImageIndex.value === images.length - 1,
  );

  // const selectImage = (index: number) => {
  //   if (index >= 0 && index < images.length) {
  //     selectedImageIndex.value = index;
  //   }
  // };

  const goToNextImage = () => {
    if (!isAtEnd.value) selectedImageIndex.value += 1;
  };

  const goToPreviousImage = () => {
    if (!isAtStart.value) selectedImageIndex.value -= 1;
  };

  return {
    selectedImageIndex,
    isAtStart,
    isAtEnd,
    goToNextImage,
    goToPreviousImage,
  };
}
