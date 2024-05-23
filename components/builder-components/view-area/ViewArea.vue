<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";
import {toRefs} from "vue";
import {filterProps} from "~/utils/filterProps";
import {DsButton, DsConfirmationButton, DsInput, DsSelect, DsTextArea} from "~/components/DesignSystem";

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
        class="w-full flexp-5  flex-col  items-center"
    >
        <component :is="components[item.name!]"
                   v-for="(item, index) in builderItems" :key="index" v-bind="filterProps(item.props || {})"/>
    </div>
</template>

