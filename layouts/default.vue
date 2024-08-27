<script lang="ts" setup>
import DsUnidosLayout from "~/components/DesignSystem/components/layout/unidos-layout/DsUnidosLayout.vue";
import {DsSelect} from "~/components/DesignSystem";

import DsSideMenu from "~/components/DesignSystem/components/navigation/sideMenu/DsSideMenu.vue";
import BuilderMenu from "~/components/builder-components/builder-menu/BuilderMenu.vue";
import {menuItemsVerticalMenu} from "./data";

const route = useRoute();
</script>
<template>
    <div>
        <DsUnidosLayout logo="images/builder/creador-logotipo.jpg">
            <template v-slot:menu>
                <div class="w-[350px] border-r border-b border-gray-300 h-full p-3 pl-0">
                    <DsSideMenu v-if="route.path!='/builder'" :data-side-menu="menuItemsVerticalMenu"/>
                    <BuilderMenu v-else-if="route.path=='/builder'"/>
                </div>
            </template>
            <template v-slot:final-navBar>
                <DsSelect
                    :option='[{value:"1", text:"Intranet"}, {value:"2", text:"Conectados"}, {value:"3", text:"Aplicaciones"},{value:"4", text:"Personas"},{value:"5", text:"SACH"}]'
                    label="Proyecto" label-style="m-0"
                    size="small"/>
            </template>
            <div class="w-full p-2">
                <slot/>
            </div>
        </DsUnidosLayout>
    </div>
</template>
