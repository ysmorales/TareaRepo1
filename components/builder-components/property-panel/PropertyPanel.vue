<script lang="ts" setup>
import {useBuilderStore} from "~/stores/builderStore";

import InputPanel from "~/components/builder-components/property-panel/components/InputPanel.vue";
import SelectPanel from "~/components/builder-components/property-panel/components/SelectPanel.vue";
import TextAreaPanel from "~/components/builder-components/property-panel/components/TextAreaPanel.vue";
import ConfirmationButtonPanel
    from "~/components/builder-components/property-panel/components/ConfirmationButtonPanel.vue";

const store = useBuilderStore()
const {currentEditItem} = toRefs(store)


const emit = defineEmits(["input", "update:modelValue"])
const componentKey = ref(0);

watch(currentEditItem, () => {
    componentKey.value++;
}, {deep: true});

</script>

<template>
    <div class="flex justify-between mt-5">
        Nombre:
        <span class="text-blue-500">{{
                (currentEditItem?.name ?? '') + ' ' + (currentEditItem?.id ?? '')
            }}</span>
    </div>
    <InputPanel v-if="currentEditItem.name=='DsInput'" :key="componentKey"/>
    <SelectPanel v-if="currentEditItem.name=='DsSelect'" :key="componentKey"/>
    <TextAreaPanel v-if="currentEditItem.name=='DsTextArea'" :key="componentKey"/>
    <ConfirmationButtonPanel v-if="currentEditItem.name=='DsConfirmationButton'" :key="componentKey"/>
    <!--    {{ JSON.stringify(builderItems) }}-->
    <!--    /////////////////////////////////////-->
    <!--    {{ JSON.stringify(currentEditItem) }}-->
</template>