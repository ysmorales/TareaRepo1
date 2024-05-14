<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";
import {DsButton} from "~/components/DesignSystem";

const store = useCounterStore()
const {count, increment, changeName, name} = toRefs(store)

function handleIncrement() {
    increment.value()
}
</script>
<template>

    <NuxtLayout>
        <h1>{{ name }}</h1>
        <h2>{{ count }}</h2>
        <DsButton @click="changeName('pedro')">Change</DsButton>
        <DsButton @click="handleIncrement">Increment</DsButton>
        <NuxtPage/>
    </NuxtLayout>


</template>
