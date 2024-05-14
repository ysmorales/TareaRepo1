<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";


const store = useCounterStore()
const {changeSideMenuType} = toRefs(store)


</script>
<template>

    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>


</template>
