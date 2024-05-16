<script lang="ts" setup>
import {DsIcon} from "~/components/DesignSystem";
import {defineProps, ref} from 'vue';

defineProps({
    index: Number,
});
const emit = defineEmits(["removeItem"])

const showIcon = ref(false);

function removeItem(index: number) {
    emit("removeItem", index)
}

</script>

<template>

    <div
        class="w-full"
    >

        <div class="flex justify-end absolute top-0 right-0 w-full">
            <DsIcon color="danger" name="trash" title="Remover" @click="removeItem(index!)"/>
        </div>
    </div>
</template>

