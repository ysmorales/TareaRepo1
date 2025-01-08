<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
const store = useBuilderStore();
const { changeModal, modalType, currentEditItem } = toRefs(store);

const showModal = computed(
  () =>
    currentEditItem?.value?.component?.__name && modalType.value === "property"
);

const handlerClose = () => {
  changeModal.value("full");
};

onMounted(() => {});
</script>

<template>
  <div>dsfsdf sdfsdf sdf dsfsdfsdf</div>

  <transition name="slide">
    <div
      v-show="showModal"
      class="h-full flex items-center justify-end z-50 min-w-[100%] right-0"
    >
      <div
        :class="showModal ? 'translate-x-0' : 'translate-x-full'"
        class="bg-white w-full h-full p-6 overflow-auto transform transition-all duration-500 ease-in-out border border-gray-200 shadow-lg"
      >
        <div class="flex flex-col border-b pb-4 mb-4">
          <div class="flex justify-between items-center">
            <DsTypography class="text-lg font-semibold">
              {{ currentEditItem?.component?.__name }}
            </DsTypography>
            <button
              class="text-gray-400 hover:text-gray-500"
              @click="handlerClose"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div>{{ currentEditItem }}</div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import "assets/css/transition-drawer.css";
</style>
