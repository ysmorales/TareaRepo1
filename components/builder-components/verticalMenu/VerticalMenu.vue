<script lang="ts" setup>

import DsSideMenu from "~/components/DesignSystem/components/navigation/sideMenu/DsSideMenu.vue";
import DsImage from "../../DesignSystem/components/media/images/imagesHtml/DsImages.vue";
import {menuItemsVerticalMenu} from "~/components/builder-components/verticalMenu/data";
</script>

<template>
    <div class="w-[350px] border-r border-b border-gray-300 h-full p-3 pl-0">
        <DsImage src="images/back-office/creador-logotipo.jpg"/>
        <DsSideMenu :data-side-menu="menuItemsVerticalMenu"/>
    </div>
</template>
