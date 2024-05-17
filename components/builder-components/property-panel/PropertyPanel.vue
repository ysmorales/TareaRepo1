<script lang="ts" setup>


import {DsButton, DsInput, DsSelect, DsTextArea} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";
import {computed} from "vue";

const store = useCounterStore()
const {currentEditItem, updateItemInForm, builderItems} = toRefs(store)


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
                   v-model="currentEditItem.props[key]" :label="key"
        />
        {{ JSON.stringify(builderItems) }}
        /////////////////////////////////////
        {{ JSON.stringify(currentEditItem) }}
    </div>
</template>

