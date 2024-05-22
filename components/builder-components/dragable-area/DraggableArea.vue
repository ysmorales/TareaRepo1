<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";
import {ref, toRefs} from 'vue';
import {DsButton, DsIcon, DsInput, DsSelect, DsTextArea} from "~/components/DesignSystem";
import IconArea from "./components/IconArea.vue";
import DsConfirmationButton
    from "~/components/DesignSystem/components/form/confirmation-button/DsConfirmationButton.vue";


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
const emit = defineEmits(["property", "remove"])

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


const filterProps = (props: Record<string, any>) => {
    const newProps: Record<string, any> = {};
    for (const key in props) {
        if (props[key] !== '') {
            newProps[key] = props[key];
        }
    }
    return newProps;
};

// function addButtonProperties() {
//     dragStart('DsConfirmationButton')
//     viewProperties({name: 'DsConfirmationButton', props: {}}, builderItems.value.length)
//
// }

// function dragStart(type: string) {
//
//     changeCurrentDragItem.value({name: type, id: generateId.value()});
//
// }
</script>

<template>
    <!--    {{-->
    <!--        JSON.stringify(builderItems)-->
    <!--    }}-->
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
            <div
                :class="['relative border hover:border-blue-500 cursor-pointer z-10 mb-3', {'border-blue-500':selectedItem === index}, {'border-transparent':selectedItem !== index}]"
                @click="viewProperties(item, index)">
                <component :is="components[item.name!]" v-bind="filterProps(item.props || {})"/>
                <div
                    :class="['absolute inset-0 ',{'bg-blue-500 opacity-20 border border-blue-500 ':selectedItem === index}]"></div>
            </div>
        </div>
        <!--        <div-->
        <!--            :class="['flex w-full relative border  hover:border-blue-500 cursor-pointer z-10 mb-3', {'border-blue-500':selectedItem === builderItems.length}, {'border-transparent':selectedItem !== builderItems.length}]"-->
        <!--            @click="addButtonProperties">-->
        <!--            <DsConfirmationButton v-if="builderItems.length>0" @cancel="console.log('cancel')" @ok="console.log('ok')"/>-->
        <!--            <div-->
        <!--                :class="['absolute inset-0 ',{'bg-blue-500 opacity-20':selectedItem === builderItems.length}]"></div>-->
        <!--        </div>-->
    </div>
</template>