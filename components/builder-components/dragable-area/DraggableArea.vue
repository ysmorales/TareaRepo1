<script lang="ts" setup>
import {DsIcon, DsInput, DsTextArea, DsButton, DsTypography} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";
import {ref} from 'vue';

const store = useCounterStore()
const {builderItems, addItemToForm, addItemToEdit, currentEditItem, updateItemInForm} = toRefs(store)

const {removeItemFromForm} = toRefs(store)
const showIcons = ref(false)

const emit = defineEmits(["property"])

const components: { [key: string]: any } = {
    DsInput,
    DsTextArea,
    DsButton
}

const drop = () => {
    addItemToForm.value()
}

const removeItem = (index: number) => {
    removeItemFromForm.value(index)
}

const viewProperties = (item: any) => {
    addItemToEdit.value(item)
    emit("property")
    // showModal.value = true
}


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
            class="w-full mt-4 relative cursor-pointer"
            draggable="true"
            @mouseleave="showIcons = false"
            @mouseover="showIcons = true"
        >
            <div v-if="showIcons" class=" w-full">
                <div class="flex justify-end absolute top-0 right-0 w-full">
                    <DsIcon color="primary" name="cogs" title="Propiedades" @click="viewProperties(item)"/>
                    <DsIcon color="danger" name="trash" title="Remover" @click="removeItem(index)"/>
                </div>
            </div>
            <component :is="components[item.name!]" v-bind="item.props"/>
        </div>
    </div>


</template>
