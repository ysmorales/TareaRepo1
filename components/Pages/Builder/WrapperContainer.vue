<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import IconArea from "./IconArea.vue";

const store = useBuilderStore();
const { itemOnSelect, handlerItemOnSelect } = toRefs(store);

interface IProp {
  type?: string;
  id: string;
}

const props = withDefaults(defineProps<IProp>(), {
  type: "module",
});

const handlerAction = (mode) => {
  console.log({ mode });
};
</script>

<template>
  <div class="group">
    <div
      :class="[
        'relative border hover:border-blue-500 cursor-pointer z-10 mb-3',
        'border-transparent group-hover:border-blue-500',
      ]"
    >
      <slot>some</slot>

      <div class="absolute inset-0">
        <IconArea :index="`idf${id}`" @handlerAction="handlerAction" />
      </div>

      <div
        @click="() => handlerItemOnSelect(id)"
        :class="[
          'absolute inset-0 ',
          {
            'bg-blue-500 opacity-20 border border-blue-500 ':
              itemOnSelect === id,
          },
        ]"
      ></div>
    </div>
  </div>
</template>
