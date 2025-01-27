<script lang="ts" setup>
import {ref, computed} from 'vue';

const props = defineProps<{
    text: string;
    position?: 'top' | 'bottom';
    theme?: 'dark' | 'light';
}>();

const visible = ref(false);

const showTooltip = () => {
    visible.value = true;
};

const hideTooltip = () => {
    visible.value = false;
};

const tooltipPosition = computed(() => {
    switch (props.position) {
        case 'bottom':
            return 'top-full mt-2';
        case 'top':
        default:
            return 'bottom-full mb-2';
    }
});

const arrowPosition = computed(() => {
    switch (props.position) {
        case 'bottom':
            return 'bottom-full';
        case 'top':
        default:
            return 'top-full';
    }
});

const tooltipTheme = computed(() => {
    return props.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black';
});

const arrowTheme = computed(() => {
    return props.theme === 'dark' ? 'bg-gray-800' : 'bg-white';
});
</script>
<template>
    <div class="relative flex items-center" @mouseenter="showTooltip" @mouseleave="hideTooltip">
        <slot></slot>
        <div v-if="visible"
             :class="`absolute ${tooltipPosition} w-max ${tooltipTheme} text-sm rounded py-1 px-2 shadow-lg`">
            {{ text }}
            <div :class="`absolute ${arrowPosition} w-3 h-3 ${arrowTheme} rotate-45`"></div>
        </div>
    </div>
</template>