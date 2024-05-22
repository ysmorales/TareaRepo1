<script lang="ts" setup>
import {DsInput, DsSelect} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";

const store = useCounterStore()
const {currentEditItem, updateItemInForm} = toRefs(store)
const labelValue = ref(currentEditItem.value.props.label)
const placeHolderValue = ref(currentEditItem.value.props.placeholder)
const sizeValue = ref(currentEditItem.value.props.size)

const emit = defineEmits(["input", "update:modelValue"])

function handleInput(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, labelValue)

}

function handlePlaceHolder(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, placeHolderValue)

}

async function handleSize(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, sizeValue)

}

</script>

<template>
    <DsInput v-model="labelValue" label="Label" @input="handleInput('label')"/>
    <DsInput v-model="placeHolderValue" label="Place Holder" @input="handlePlaceHolder('placeholder')"/>
    <DsSelect
        v-model="sizeValue"
        :option="[{value:'small',text:'Small'},{value:'normal',text:'Normal'},{value:'medium',text:'Medium'},{value:'large',text:'Large'},{value:'full',text:'Full'}]"
        label="Size"
        placeholder="Select size"
        @select="handleSize('size')"/>
</template>

