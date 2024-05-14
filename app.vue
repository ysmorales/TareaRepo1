<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";
import {DsButton} from "~/components/DesignSystem";

const store = useCounterStore()
const {changeSideMenuType} = toRefs(store)


</script>
<template>

    <NuxtLayout>
        <DsButton @click="changeSideMenuType('builder')">Change menu</DsButton>
        <NuxtPage/>
    </NuxtLayout>


</template>
