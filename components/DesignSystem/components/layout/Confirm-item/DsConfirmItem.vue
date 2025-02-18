<script lang="ts" setup>
import DsTypography from "../../basic/typography/DsTypography.vue";
import {isNotEmpty} from "../../../../DesignSystem/utils/notEmpty";
import Skeleton from "./SkeletonConfirmItem.vue";

const foundValue = (items: any[]) => items.find((d: any) => isNotEmpty(d.value));

defineProps({
        subItems: {
            type: Array as () => any[],
            default: () => [
                {
                    label: "Label 1",
                    value: "Aquí va el valor 1",
                },
                {
                    label: "Label 2",
                    value: "Aquí va el valor 2",
                },
                {
                    label: "Label 3",
                    value: "Aquí va el valor 3",
                }
            ]
        },
        title: String,
        loading: Boolean
    }
);
</script>

<template>
    <Skeleton v-if="loading"/>
    <div v-if="subItems && isNotEmpty(foundValue(subItems)) && !loading" class="mb-4">
        <DsTypography class="font-inriaSansBold mb-1 text-xl">
            {{ title }}
        </DsTypography>

        <div
            v-for="(itm, index) in subItems"
            :id="index as unknown as string"
            :class="`${itm.classContainer}`"
        >
            <DsTypography
                v-if="(isNotEmpty(itm.label) && isNotEmpty(itm.value)) || loading"
                class="mb-0"
            >
                {{ itm.label }}
            </DsTypography>

            <p
                v-if="!itm.rowRender && isNotEmpty(itm.value)"
                :class="`mb-0 ${itm.class}`"
            >
                {{ itm.value }}
            </p>

            <component
                :is="itm.rowRender.component"
                v-if="itm.rowRender && isNotEmpty(itm.value)"
                v-bind="itm.rowRender?.getProps()"
            />
        </div>
    </div>
</template>