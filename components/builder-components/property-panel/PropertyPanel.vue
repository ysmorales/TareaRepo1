<script lang="ts" setup>
import {DsButton, DsInput, DsSelect, DsTextArea} from "~/components/DesignSystem";
import {useCounterStore} from "~/stores/builderStore";
import {computed} from "vue";
import InputPanel from "~/components/builder-components/property-panel/components/InputPanel.vue";
import SelectPanel from "~/components/builder-components/property-panel/components/SelectPanel.vue";
import TextAreaPanel from "~/components/builder-components/property-panel/components/TextAreaPanel.vue";

const store = useCounterStore()
const {currentEditItem, updateItemInForm, builderItems} = toRefs(store)

const components: { [key: string]: any } = {
    DsInput,
    DsTextArea,
    DsButton,
    DsSelect
}

const emit = defineEmits(["input", "update:modelValue"])
const componentKey = ref(0);
//
// function handlePropertyInput(event: Event, key: number) {
//     const target = event.target as HTMLInputElement;
//     console.log(target.value)
//
//     if (currentEditItem.value) {
//         if (!currentEditItem.value.props) {
//             currentEditItem.value.props = {};
//         }
//         currentEditItem.value.props[key] = target.value;
//     }
//     updateItemInForm.value(currentEditItem.value!)
// }
watch(currentEditItem, () => {
    componentKey.value++;
}, {deep: true});
</script>

<template>
    <!--    <div v-for="(value, key) in currentEditItem.props">-->
    <!--        <component :is="components['DsInput']"-->
    <!--                   :label="key" :value="value" @input="(event:Event) => handlePropertyInput(event, key)"/>-->
    <!--    </div>-->
    <InputPanel v-if="currentEditItem.name=='DsInput'" :key="componentKey"/>
    <SelectPanel v-if="currentEditItem.name=='DsSelect'" :key="componentKey"/>
    <TextAreaPanel v-if="currentEditItem.name=='DsTextArea'" :key="componentKey"/>
    {{ JSON.stringify(builderItems) }}
    /////////////////////////////////////
    {{ JSON.stringify(currentEditItem) }}
</template>