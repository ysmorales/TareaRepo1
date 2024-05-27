<script lang="ts" setup>
import {computed} from 'vue';


const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    }
})
const emits = defineEmits(['update:modelValue'])

const model = computed({
    get() {
        return props.modelValue;
    },

    set(value) {
        emits("update:modelValue", value);
    },
});
</script>
<template>
    <div class="mt-2">
        <div class="flex items-center justify-between">
            <label :for="id" class="text-gray-700 font-medium">{{ label }}</label>
            <input :id="id" v-model="model" :value="value" class="form-radio h-5 w-5 text-blue-500" type="radio">
        </div>
    </div>
</template>

