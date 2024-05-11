<script lang="ts" setup>
import { spinnerColor } from "./library";

defineProps({
  color: {
    type: String as () => "white" | "red" | "blue" | "gray",
    default: "blue",
  },
});
</script>

<template>
  <div
    :class="[
      'ml-1 w-5 h-5 border-2 border-t-4  rounded-full animate-spin',
      spinnerColor[color],
    ]"
  ></div>
</template>
