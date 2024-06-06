<script lang="ts" setup>
import {DsImages} from "~/components/DesignSystem";
</script>

<template>
    <div class="h-screen items-center justify-center">
        <div class="flex flex-col justify-center items-center h-full">
            <div class="w-[500px]">
                <DsImages class="mb-5" src="/images/builder/creador-logotipo.jpg"/>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
