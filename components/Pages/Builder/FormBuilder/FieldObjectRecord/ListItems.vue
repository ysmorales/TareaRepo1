<script lang="ts" setup>
import { ref } from "vue";
import AddFieldOptions from "../addFieldOptions.vue";
import EditionRecord from "./EditionRecord.vue";

interface IProp {
  defaultValues: any;
  fieldInfo: any;
}

const props = withDefaults(defineProps<IProp>(), {});

const { data, status } = await useAsyncData(
  "tschema",
  () => $fetch("/api/tschema"),
  {
    lazy: true,
  }
);

const theSchema = computed(() => {
  return data.value?.schema;
});

const fieldData = ref(
  isNotEmpty(props.defaultValues)
    ? props.defaultValues
    : props.fieldInfo?.default
);

const getIType = () => props.fieldInfo.control.iType;

const handleAdd = () => {
  fieldData.value.push({});
};

const handlerUpdate = ({ index, newState }) => {
  if (index) {
    fieldData.value[index] = newState;
  } else {
    fieldData.value = newState;
  }
};
const emit = defineEmits(["handlerUpdate"]);

watch(
  fieldData,
  (newState) => {
    emit("handlerUpdate", newState);
  },
  { deep: true }
);
</script>

<template>
  <div class="m-2 mt-0 min-h-[400px]">
    <div v-if="status === 'pending' && !theSchema?.$schema">loading ...</div>
    <EditionRecord
      v-if="theSchema?.$schema || status !== 'pending'"
      :schema="theSchema"
      :default-values="fieldData"
      :index="1"
      :refType="getIType()"
      @handlerUpdate="handlerUpdate"
    />
    <AddFieldOptions label="Add row" @add="handleAdd" />
  </div>
</template>
