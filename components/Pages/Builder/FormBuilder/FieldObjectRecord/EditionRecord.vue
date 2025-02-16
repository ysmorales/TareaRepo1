<script lang="ts" setup>
import { ref } from "vue";
import { DsIcon } from "~/components/DesignSystem";

import EditionRecord from "./EditionRecord.vue";
import Item from "./Item.vue";

import { getTypeRecord, getItemsRecord, getSchemaDefinition } from "./utils";

interface IProp {
  refType: string;
  schema: any;
  index: number;
  defaultValues: any;
}

const props = withDefaults(defineProps<IProp>(), {
  index: 1,
});
const emit = defineEmits(["handlerUpdate"]);

const model = computed({
  get() {
    return props.defaultValues;
  },

  set(value) {
    emit("handlerUpdate", { index: props.index, newState: value });
  },
});
const handlerRemove = (index: number) => {
  model.value.splice(index, 1);
};

const handlerUpdate = ({ index, newState }) => {
  if (index) {
    model.value[index] = newState;
  } else {
    model.value = newState;
  }
};
</script>

<template>
  <div>
    <div
      v-for="(ii, index) in model"
      v-if="getTypeRecord(schema, refType) === 'array'"
    >
      <div
        class="flex items-center gap-3 bg-blue-100 mb-2 pl-2 hover:bg-blue-200"
      >
        <div>{{ index + 1 }}.</div>
        <div class="grow">
          <EditionRecord
            :refType="getSchemaDefinition(getItemsRecord(schema, refType))"
            @handlerUpdate="handlerUpdate"
            :defaultValues="ii"
            :index="index"
            :schema="schema"
          />
        </div>
        <div class="">
          <DsIcon name="clone" size="default" class="mr-4 cursor-pointer" />
          <DsIcon
            name="trash"
            size="default"
            class="mr-4 cursor-pointer"
            @click="() => handlerRemove(index)"
          />
        </div>
      </div>
    </div>
    <div v-if="getTypeRecord(schema, refType) !== 'array'">
      <Item
        v-model="model"
        :index="index"
        :schema="schema"
        :refType="refType"
      />
    </div>
  </div>
</template>
