<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";
import {ref, toRefs} from 'vue';
import {DsButton, DsConfirmationButton, DsIcon, DsInput, DsSelect, DsTextArea} from "~/components/DesignSystem";
import IconArea from "./components/IconArea.vue";
import {filterProps} from "~/utils/filterProps";


const store = useCounterStore()
const {builderItems, addItemToForm, addItemToEdit, changeModal} = toRefs(store)
const {removeItemFromForm} = toRefs(store)
const showIcons = ref(builderItems.value.map(() => false))
const selectedItem = ref(-1) // Nuevo estado para el ítem seleccionado
const components: { [key: string]: any } = {
    DsInput,
    DsTextArea,
    DsButton,
    DsSelect,
    DsConfirmationButton
}
const emit = defineEmits(["property", "remove", "validate"])

const drop = () => {
    addItemToForm.value()
}


const removeItem = (index: number) => {
    emit('remove')
    selectedItem.value = -1
    removeItemFromForm.value(index)
}

const viewProperties = (item: any, index: number) => {
    changeModal.value('property')
    addItemToEdit.value(item)
    selectedItem.value = index // Actualiza el ítem seleccionado
    emit("property")
}

function handleValidate(item: any, index: number) {
    addItemToEdit.value(item)
    selectedItem.value = index
    emit('validate')
}


</script>

<template>
    <!--    {{ JSON.stringify(builderItems) }}-->
    <div
        :draggable="false"
        class="w-full flex md:min-w-[723px]  border border-gray-300 shadow-md rounded-md p-5  flex-col  items-center min-h-[400px]"
        @drop="drop"
        @dragover.prevent
    >
        <div v-if="builderItems.length==0" class="flex flex-col justify-center h-full items-center">
            <DsIcon class="mb-4" name="hand-pointer" size="medium"/>
            <p class="mb-2">Drag elements here</p>
            <p>Grab an element from the left and drop it here</p>
        </div>
        <div
            v-for="(item, index) in builderItems"
            :key="index"
            class="w-full  relative cursor-pointer"
            @mouseleave="showIcons[index] = false"
            @mouseover="showIcons[index] = true"
            @dragstart.prevent
        >
            <div class="h-[25px]">
                <IconArea v-show="showIcons[index]||selectedItem===index" :index="index" @removeItem="removeItem"
                          @validate="handleValidate(item,index)"/>
            </div>
            <div
                :class="['relative border hover:border-blue-500 cursor-pointer z-10 mb-3', {'border-blue-500':selectedItem === index}, {'border-transparent':selectedItem !== index}]"
                @click="viewProperties(item, index)">
                <component :is="components[item.name!]" v-bind="filterProps(item.props || {})"/>
                <div
                    :class="['absolute inset-0 ',{'bg-blue-500 opacity-20 border border-blue-500 ':selectedItem === index}]"></div>
            </div>
        </div>
    </div>
</template>