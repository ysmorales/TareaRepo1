<script lang="ts" setup>

import type {IItemBuilder} from "~/interfaces/interfaces";
import {computed} from "vue";
import {DsButton, DsInput, DsSelect, DsTextArea} from "~/components/DesignSystem";


const props = defineProps({
    // modelValue: {
    //     type: Object as () => IItemBuilder[],
    //     default: [],
    // },
    currentEditItem: {
        type: Object as () => IItemBuilder,
        required: true
    },
})
const components: { [key: string]: any } = {
    DsInput,
    DsTextArea,
    DsButton,
    DsSelect
}

const emit = defineEmits(["input", "update:modelValue"])

function handlePropertyInput(event: Event, key: string) {
    emit("input", {event, key})
}

// const inputComponent = computed(() => {
//     return props.modelValue.length > 0 ? props.modelValue[0].props?.label : undefined
// })

// const componentType= computed(() => {
//     switch (props.currentEditItem.name) {
//         case 'DsInput':
//             return 'DsInput'
//         case 'DsSelect':
//             return 'DsSelect'
//         case 'DsTextArea':
//             return 'DsTextArea'
//         default:
//             return 'DsInput'
//
//     }
//     return props.currentEditItem.props?.label&&'DsInput'
// })
</script>

<template>
    <div>
        <component :is="components['DsInput']" v-for="(value, key) in currentEditItem.props"
                   :label="key" :value="value"
                   @input="(event: Event) => handlePropertyInput(event, key)"/>
        {{ JSON.stringify(currentEditItem) }}
    </div>
</template>

