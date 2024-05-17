<script lang="ts" setup>

import {DsInput} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";

const store = useCounterStore()
const {currentEditItem, updateItemInForm, builderItems} = toRefs(store)
const labelValue = ref(currentEditItem.value.props.label)
const placeHolderValue = ref(currentEditItem.value.props.placeholder)

const emit = defineEmits(["input", "update:modelValue"])

function handleInput(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, labelValue)

}

function handlePlaceHolder(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, placeHolderValue)

}


</script>

<template>
    <DsInput v-model="labelValue" label="Label" @input="handleInput('label')"/>
    <DsInput v-model="placeHolderValue" label="Place Holder" @input="handlePlaceHolder('placeholder')"/>
    <h1>Modificaremos {{ currentEditItem.id }}</h1>
</template>

