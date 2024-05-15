<script lang="ts" setup>
import {DsIcon, DsInput, DsTextArea, DsButton} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";
import {ref} from 'vue';

const store = useCounterStore()
const {builderItems, addItemToForm} = toRefs(store)

const {removeItemFromForm} = toRefs(store)

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
    console.log(item)
    showModal.value = true
}

const showIcons = ref(false)
const showModal = ref(false)
</script>

<template>
    <div
        class="w-full h-full flex  border border-gray-300 shadow-md rounded-md p-5  flex-col justify-center items-center"
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
            <component :is="components[item.name]"/>
        </div>
    </div>

    <!-- Modal -->
    <div v-show="showModal" class="fixed inset-0 flex items-center justify-end z-50">
        <div class="fixed inset-0 bg-black opacity-50"></div>
        <div class="bg-white w-64 h-full p-4 overflow-auto transform transition-transform duration-200 ease-in-out">
            <button class="mb-4" @click="showModal = false">
                <DsIcon name="x" title="Close"/>
            </button>
            <!-- Aquí puedes agregar el contenido del modal -->
        </div>
    </div>
</template>