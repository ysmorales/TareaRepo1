<script lang="ts" setup>
import NavTop from "~/components/Pages/NavTop";

useHead({
  bodyAttrs: {
    class: "bg-slate-100 h-full",
  },
});
</script>
<template>
  <div class="h-full">
    <NavTop />
    <div>
      <slot />
    </div>
  </div>
</template>
