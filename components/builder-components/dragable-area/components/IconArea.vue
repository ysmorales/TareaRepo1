<script lang="ts" setup>
import {DsIcon} from "~/components/DesignSystem";
import {ref} from 'vue';

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
        class="flex justify-end w-full"
    >
        <DsIcon color="danger" name="trash" title="Remover" @click="removeItem(index!)"/>
    </div>
</template>

