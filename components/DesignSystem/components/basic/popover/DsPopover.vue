<script lang="ts" setup>
import {ref} from 'vue';

const props = defineProps<{
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}>();

const visible = ref(false);

const showPopover = () => {
    visible.value = true;
};

const hidePopover = () => {
    visible.value = false;
};

const popoverPosition = computed(() => {
    switch (props.position) {
        case 'bottom':
            return 'top-full mt-2';
        case 'left':
            return 'right-full mr-2';
        case 'right':
            return 'left-full ml-2';
        case 'top':
        default:
            return 'bottom-full mb-2';
    }
});

const arrowPosition = computed(() => {
    switch (props.position) {
        case 'bottom':
            return 'bottom-full';
        case 'left':
            return 'left-full';
        case 'right':
            return 'right-full';
        case 'top':
        default:
            return 'top-full';
    }
});
</script>

<template>
    <div class="relative flex items-center" @mouseenter="showPopover" @mouseleave="hidePopover">
        <slot></slot>
        <div v-if="visible"
             :class="`absolute ${popoverPosition} w-max bg-white text-black text-sm rounded py-2 px-4 shadow-lg`">
            {{ content }}
            <div :class="`absolute ${arrowPosition} w-3 h-3 bg-white rotate-45`"></div>
        </div>
    </div>
</template>