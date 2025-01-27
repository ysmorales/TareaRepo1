<script lang="ts" setup>
import {computed} from 'vue';
import type {IColor, IIconSize} from '../../../interfaces/elements';
import {
    predefinedClasses,
    textColorClasses,
    iconSizeClasses,
} from '../../../common/propsStyle';
import {filterClass} from '../../../utils/filterClass';

const props = defineProps({
    name: {
        type: String,
    },

    color: {
        type: String as () => IColor,
        default: 'primary',
    },

    size: {
        type: String as () => IIconSize,
        default: 'default',
    },

    rotate: {
        type: Number,
        default: null,
    },

    class: {
        type: String,
        default: '',
    },
    isMenuVisible: {
        type: Boolean,
        default: false,
    },
});

const filterClassComp = computed(() => {
    return filterClass(predefinedClasses, props.class);
});

const cssClasses = computed(() => {
    const result = [
        `las la-${props.name}`,
        filterClassComp.value,
        iconSizeClasses[props.size],
    ];

    if (props.color) {
        result.push(textColorClasses[props.color]);
    }

    if (props.rotate) {
        result.push(`transform rotate-${props.rotate}`);
    }

    return result;
});
</script>

<template>
    <div
        v-if="isMenuVisible"
        :class="cssClasses"
        aria-hidden="true"
        role="menu"
    >
        <div
            class="bg-primary-500 text-white"
            role="list"
        >
            <slot>No items defined</slot>
        </div>
    </div>
</template>
