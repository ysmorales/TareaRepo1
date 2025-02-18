<script lang="ts" setup>
defineProps({
    type: {
        type: String as () => 'init' | 'final',
        default: 'init',
    },
});
</script>

<template>
    <div v-if="type=='init'" class="h-7 overflow-hidden flex items-end my-3">
        <img alt="Somos" class="h-[60px]" src="/images/somos/logo-somos.svg" width="120px"/>
    </div>
    <div v-if="type=='final'" class="h-1 overflow-hidden flex items-end mt-2">
        <img alt="Somos" class="h-[80px]" src="/images/somos/logo-somos.svg" width="180px"/>
    </div>
</template>
