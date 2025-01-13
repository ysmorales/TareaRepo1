<script lang="ts" setup>
import { DsIcon } from "~/components/DesignSystem";

const emit = defineEmits(["dragStart", "dblClick"]);

interface IProp {
  name?: string;
  keyName?: string;
  icon?: string;
  draggable: boolean;
}

const props = withDefaults(defineProps<IProp>(), {
  name: "",
  keyName: "",
  draggable: true,
});

function dragStart(nameKey: string) {
  emit("dragStart", nameKey);
}

function dblclick(nameKey: string) {
  emit("dblClick", nameKey);
}
</script>

<template>
  <div
    :class="[
      { 'opacity-50 cursor-not-allowed': !draggable },
      { 'cursor-pointer': draggable },
    ]"
    :draggable="draggable"
    class="grid grid-cols-8 items-center p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white hover:shadow-2xl border border-slate-300"
    role="option"
    tabindex="-1"
    @dragstart="dragStart(keyName)"
    @dblclick="dblclick(keyName)"
  >
    <div class="">
      <DsIcon name="bars" size="medium" />
    </div>
    <div class="vml-4 col-span-7 ml-2">
      <div class="font-bold">{{ name }}</div>
    </div>
  </div>
</template>
