<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
const store = useBuilderStore();

const { itemOnSelect } = toRefs(store);

interface IProp {
  type?: string;
  settings?: any;
  id: string;
}

const props = withDefaults(defineProps<IProp>(), {});
</script>

<template>
  <div
    :class="[
      'containerd',
      type,
      type === 'column' ? settings.columnSpan ?? 'col-span-12' : '',
      {
        'bg-blue-100 border-zinc-500': itemOnSelect?.id === id,
      },
    ]"
  >
    <slot>some </slot>
  </div>
</template>
