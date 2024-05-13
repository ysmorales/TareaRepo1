<script lang="ts" setup>
import DsUnidosLayout from "~/components/DesignSystem/components/layout/unidos-layout/DsUnidosLayout.vue";
import {DsSelect} from "~/components/DesignSystem";
import {menuItemsVerticalMenu} from "~/components/builder-components/verticalMenu/data";
import DsSideMenu from "~/components/DesignSystem/components/navigation/sideMenu/DsSideMenu.vue";
</script>
<template>
    <div>
        <DsUnidosLayout logo="images/builder/creador-logotipo.jpg">
            <template v-slot:menu>
                <div class="w-[350px] border-r border-b border-gray-300 h-full p-3 pl-0">
                    <DsSideMenu :data-side-menu="menuItemsVerticalMenu"/>
                </div>
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
