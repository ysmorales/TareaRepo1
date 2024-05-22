<script lang="ts" setup>

import {DsInput, DsSelect} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";
import {colorData} from "~/components/builder-components/property-panel/components/data/data";

const store = useCounterStore()
const {currentEditItem, updateItemInForm} = toRefs(store)

const textValueCancel = ref(currentEditItem.value.props.textCancel)
const textValueOK = ref(currentEditItem.value.props.textOk)
const colorValueCancel = ref(currentEditItem.value.props.colorCancel)
const colorValueOk = ref(currentEditItem.value.props.colorOk)

function handleInputTextCancel(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, textValueCancel)
}

function handleInputTextOK(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, textValueOK)
}

function handleChangeColorCancel(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, colorValueCancel)
}

function handleChangeColorOk(key: string) {
    updateItemInForm.value(currentEditItem.value.id, key, colorValueOk)
}


</script>

<template>
    <DsInput v-model="textValueCancel" label="Button cancel text" @input="handleInputTextCancel('textCancel')"/>
    <DsInput v-model="textValueOK " label="Button ok text" @input="handleInputTextOK('textOk')"/>
    <DsSelect
        v-model="colorValueCancel"
        :option="colorData"
        label="Color button cancel"
        @select="handleChangeColorCancel('colorCancel')"/>
    <DsSelect v-model="colorValueOk" :option="colorData" label="Color button ok"
              @select="handleChangeColorOk('colorOk')"/>
</template>

