<script lang="ts" setup>

import {DsButton, DsInput, DsTypography} from "~/components/DesignSystem";
import DraggableArea from "~/components/builder-components/dragable-area/DraggableArea.vue";
import {ref} from "vue";
import {useCounterStore} from "~/stores/builderStore";

const store = useCounterStore()
const {builderItems, addItemToForm, addItemToEdit, currentEditItem, updateItemInForm} = toRefs(store)
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

function handleProperty() {
    showModal.value = true
}
</script>

<template>
    <div class="flex w-full">
        <div class="flex flex-col space-y-2 w-full p-2">
            <h1>Builder</h1>
            <DraggableArea @property="handleProperty"/>
            <div class="flex justify-end mt-5 space-x-2">
                <DsButton color="tertiary">Cancelar</DsButton>
                <DsButton class="bg-gray-500 border-gray-400">Guardar</DsButton>
            </div>
        </div>
        <div class="min-w-[390px] border border-gray-200 p-2 min-h-[75vh]">
            <h1>Tools</h1>
        </div>
        <transition name="slide">
            <div v-show="showModal" class="fixed h-full flex items-center justify-end z-50 min-w-[400px] right-0">
                <div
                    :class="showModal ? 'translate-x-0' : 'translate-x-full'"
                    class="bg-white w-[400px] h-full p-4 overflow-auto transform transition-all duration-500 ease-in-out border border-gray-200"
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
    </div>
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