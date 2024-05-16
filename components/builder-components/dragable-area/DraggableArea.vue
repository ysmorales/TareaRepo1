<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";
import {ref, toRefs} from 'vue';
import {DsButton, DsIcon, DsInput, DsSelect, DsTextArea} from "~/components/DesignSystem";
import IconArea from "./components/IconArea.vue";
import {components} from "~/library/ComponentsLibraryProperty";

const store = useCounterStore()
const {builderItems, addItemToForm, addItemToEdit} = toRefs(store)

const {removeItemFromForm} = toRefs(store)
const showIcons = ref(builderItems.value.map(() => false))
const selectedItem = ref(-1) // Nuevo estado para el ítem seleccionado

const emit = defineEmits(["property"])


const drop = () => {
    addItemToForm.value()
}

const removeItem = (index: number) => {
    removeItemFromForm.value(index)
}

const viewProperties = (item: any, index: number) => {
    addItemToEdit.value(item)
    selectedItem.value = index // Actualiza el ítem seleccionado
    emit("property")
}

const filterProps = (props: Record<string, any>) => {
    const newProps: Record<string, any> = {};
    for (const key in props) {
        if (props[key] !== '') {
            newProps[key] = props[key];
        }
    }
    return newProps;
};
</script>

<template>

    <div
        class="w-full flex  border border-gray-300 shadow-md rounded-md p-5  flex-col  items-center"
        @drop="drop"
        @dragover.prevent
    >
        <div v-if="builderItems.length==0" class="flex flex-col justify-center items-center">
            <DsIcon class="mb-4" name="hand-pointer" size="medium"/>
            <p class="mb-2">Drag elements here</p>
            <p>Grab an element from the left and drop it here</p>
        </div>
        <div
            v-for="(item, index) in builderItems"
            :key="index"
            class="w-full  relative cursor-pointer"
            draggable="true"
            @mouseleave="showIcons[index] = false"
            @mouseover="showIcons[index] = true"
        >
            <div class="h-[25px]">
                <IconArea v-show="showIcons[index]||selectedItem===index" :index="index" @removeItem="removeItem"/>
            </div>
            <div class="relative border border-transparent hover:border-blue-500 cursor-pointer z-10 mb-3"
                 @click="viewProperties(item, index)">
                <component :is="components[item.name!]" v-bind="filterProps(item.props || {})"/>
                <div :class="['absolute inset-0 ',{'bg-blue-500 opacity-20':selectedItem === index}]"></div>
            </div>
        </div>
        <div v-if="builderItems.length>0" class="flex justify-end space-x-2 m-2 w-full">
            <DsButton color="tertiary">Cancelar</DsButton>
            <DsButton>Aceptar</DsButton>
        </div>
    </div>
</template>