<script lang="ts" setup>
import {useBuilderStore} from "~/stores/builderStore";

import InputPanel from "~/components/builder-components/property-panel/components/InputPanel.vue";
import SelectPanel from "~/components/builder-components/property-panel/components/SelectPanel.vue";
import TextAreaPanel from "~/components/builder-components/property-panel/components/TextAreaPanel.vue";
import ConfirmationButtonPanel
    from "~/components/builder-components/property-panel/components/ConfirmationButtonPanel.vue";
import {DsAccordion} from "~/components/DesignSystem";
import ValidatePanel from "~/components/builder-components/validate-panel/ValidatePanel.vue";

const store = useBuilderStore()
const {currentEditItem, propertyCollapse, changePropertyCollapse} = toRefs(store)


const emit = defineEmits(["input", "update:modelValue"])
const componentKey = ref(0);

watch(currentEditItem, () => {
    componentKey.value++;
}, {deep: true});

</script>

<template>
    <div v-if="currentEditItem.name==''">
        <p>Seleccione un componente para ver o modificar sus propiedades...</p>
    </div>
    <div v-if="currentEditItem.name!=''">
        <div
            class="flex items-center justify-between mt-5 mb-5 p-4 bg-white shadow-lg rounded-lg transition-colors duration-200 hover:bg-gray-100">
            <span class="font-semibold text-gray-700 mr-2">Nombre:</span>
            <input v-model="currentEditItem.name"
                   class="text-end w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                   type="text"/>
        </div>
        <DsAccordion :collapsed="propertyCollapse" title="Propiedades" @toggleCollapse="changePropertyCollapse">
            <InputPanel v-if="currentEditItem.type=='DsInput'" :key="componentKey"/>
            <SelectPanel v-if="currentEditItem.type=='DsSelect'" :key="componentKey"/>
            <TextAreaPanel v-if="currentEditItem.type=='DsTextArea'" :key="componentKey"/>
            <ConfirmationButtonPanel v-if="currentEditItem.type=='DsConfirmationButton'" :key="componentKey"/>
        </DsAccordion>
        <DsAccordion :collapsed="!propertyCollapse" title="Validaciones" @toggleCollapse="changePropertyCollapse">
            <ValidatePanel/>
        </DsAccordion>
    </div>
</template>