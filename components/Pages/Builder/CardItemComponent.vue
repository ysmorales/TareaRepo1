<script lang="ts" setup>
import { DsIcon } from "~/components/DesignSystem";

const emit = defineEmits(["dblClick", "handlerClick"]);

interface IProp {
  name?: string;
  keyName?: string;
  icon?: string;
  draggable: boolean;
  mode: string;
  active: boolean;
}

const props = withDefaults(defineProps<IProp>(), {
  name: "",
  keyName: "",
  draggable: true,
});

const handlerBblClick = () => {
  emit("dblClick", props.keyName);
};
const handlerClick = () => {
  if (props.mode === "full") {
    emit("handlerClick", props.keyName);
  }
};
</script>

<template>
  <div
    :class="[
      { 'opacity-50 cursor-not-allowed': !draggable },
      { 'cursor-pointer': draggable },
      'flex overflow-hidden items-center p-2 bg-white hover:shadow-2xl border border-slate-300',
      mode === 'side'
        ? 'transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 '
        : '',
      {
        'bg-blue-200': active,
      },
    ]"
    :draggable="draggable"
    role="option"
    tabindex="-1"
    @dblclick="handlerBblClick"
    @click="handlerClick"
  >
    <div class="">
      <DsIcon name="bars" size="small" />
    </div>
    <div class="vml-4 col-span-7 ml-2">
      <div class="font-bold">{{ name }}</div>
    </div>
  </div>
</template>
