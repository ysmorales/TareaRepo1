<script lang="ts" setup>
import {ref, computed, onUnmounted} from 'vue';
import {DsIcon, DsTag, DsTypography} from "../../../../DesignSystem";
import type {ISelect} from "../../../../DesignSystem/components/form/select/interfaces";


const props = defineProps({
    modelValue: {
        type: Array as () => string[],
        default: []
    },
    options: {
        type: Array as () => ISelect[],
        default: () => [
            {text: 'Option 1', value: 'Option 1'},
            {text: 'Option 2', value: 'Option 2'},
            {text: 'Option 3', value: 'Option 3'},
        ],
    },

    label: {
        type: String,
        default: 'Default label',
    },
    class: {
        type: String,
        default: '',
    },
});

const open = ref(false);
const emit = defineEmits(['click', 'update:modelValue']);

const toggleDropdown = () => {
    open.value = !open.value;
    if (open.value) {
        window.addEventListener('click', closeDropdown);
    } else {
        window.removeEventListener('click', closeDropdown);
    }
};

const closeDropdown = (event: any) => {
    if (event.target.id !== 'options-menu') {
        open.value = false;
        window.removeEventListener('click', closeDropdown);
    }
};

const filterClassComp = computed(() => {
    return props.class;
});

onUnmounted(() => {
    window.removeEventListener('click', closeDropdown);
});

function handleClick(value: string) {
    if (props.modelValue.includes(value)) {
        const tempValue = props.modelValue.filter((el) => el !== value);
        emit('update:modelValue', tempValue);
        return;
    } else {
        const tempValue = props.modelValue;
        tempValue.push(value)
        emit('update:modelValue', tempValue);
    }

}

function isSelected(el: string) {
    return props.modelValue.includes(el)
}
</script>

<template>
    <div :class="['relative inline-block text-left w-full', filterClassComp]">
        <div class="flex justify-between p-2 border-2 border-blue-600 w-full cursor-pointer"
             @click.stop="toggleDropdown">
            <DsTypography v-if="modelValue.length==0" class="m-1">Seleccione una
                opción
            </DsTypography>
            <div v-if="modelValue.length>0" class="flex flex-wrap">
                <DsTag v-for="tag in modelValue" :text="tag" class="m-1"/>
            </div>
            <DsIcon :name="open?'angle-up':'angle-down'"/>
        </div>

        <div
            v-show="open"
            :class="[
				'absolute w-full left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5  top-full',
			]"
        >
            <div
                aria-labelledby="options-menu"
                aria-orientation="vertical"
                class="py-1"
                role="menu"
            >
                <DsTypography v-for="el in options"
                              :class="[{'bg-gray-400':isSelected(el.value as string)},{'hover:bg-gray-400':isSelected(el.value as string)}
                              ,{'hover:bg-gray-300':!isSelected(el.value as string)}]"
                              class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 mb-0"
                              variant="h5" @click.stop="handleClick(el.value as string)">{{ el.text }}
                </DsTypography>
            </div>
        </div>
    </div>
</template>
