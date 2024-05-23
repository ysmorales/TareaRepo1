<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";
import {toRefs} from "vue";
import {filterProps} from "~/utils/filterProps";
import {
    DsButton,
    DsConfirmationButton,
    DsIcon,
    DsInput,
    DsSelect,
    DsTextArea,
    DsTypography
} from "~/components/DesignSystem";

const store = useCounterStore()
const {builderItems} = toRefs(store)

const components: { [key: string]: any } = {
    DsInput,
    DsTextArea,
    DsButton,
    DsSelect,
    DsConfirmationButton
}
</script>

<template>
    <div
        class="w-full flexp-5 flex-col  items-center justify-center border border-gray-300 shadow-md rounded-md p-5 min-h-[400px]"
    >
        <div v-if="builderItems.length==0" class="flex flex-col h-full justify-center items-center">
            <DsTypography>Area de previsualización, no se ha adicionado componentes aún.</DsTypography>
        </div>
        <component :is="components[item.name!]" v-for="(item, index) in builderItems"
                   v-if="builderItems.length>0" :key="index" v-bind="filterProps(item.props || {})"/>
    </div>
</template>

