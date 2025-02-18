<script lang="ts" setup>
import Items from "./items.vue";
import {exampleComponentData} from "../menu-aside-smart-phone/exampleData";

defineProps({
    data: {
        type: Array,
        default: () => exampleComponentData
    }
})
</script>

<template>
    <nav class="bg-white w-full">
        <Items :data="data"/>
    </nav>
</template>
