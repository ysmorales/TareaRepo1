<script lang="ts" setup>
defineProps<{
  show?: boolean;
  handlerClose?: () => void;
}>();
</script>

<template>
  <div
    v-if="show"
    class="fixed space-y-1 w-fit rounded shadow bg-white z-50 lg:hidden w-full fixed w-full z-10 h-full top-0 left-0 overflow-y-scroll"
  >
    <div class="bg-white w-full h-full space-y-1 rounded-md">
      <div class="flex justify-end pr-4 pt-4">
        <DsButton color="tertiary" class="border-none" @click="handlerClose">
          Cerrar X
        </DsButton>
      </div>
      <slot />
    </div>
  </div>
</template>
