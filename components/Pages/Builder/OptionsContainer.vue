<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import IconArea from "./IconArea.vue";

const store = useBuilderStore();
const {
  itemOnSelect,
  handlerItemOnSelect,
  handlerRemoveItem,
  handlerCloneItem,
  handlerCopyItem,
  handlerPasteItem,
} = toRefs(store);

interface IProp {
  type?: string;
  id: string;
  areaMode: string;
  settings: any;
  idx: number;
}

const props = withDefaults(defineProps<IProp>(), {
  type: "module",
});

const containerUpper = {
  module: "column",
  column: "row",
  row: "section",
};

const handlerAction = (mode) => {
  console.log({ mode });
  if (mode === "trash") {
    handlerRemoveItem.value(props);
  }
  if (mode === "clone") {
    handlerCloneItem.value(props);
  }
  if (mode === "copy") {
    handlerCopyItem.value({
      id: props.id,
      type: containerUpper[props.type] ?? "section",
    });
  }
  if (mode === "paste") {
    handlerPasteItem.value(props);
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
      <div
        v-if="type !== 'module' && areaMode === 'dragable'"
        class="text-center"
      >
        {{ type }} {{ idx }}
      </div>
      <slot></slot>

      <div
        class="absolute inset-0"
        v-if="areaMode === 'dragable' || type === 'module'"
      >
        <IconArea
          :type="type"
          :id="id"
          :index="`idf${id}`"
          @handlerAction="handlerAction"
        />
      </div>

      <div
        @click="() => handlerItemOnSelect(id, type)"
        :class="[
          'absolute inset-0 ',
          {
            'bg-blue-500 opacity-20 border border-blue-500':
              itemOnSelect?.id === id,
          },
        ]"
      ></div>
    </div>
  </div>
  <!-- </template>
  </draggable> -->
</template>
