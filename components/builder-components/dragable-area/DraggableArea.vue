<script lang="ts" setup>
import {DsIcon, DsInput, DsTextArea, DsButton, DsTypography} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";
import {ref} from 'vue';

const store = useCounterStore()
const {builderItems, addItemToForm, addItemToEdit, currentEditItem, updateItemInForm} = toRefs(store)

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
    addItemToEdit.value(item)
    showModal.value = true
}

const showIcons = ref(false)
const showModal = ref(false)

function handlePropertyInput(event: Event) {
    const target = event.target as HTMLInputElement;
    if (currentEditItem.value) {
        if (!currentEditItem.value.props) {
            currentEditItem.value.props = {};
        }
        currentEditItem.value.props.label = target.value;
    }
    updateItemInForm.value(currentEditItem.value!)
}
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
            <component :is="components[item.name!]" v-bind="item.props"/>
        </div>
    </div>

    <transition name="slide">
        <div v-show="showModal" class="fixed h-full flex items-center justify-end z-50 w-[400px] right-0">
            <div
                :class="showModal ? 'translate-x-0' : 'translate-x-full'"
                class="bg-white w-[400px] h-full p-4 overflow-auto transform transition-all duration-500 ease-in-out border border-blue-500"
            >
                <div class="flex items-center space-x-1">
                    <button class="mb-4" @click="showModal = false">
                        x
                    </button>
                    <DsTypography>{{ currentEditItem?.name }}</DsTypography>
                </div>
                <DsInput label="label" @input="handlePropertyInput"/>
            </div>
        </div>
    </transition>
</template>
<style scoped>
.slide-enter-active {
    transition: all .5s ease;
}

.slide-leave-active {
    transition: all .5s ease;
}

.slide-enter, .slide-leave-to {
    transform: translateX(100%);
}

.slide-leave, .slide-enter-to {
    transform: translateX(0);
}
</style>