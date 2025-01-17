<script lang="ts" setup>
import draggable from "vuedraggable";
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
  idm: string;
  ids: string;
  idr: string;
  idc: string;
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

const getId = () => props.idm ?? props.idc ?? props.idr ?? props.ids;
</script>

<template>
  <!-- <draggable
    class="list-group"
    :list="[{ id: idm }]"
    group="people"
    itemKey="id"
  >
    <template #item="{ element, index }"> -->
  <div class="group">
    <div
      :class="[
        'relative border hover:border-blue-500 cursor-pointer z-10 mb-3 hover:shadow-lg',
        'border-transparent group-hover:border-blue-500',
      ]"
    >
      <slot>some</slot>

      <div class="absolute inset-0">
        <IconArea :index="`idf${getId()}`" @handlerAction="handlerAction" />
      </div>

      <div
        @click="() => handlerItemOnSelect(getId())"
        :class="[
          'absolute inset-0 ',
          {
            'bg-blue-500 opacity-20 border border-blue-500 ':
              itemOnSelect === getId(),
          },
        ]"
      ></div>
    </div>
  </div>
  <!-- </template>
  </draggable> -->
</template>
