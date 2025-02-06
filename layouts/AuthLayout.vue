<script lang="ts" setup>
import { DsImages } from "~/components/DesignSystem";
</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <div class="flex flex-col justify-center items-center h-full w-[900px]">
            <div class="flex">
                <div class="flex flex-col w-1/2">
                    <slot></slot>
                </div>
                <div class="flex items-center justify-center w-1/2">
                    <DsImages class="w-full" src="/images/builder/creador-logotipo.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>