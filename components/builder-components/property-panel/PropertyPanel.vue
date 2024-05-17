<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";

import InputPanel from "~/components/builder-components/property-panel/components/InputPanel.vue";
import SelectPanel from "~/components/builder-components/property-panel/components/SelectPanel.vue";
import TextAreaPanel from "~/components/builder-components/property-panel/components/TextAreaPanel.vue";

const store = useCounterStore()
const {currentEditItem, builderItems} = toRefs(store)


const emit = defineEmits(["input", "update:modelValue"])
const componentKey = ref(0);

watch(currentEditItem, () => {
    componentKey.value++;
}, {deep: true});
</script>

<template>
    <InputPanel v-if="currentEditItem.name=='DsInput'" :key="componentKey"/>
    <SelectPanel v-if="currentEditItem.name=='DsSelect'" :key="componentKey"/>
    <TextAreaPanel v-if="currentEditItem.name=='DsTextArea'" :key="componentKey"/>
    <!--    {{ JSON.stringify(builderItems) }}-->
    <!--    /////////////////////////////////////-->
    <!--    {{ JSON.stringify(currentEditItem) }}-->
</template>