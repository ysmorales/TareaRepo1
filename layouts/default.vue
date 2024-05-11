<script lang="ts" setup>

import VerticalMenu from "~/components/builder-components/verticalMenu/VerticalMenu.vue";
import NavBar from "~/components/builder-components/NavBar/NavBar.vue";
import DsUnidosLayout from "~/components/DesignSystem/components/layout/unidos-layout/DsUnidosLayout.vue";
</script>

<template>
    <div class="flex">
        <VerticalMenu/>
        <div class="flex flex-col w-full h-[67px]">
            <div>
                <NavBar/>
            </div>
            <div class="container">
                <slot/>
            </div>

        </div>
    </div>
    <div class="mt-56">
        <DsUnidosLayout logo="images/builder/creador-logotipo.jpg">
            <div class="container">
                <slot/>
            </div>
        </DsUnidosLayout>
    </div>
</template>
