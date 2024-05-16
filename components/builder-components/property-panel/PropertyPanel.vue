<script lang="ts" setup>


import {DsInput} from "~/components/DesignSystem";
import type {IItemBuilder} from "~/interfaces/interfaces";
import {computed} from "vue";

const props = defineProps({
    modelValue: {
        type: Object as () => IItemBuilder[],
        default: [],
    }
})

const emit = defineEmits(["input", "update:modelValue"])

function handlePropertyInput(event: Event) {
    emit("input", event)
}

const inputComponent = computed(() => {
    return props.modelValue.length > 0 ? props.modelValue[0].props?.label : undefined
})

// const model = computed({
//     get() {
//         return props.modelValue;
//     },
//
//     // set(value) {
//     //     emit("update:modelValue", value);
//     // },
// });
</script>

<template>
    <DsInput v-model="inputComponent" label="label" @input="handlePropertyInput"/>
</template>

