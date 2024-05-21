<script lang="ts" setup>
import {DsTypography} from "~/components/DesignSystem";
import DraggableArea from "~/components/builder-components/dragable-area/DraggableArea.vue";
import {ref, toRefs} from "vue";
import {useCounterStore} from "~/stores/builderStore";
import PropertyPanel from "~/components/builder-components/property-panel/PropertyPanel.vue";
import ToolPanel from "~/components/builder-components/tools-panel/ToolPanel.vue";
import CodeArea from "~/components/builder-components/code-area/CodeArea.vue";
import VersionArea from "~/components/builder-components/version-area/VersionArea.vue";
import {versions} from "~/components/builder-components/version-area/mockData";

const store = useCounterStore()
const {clearStore} = toRefs(store)
const {currentEditItem} = toRefs(useCounterStore())
const area = ref<'view' | 'edit' | 'code'>('edit')
const showModal = ref(false)

function handleCode() {
    area.value = 'code'
}

function handleEdit() {
    area.value = 'edit'
}

function handleClear() {
    clearStore.value()
}

function handleRemoveItem() {
    showModal.value = false
}

function handleSave() {
    alert("handle save")
}

</script>

<template>

    <div class="flex w-full">
        <div class="flex flex-col space-y-2 w-full p-2">
            <ToolPanel @clear="handleClear" @code="handleCode" @edit="handleEdit" @save="handleSave"/>
            <DsTypography variant="h1">Nuevo prototipo</DsTypography>
            <DraggableArea v-if="area=='edit'" @property="showModal = true" @remove="handleRemoveItem"/>
            <CodeArea v-if="area=='code'"/>
        </div>
        <VersionArea :version-data="versions"/>
        <transition name="slide">
            <div v-show="showModal" class="fixed h-full flex items-center justify-end z-50 min-w-[410px] right-0">
                <div
                    :class="showModal ? 'translate-x-0' : 'translate-x-full'"
                    class="bg-white w-96 h-full p-6 overflow-auto transform transition-all duration-500 ease-in-out border border-gray-200 shadow-lg"
                >
                    <div class="flex flex-col border-b pb-4 mb-4">
                        <div class="flex justify-between items-center">
                            <DsTypography class="text-lg font-semibold">Panel de propiedades
                            </DsTypography>
                            <button class="text-gray-400 hover:text-gray-500" @click="showModal = false">
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="flex justify-between mt-5">
                            Nombre:
                            <span class="text-blue-500">{{
                                    (currentEditItem?.name ?? '') + ' ' + (currentEditItem?.id ?? '')
                                }}</span>
                        </div>
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