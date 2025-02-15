<script lang="ts" setup>
import { DsInput, DsSelect, DsCheck, DsIcon } from "~/components/DesignSystem";
import FieldLayout from "../fieldLayout.vue";
import Field from "./Field.vue";

import { getSchemaInfoRecord } from "./utils";

interface IProp {
  schema: any;
  index: number;
  data: any;
  refType: string;
}

const props = withDefaults(defineProps<IProp>(), {
  index: 1,
});
const emit = defineEmits(["remove", "change"]);

const handlerRemove = () => {
  emit("remove", props.index);
};

const properties = getSchemaInfoRecord(props.schema, props.refType).properties;
</script>

<template>
  <div class="flex items-center gap-3 bg-blue-100 mb-2 pl-2">
    <div>{{ index + 1 }}.</div>
    <div class="grow">
      <div v-for="ii in Object.keys(properties)">
        <Field
          :type="properties[ii].type"
          :valueField="data[ii]"
          :fieldKey="ii"
        />
      </div>
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
