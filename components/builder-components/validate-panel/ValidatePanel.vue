<script lang="ts" setup>
import {useCounterStore} from "~/stores/builderStore";
import {toRefs} from "vue";

const store = useCounterStore()
const {currentEditItem} = toRefs(store)
</script>

<template>
    <div class="flex justify-between mt-5">
        Nombre:
        <span class="text-blue-500">{{
                (currentEditItem?.name ?? '') + ' ' + (currentEditItem?.id ?? '')
            }}</span>
    </div>
</template>

