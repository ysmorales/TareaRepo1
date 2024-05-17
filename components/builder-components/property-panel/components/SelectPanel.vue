<script lang="ts" setup>

import {DsInput} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";

const store = useCounterStore()
const {currentEditItem, updateItemInForm} = toRefs(store)
const labelValue = ref(currentEditItem.value.props.label)

const emit = defineEmits(["input", "update:modelValue"])

function handleInput(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, labelValue)

}

</script>

<template>
    <DsInput v-model="labelValue" label="Label" @input="handleInput('label')"/>
</template>

