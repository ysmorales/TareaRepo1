<script lang="ts" setup>
import { DsIcon } from "~/components/DesignSystem";
import AddFieldOptions from "../addFieldOptions.vue";
import EditionRecord from "./EditionRecord.vue";
import Item from "./Item.vue";

import { getTypeRecord, getItemsRecord, getSchemaDefinition } from "./utils";

interface IProp {
  refType: string;
  schema: any;
  index?: number;
  defaultValues: any;
  isArray: boolean;
  fieldInfo: any;
  path: number;
  handlerUpdateSettings: any;
}

const props = withDefaults(defineProps<IProp>(), {
  index: 0,
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
const handleAdd = () => {
  const some = { some: "some" };
  try {
    model.value.push(some);
  } catch (error) {
    model.value = [some];
  }
};

const handlerUpdate = ({ index, newState }) => {
  if (newState) {
    if (index) {
      model.value[index] = newState;
    } else {
      model.value = newState;
    }
  }
};
</script>

<template>
  <div
    class="border border-gray-300 shadow-md rounded-md mt-1 p-1 hover:border-gray-400"
  >
    <div v-if="getTypeRecord(schema, refType) === 'array' || isArray">
      <div v-for="(ii, idx) in model">
        <div class="flex items-center gap-3 bg-blue-100 mb-2 pl-2">
          <div>{{ idx + 1 }}.</div>
          <div class="grow">
            <EditionRecord
              :refType="
                isArray
                  ? refType
                  : getSchemaDefinition(getItemsRecord(schema, refType))
              "
              @handlerUpdate="(newD) => handlerUpdate({ index: idx, ...newD })"
              :handlerUpdateSettings="handlerUpdateSettings"
              :defaultValues="ii"
              :index="idx"
              :path="(path ?? []).concat([idx])"
              :parent="index"
              :schema="schema"
              :fieldInfo="fieldInfo"
            />
          </div>
          <div class="mr-2">
            <DsIcon name="clone" size="default" class="cursor-pointer" />
            <DsIcon
              name="trash"
              size="default"
              class="ml-2 cursor-pointer"
              @click="() => handlerRemove(idx)"
            />
          </div>
        </div>
      </div>

      <AddFieldOptions label="Add item" @add="handleAdd" />
    </div>
    <div v-if="getTypeRecord(schema, refType) === 'object' && !isArray">
      <Item
        v-model="model"
        :schema="schema"
        :refType="refType"
        :fieldInfo="fieldInfo"
        :path="path ?? []"
        :index="index"
        :handlerUpdateSettings="handlerUpdateSettings"
      />
    </div>
  </div>
</template>
