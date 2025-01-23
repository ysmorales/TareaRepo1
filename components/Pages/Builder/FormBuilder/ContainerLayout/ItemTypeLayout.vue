<script lang="ts" setup>
interface IProp {
  data: any;
}

const props = withDefaults(defineProps<IProp>(), {});

const emit = defineEmits(["onSelect"]);

const handlerClick = () => {
  emit("onSelect", props.data);
};
</script>

<template>
  <div
    :class="[
      `grid grid-cols-${data?.row ?? '12'} gap-1 w-full`,
      data.extraClass,
    ]"
    @click="handlerClick"
  >
    <div
      v-if="!Array.isArray(data.mode)"
      v-for="columnOption in data.mode.split(',')"
      :class="['p-2 bg-slate-200 ', `col-span-${columnOption}`]"
    ></div>
    <div
      v-if="Array.isArray(data.mode)"
      v-for="columnOption in data.mode"
      :class="[columnOption, 'p-1 bg-slate-200']"
    ></div>
  </div>
</template>
