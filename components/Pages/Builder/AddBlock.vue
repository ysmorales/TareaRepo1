<script lang="ts" setup>
import { DsIcon, DsButton } from "~/components/DesignSystem";

const props = defineProps({
  type: String,
});
const handleAdd = () => {};
</script>

<template>
  <div class="relative flex justify-center w-full">
    <div class="absolute mt-4">
      <DsButton color="tertiary" @click="handleAdd">
        <DsIcon name="plus" />
      </DsButton>
    </div>
  </div>
</template>
