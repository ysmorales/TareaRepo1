<script lang="ts" setup>

import {DsInput, DsSelect} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";


const store = useCounterStore()
const {currentEditItem, updateItemInForm} = toRefs(store)
const labelValue = ref(currentEditItem.value.props.label)
const sizeValue = ref(currentEditItem.value.props.size)

const emit = defineEmits(["input", "update:modelValue"])

function handleInput(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, labelValue)

}

async function handleSize(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, sizeValue)

}

</script>

<template>
    <DsInput v-model="labelValue" label="Label" @input="handleInput('label')"/>
    <DsSelect
        v-model="sizeValue"
        :option="[{value:'small',text:'Small'},{value:'normal',text:'Normal'},{value:'medium',text:'Medium'},{value:'large',text:'Large'},{value:'full',text:'Full'}]"
        label="Size"
        placeholder="Select size"
        @select="handleSize('size')"/>
</template>

