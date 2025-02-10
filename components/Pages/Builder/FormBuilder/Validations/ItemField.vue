<script lang="ts" setup>
import { DsSelect, DsIcon } from "~/components/DesignSystem";

interface IProp {
  info: any;
  index: number;
  fields: any;
}

const props = withDefaults(defineProps<IProp>(), {
  info: {},
  fields: [],
  index: 1,
});
const emit = defineEmits(["remove", "change"]);

const handlerRemove = () => {
  emit("remove", props.index);
};
const listValidationsOptions = [
  {
    value: "isNotEmpty",
    text: "is not empty",
  },
  {
    value: "isEmpty",
    text: "is empty",
  },
  {
    value: "isEqualTo",
    text: "is equal to",
  },
];
</script>

<template>
  <div class="flex items-center gap-3">
    <div>{{ index + 1 }}.</div>
    <div class="max-w-[200px]">
      <DsSelect
        v-model="info.field"
        :option="fields"
        label=""
        placeholder="Select field"
        class="mb-0"
      />
    </div>
    <div class="grow">
      <DsSelect
        v-model="info.validation"
        :option="listValidationsOptions"
        label=""
        placeholder="Select field"
        class="mb-0"
      />
    </div>
    <div class="">
      <DsIcon name="clone" size="default" class="mr-4 cursor-pointer" />
      <DsIcon
        name="trash"
        size="default"
        class="mr-4 cursor-pointer"
        @click="handlerRemove"
      />
    </div>
  </div>
</template>
