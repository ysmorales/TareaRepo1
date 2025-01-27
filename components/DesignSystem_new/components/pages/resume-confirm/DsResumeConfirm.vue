<script lang="ts" setup>
import DsAccordion from "../../../../DesignSystem/components/container/accordion/DsAccordion.vue";
import type {IItems} from "./interface";
import {isNotEmpty} from "../../../../DesignSystem/utils/notEmpty";
import DsTag from "../../../../DesignSystem/components/basic/tag/DsTag.vue";
import type {IDsTagType} from "../../../../DesignSystem/components/basic/tag/types";
import DsButton from "../../../../DesignSystem/components/basic/button/DsButton.vue";
import {defineProps, computed} from 'vue';

const props = defineProps({
    items: {
        type: Array as () => IItems[],
        default: () => [
            {
                title: 'Este es un título verdadero', subItems: [
                    {
                        label: 'Estado',
                        value: 'Value 1',
                        tagColor: 'success',
                        isTag: true,
                        rowRender: null,
                    },
                    {
                        label: 'Nombre',
                        value: 'Cargado value 2',
                    },
                    {
                        label: 'Apellidos',
                        value: 'Pérez Guedes',
                    },
                    {
                        label: 'Abajo va un componente',
                        rowRender: {
                            component: DsButton,
                            getProps: () => ({
                                onClick: () => alert('Button clicked!'),
                                innerText: 'Click Me'
                            })
                        }
                    }
                ]
            }
        ]
    },
    loading: {
        type: Boolean,
        default: false
    }
});

const theItems = computed(() =>
    props.items.filter((f) => {
        return isNotEmpty(f.subItems.filter((d) => d.value && d.value));
    })
);
</script>

<template>
    <div class="mt-2">
        <DsAccordion v-for="item in theItems" :title="item.title" class="mt-5">
            <hr class="pb-4"/>
            <div v-if="loading" class="w-full">
                <div v-for="idx in 3" class="shadow rounded-md p-4 w-full mt-4">
                    <div class="animate-pulse flex space-x-4">
                        <div class="flex-1 space-y-6 py-1">
                            <div class="h-9 bg-slate-200 rounded w-[40%]"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4 w-[50%]">
                                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                </div>
                                <div class="h-2 bg-slate-200 rounded w-[20%]"></div>
                                <div class="h-2 bg-slate-200 rounded w-[40%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-for="subItm in item.subItems" v-if="!loading">
                    <span v-if="subItm.label">
                        {{ subItm.label }}: <br/>
                    </span>
                <strong v-if="!subItm.isTag && subItm.value && !subItm.rowRender">{{ subItm.value }}</strong>
                <DsTag v-if="subItm.isTag && subItm.value" :color="subItm.tagColor as IDsTagType"
                       text="Cargando Tab 1"/>
                <component
                    :is="subItm?.rowRender?.component"
                    v-if="subItm.rowRender && subItm.rowRender.component"
                    v-bind="subItm.rowRender?.getProps()"
                >
                    {{ subItm.rowRender?.getProps().innerText }}
                </component>
                <p v-if="subItm.value" class="mb-3"></p>
            </div>

            <slot></slot>
        </DsAccordion>
    </div>
</template>