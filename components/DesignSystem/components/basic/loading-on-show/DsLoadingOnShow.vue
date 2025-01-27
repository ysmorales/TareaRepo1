<script lang="ts" setup>
interface IProp {
  id: string;
}

const props = withDefaults(defineProps<IProp>(), {
  id: "lazyLoaderInterceptor",
});

const show = ref(false);

onMounted(async () => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        show.value = true;
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);

  let target = document.querySelector(`#${props.id}`);
  observer.observe(target);
});
</script>

<template>
  <div :id="id">
    <div v-if="show">
      <slot></slot>
    </div>
  </div>
</template>
