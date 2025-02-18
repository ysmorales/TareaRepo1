<script lang="ts" setup>
import {computed} from 'vue';
import {colorClasses, outlineColorClasses} from '../../../common/propsStyle';
import DsIcon from '../icon/DsIcon.vue';
import type {IComponentBaseProp} from '../../../interfaces/props';
import type {IIconName} from '../icon/types';
import type {IDsTagType} from './types';

interface IProp extends /* @vue-ignore */ IComponentBaseProp {
    text: string;
    color: IDsTagType;
    outline?: boolean;
    icon?: IIconName;
    class?: string;
}

const $props
    = withDefaults(defineProps<IProp>(), {
    color: 'neutral',
    icon: undefined,
    text: 'Tag',
});


const filterClassComp = computed(() => {
    return $props.class;
});

const cssClasses = computed<string[]>(() => {
        const classArray: string[] = [
            'rounded',
            'text-xs',
            'px-2',
            'py-1',
        ];

        if ($props.outline) {
            classArray.push(outlineColorClasses[$props.color]);
        } else
            classArray.push(colorClasses[$props.color]);

        return classArray;
    },
);
</script>

<template>
	<span :class="[cssClasses,filterClassComp]">
		<DsIcon
            v-if="icon"
            :name="icon"
            class="align-middle"
            size="small"
        />
		{{ text }}
	</span>
</template>
