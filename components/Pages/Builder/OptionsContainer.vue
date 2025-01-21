<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import IconArea from "./IconArea.vue";

const store = useBuilderStore();
const {
  itemOnSelect,
  handlerItemOnSelect,
  handlerRemoveItem,
  handlerCloneItem,
} = toRefs(store);

interface IProp {
  type?: string;
  id: string;
}

const props = withDefaults(defineProps<IProp>(), {
  type: "module",
});

const handlerAction = (mode) => {
  console.log({ mode });
  if (mode === "trash") {
    handlerRemoveItem.value(props);
  }
  if (mode === "clone") {
    handlerCloneItem.value(props);
  }
};
</script>

<template>
  <div
    :class="[
      'group',
      {
        'col-span-12': type === 'row',
      },
    ]"
  >
    <div
      :class="[
        'relative border hover:border-blue-500 cursor-pointer z-10 hover:shadow-lg',
        'border-transparent group-hover:border-blue-500',
      ]"
    >
      <div v-if="type !== 'module'">{{ type }} {{ id }}</div>
      <slot></slot>

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
  <!-- </template>
  </draggable> -->
</template>
