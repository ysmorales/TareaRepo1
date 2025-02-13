<script lang="ts" setup>
import { ref, defineExpose } from "vue";
import { useBuilderStore } from "~/stores/builderStore";
import ItemField from "./ItemField.vue";
import AddFieldOptions from "../addFieldOptions.vue";

interface IProp {
  validationsDefault: any;
}

const props = withDefaults(defineProps<IProp>(), {
  validationsDefault: [],
});

const store = useBuilderStore();
const { itemOnSelect, itemsPageList } = toRefs(store);

const getFormFields = () =>
  getFormFieldsNodes(itemsPageList.value, itemOnSelect.value.id);

const listFieldsOptions = getFormFields().map((d) => ({
  value: d.id,
  text: `${getNameComponentKey(d?.item)}.${getNameFieldFormNode(d)}`,
}));

const listValidations = ref(props.validationsDefault);

const handleAdd = () => {
  const fieldsFound = getFormFields();
  const id = isNotEmpty(fieldsFound) ? fieldsFound[0].id : null;
  if (isNotEmpty(id)) {
    listValidations.value.push({
      id,
      validation: "isNotEmpty",
    });
  }
};

const handlerRemove = (index) => {
  listValidations.value.splice(index, 1);
};

defineExpose({
  listValidations,
});
</script>

<template>
  <div class="m-2 mt-0 min-h-[400px]">
    <div :key="`t-${index}`" v-for="(ii, index) in listValidations">
      <ItemField
        :info="ii"
        :fields="listFieldsOptions"
        :index="index"
        @remove="handlerRemove"
        :key="`v-${index}`"
      />
    </div>
    <AddFieldOptions label="Add validation" @add="handleAdd" />
  </div>
</template>
