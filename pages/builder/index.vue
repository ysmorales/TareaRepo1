<script lang="ts" setup>
import {DsTypography} from "~/components/DesignSystem";
import DraggableArea from "~/components/builder-components/dragable-area/DraggableArea.vue";
import {ref} from "vue";
import {useCounterStore} from "~/stores/builderStore";
import PropertyPanel from "~/components/builder-components/property-panel/PropertyPanel.vue";
import ToolPanel from "~/components/builder-components/tools-panel/ToolPanel.vue";
import CodeArea from "~/components/builder-components/code-area/CodeArea.vue";

const {currentEditItem} = toRefs(useCounterStore())
const area = ref<'view' | 'edit' | 'code'>('edit')
const showModal = ref(false)

function handleCode() {
    area.value = 'code'
}

function handleEdit() {
    area.value = 'edit'
}

</script>

<template>

    <div class="flex w-full">
        <div class="flex flex-col space-y-2 w-full p-2">
            <ToolPanel @code="handleCode" @edit="handleEdit"/>
            <DsTypography variant="h1">Nuevo prototipo</DsTypography>
            <DraggableArea v-if="area=='edit'" @property="showModal = true"/>
            <CodeArea v-if="area=='code'"/>
            <!--            <div class="flex justify-end mt-5 space-x-2">-->
            <!--                <DsButton color="tertiary" @click="handleClick">Cancelar</DsButton>-->
            <!--                <DsButton class="bg-gray-500 border-gray-400">Guardar</DsButton>-->
            <!--            </div>-->
        </div>
        <div class="min-w-[365px] border border-gray-200 p-2 min-h-[75vh]">
            <DsTypography variant="h1">Form tree</DsTypography>
        </div>
        <transition name="slide">
            <div v-show="showModal" class="fixed h-full flex items-center justify-end z-50 min-w-[410px] right-0">
                <div
                    :class="showModal ? 'translate-x-0' : 'translate-x-full'"
                    class="bg-white w-96 h-full p-6 overflow-auto transform transition-all duration-500 ease-in-out border border-gray-200 shadow-lg"
                >
                    <div class="flex justify-between items-center border-b pb-4 mb-4">
                        <DsTypography class="text-lg font-semibold">Properties <span class="text-blue-500">{{
                                currentEditItem?.name + ' ' + currentEditItem?.id
                            }}</span>
                        </DsTypography>
                        <button class="text-gray-400 hover:text-gray-500" @click="showModal = false">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"></path>
                            </svg>
                        </button>
                    </div>
                    <PropertyPanel/>
                </div>
            </div>
        </transition>
    </div>
</template>
<style scoped>
@import 'assets/css/transition-drawer.css';
</style>