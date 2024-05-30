<script lang="ts" setup>
import {DsTypography} from "~/components/DesignSystem";
import DraggableArea from "~/components/builder-components/dragable-area/DraggableArea.vue";
import {ref, toRefs} from "vue";
import {useBuilderStore} from "~/stores/builderStore";
import PropertyPanel from "~/components/builder-components/property-panel/PropertyPanel.vue";
import ToolPanel from "~/components/builder-components/tools-panel/ToolPanel.vue";
import CodeArea from "~/components/builder-components/code-area/CodeArea.vue";
import VersionArea from "~/components/builder-components/version-area/VersionArea.vue";
import {versions} from "~/components/builder-components/version-area/mockData";
import SavePanel from "~/components/builder-components/save-panel/SavePanel.vue";
import ValidatePanel from "~/components/builder-components/validate-panel/ValidatePanel.vue";
import ViewArea from "~/components/builder-components/view-area/ViewArea.vue";
import FormDataPanel from "~/components/builder-components/form-data-panel/FormDataPanel.vue";
import InfoPanel from "~/components/builder-components/info-panel/InfoPanel.vue";

const store = useBuilderStore()
const {clearStore, changeModal, modalType, builderItems, currentEditItem} = toRefs(store)
const area = ref<'view' | 'edit' | 'code'>('edit')
const showModal = ref(false)

const titles = {
    'property': 'Panel de configuración',
    'save': 'Guardar prototipo',
    'validate': 'Validar input',
    'formData': 'Form data',
    'infoPanel': 'Ejemplos de uso',
};

const handle = {
    code: () => area.value = 'code',
    edit: () => area.value = 'edit',
    clear: () => clearStore.value(),
    removeItem: () => showModal.value = false,
    save: () => {
        changeModal.value('save')
        showModal.value = true
    },
    validate: () => {
        changeModal.value('validate')
        showModal.value = true
    },
    view: () => area.value = 'view'
}
watch(area, () => {
    if (builderItems.value.length != 0) {
        if (area.value == 'view') {
            changeModal.value('formData')
            showModal.value = true
        }
        if (area.value == 'edit') {
            changeModal.value('property')
            showModal.value = true


        }
        if (area.value == 'code') {
            changeModal.value('infoPanel')
            showModal.value = true
        }
    } else {
        showModal.value = false
    }


})

</script>

<template>
    <div class="flex w-full">
        <div class="flex flex-col space-y-2 w-full p-2">
            <ToolPanel v-on="handle"/>
            <DsTypography variant="h1">Nuevo prototipo</DsTypography>
            <DraggableArea v-if="area=='edit'" @property="showModal = true" @remove="handle.removeItem"
                           @validate="handle.validate"/>
            <CodeArea v-if="area=='code'"/>
            <ViewArea v-if="area=='view'"/>
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
                            <DsTypography class="text-lg font-semibold">
                                {{ titles[modalType] }}
                            </DsTypography>
                            <button class="text-gray-400 hover:text-gray-500" @click="showModal = false">
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"></path>
                                </svg>
                            </button>
                        </div>

                    </div>
                    <PropertyPanel v-if="modalType=='property'"/>
                    <SavePanel v-if="modalType=='save'"/>
                    <ValidatePanel v-if="modalType=='validate'"/>
                    <FormDataPanel v-if="modalType=='formData'"/>
                    <InfoPanel v-if="modalType=='infoPanel'"/>
                </div>
            </div>
        </transition>
    </div>
</template>
<style scoped>
@import 'assets/css/transition-drawer.css';
</style>