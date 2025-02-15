<script lang="ts" setup>
import { ref } from "vue";
import EditionRecord from "./EditionRecord.vue";
import Item from "./Item.vue";

import { getTypeRecord, getItemsRecord, getSchemaDefinition } from "./utils";

interface IProp {
  defaultValues: any;
  refType: string;
  schema: any;
  index: number;
}

const props = withDefaults(defineProps<IProp>(), {
  index: 1,
});

const fieldData = ref(props.defaultValues);

const handleAdd = () => {};
</script>

<template>
  <div>
    <div
      v-for="(ii, index) in fieldData"
      v-if="getTypeRecord(schema, refType) === 'array'"
    >
      <EditionRecord
        :refType="getSchemaDefinition(getItemsRecord(schema, refType))"
        :defaultValues="ii"
        :index="index"
        :schema="schema"
      />
    </div>
    <div v-if="getTypeRecord(schema, refType) !== 'array'">
      <Item
        :data="defaultValues"
        :index="index"
        :schema="schema"
        :refType="refType"
      />
    </div>
  </div>
</template>
