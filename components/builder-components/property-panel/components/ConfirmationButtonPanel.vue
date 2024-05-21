<script lang="ts" setup>

import {DsInput} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";

const store = useCounterStore()
const {currentEditItem, updateItemInForm} = toRefs(store)

const textValueCancel = ref(currentEditItem.value.props.textCancel)
const textValueOK = ref(currentEditItem.value.props.textOk)

function handleInputTextCancel(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, textValueCancel)
}

function handleInputTextOK(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, textValueOK)
}
</script>

<template>
    <DsInput v-model="textValueCancel" label="Button cancel text" @input="handleInputTextCancel('textCancel')"/>
    <DsInput v-model="textValueOK " label="Button ok text" @input="handleInputTextOK('textOk')"/>
</template>

