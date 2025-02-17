<script lang="ts" setup>
import { ref } from "vue";
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

const emit = defineEmits(["handlerUpdate, onHandlerUpdateConfig"]);
const theSchema = computed(() => {
  return data.value?.schema;
});

const fieldData = ref(
  isNotEmpty(props.defaultValues)
    ? props.defaultValues
    : props.fieldInfo?.default
);

const getIType = () => props.fieldInfo.control.iType;

const handlerUpdate = ({ index, newState, newConfig }) => {
  if (index) {
    fieldData.value[index] = newState;
  } else {
    fieldData.value = newState;
  }
};

const handlerUpdateSettings = (newConfig) => {
  console.log(newConfig, "aquiii");
  emit("handlerUpdateConfig", newConfig);
};

watch(
  fieldData,
  (newState) => {
    emit("handlerUpdate", newState);
  },
  { deep: true }
);
</script>

<template>
  <div class="m-2 mt-0 max-h-[73vh] min-h-[400px]">
    <div v-if="status === 'pending' && !theSchema?.$schema">loading ...</div>
    <EditionRecord
      v-if="theSchema?.$schema || status !== 'pending'"
      :schema="theSchema"
      :default-values="fieldData"
      :refType="getIType()"
      @handlerUpdate="handlerUpdate"
      :handlerUpdateSettings="handlerUpdateSettings"
    />
  </div>
</template>
