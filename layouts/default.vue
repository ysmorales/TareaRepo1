<script lang="ts" setup>

import VerticalMenu from "~/components/builder-components/verticalMenu/VerticalMenu.vue";
import NavBar from "~/components/builder-components/NavBar/NavBar.vue";
import DsUnidosLayout from "~/components/DesignSystem/components/layout/unidos-layout/DsUnidosLayout.vue";
import {DsSelect} from "~/components/DesignSystem";
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
            <template v-slot:menu>
                <VerticalMenu/>
            </template>
            <template v-slot:final-navBar>
                <DsSelect
                    :option='[{value:"1", text:"Intranet"}, {value:"2", text:"Conectados"}, {value:"3", text:"Aplicaciones"},{value:"4", text:"Personas"},{value:"5", text:"SACH"}]'
                    label="Proyecto" label-style="m-0"
                    size="small"/>
            </template>
            <div class="container">
                <slot/>
            </div>
        </DsUnidosLayout>
    </div>
</template>
