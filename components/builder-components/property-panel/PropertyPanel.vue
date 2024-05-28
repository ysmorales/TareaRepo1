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
                currentEditItem?.name ?? ''
            }}</span>
    </div>
    <InputPanel v-if="currentEditItem.type=='DsInput'" :key="componentKey"/>
    <SelectPanel v-if="currentEditItem.type=='DsSelect'" :key="componentKey"/>
    <TextAreaPanel v-if="currentEditItem.type=='DsTextArea'" :key="componentKey"/>
    <ConfirmationButtonPanel v-if="currentEditItem.type=='DsConfirmationButton'" :key="componentKey"/>
    <!--    {{ JSON.stringify(builderItems) }}-->
    <!--    /////////////////////////////////////-->
    <!--    {{ JSON.stringify(currentEditItem) }}-->
</template>