<script lang="ts" setup>
import {computed} from 'vue';

type IColorSeparator = 'blue' | 'gray';

const colorSeparatorLibrary = {
    blue: 'border-blue-100',
    gray: 'border-gray-100',
};

const props = defineProps({
    class: {
        type: String,
        default: 'mb-10',
    },

    color: {
        type: String as () => IColorSeparator,
        default: 'blue',
    },
});

const filterClassComp = computed(() => {
    return props.class;
});
</script>

<template>
    <hr
        :class="[filterClassComp, colorSeparatorLibrary[color]]"
    >
</template>
