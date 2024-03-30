<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    default: "https://www.youtube.com/embed/-Z6E6UrbwZg?si=JiYbwicqPLdqq_bl",
  },
  title: {
    type: String,
    default: "Reproducir video YouTube",
  },
});
</script>

<template>
  <iframe
    :src="src"
    :title="title"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    class="w-full h-full rounded-lg border"
  ></iframe>
</template>
