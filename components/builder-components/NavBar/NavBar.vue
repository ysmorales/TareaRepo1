<script lang="ts" setup>

import {DsAvatar, DsSelect, DsTypography} from "~/components/DesignSystem";
</script>

<template>
    <div class="flex justify-end border-b border-gray-300 h-[67px] p-3">
        <div class="flex  items-center space-x-2">
            <DsSelect
                :option='[{value:"1", text:"Intranet"}, {value:"2", text:"Conectados"}, {value:"3", text:"Aplicaciones"},{value:"4", text:"Personas"},{value:"5", text:"SACH"}]'
                label="Proyecto" label-style="m-0"
                size="small"/>
            <div class="flex justify-end ml-5 items-center w-[200px]">
                <DsTypography class="m-0 mr-1 " variant="p">Constancia Antonia</DsTypography>
                <DsAvatar size="small"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>