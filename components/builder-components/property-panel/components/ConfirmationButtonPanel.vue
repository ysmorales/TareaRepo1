<script lang="ts" setup>

import {DsInput} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";

const store = useCounterStore()
const {currentEditItem, updateItemInForm} = toRefs(store)

const textValue = ref(currentEditItem.value.props.size)

function handleInputText(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, textValue)
}
</script>

<template>
    <DsInput v-model="textValue" label="Text" @input="handleInputText('text')"/>
</template>

