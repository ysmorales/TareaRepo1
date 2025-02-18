<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";

interface IProp {
  action?: any;
  id: string;
}

const props = withDefaults(defineProps<IProp>(), {});

const store = useBuilderStore();
const {
  handlerChangeNumChildrensSections,
  handlerChangeRemoveChildrensSections,
} = toRefs(store);

const dicActions = {
  addChildren: ({ total }) => {
    handlerChangeNumChildrensSections.value({ id: props.id }, total);
  },
  removeChildren: ({ index }) => {
    handlerChangeRemoveChildrensSections.value({ id: props.id }, index);
  },
};

const handlerAction = (newVal) => {
  console.log("hanlder change to slot", { newVal });
  if (dicActions[newVal.action]) {
    dicActions[newVal.action](newVal.params);
  }
};

watch(() => props.action, handlerAction);

onMounted(() => {
  handlerAction(props.action);
});
</script>

<template>
  <span />
</template>
