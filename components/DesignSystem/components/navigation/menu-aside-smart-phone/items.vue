<script lang="ts" setup>
import DsLink from "../link/DsLink.vue";
import SubItem from "./subItem.vue";

defineProps<{
    data?: any;
}>();
</script>

<template>
    <ul>
        <li v-for="link in data" :key="link.id">
            <DsLink
                :class="`btn-menu-mobile no-underline btn-menu-mobile-l1 ${link.active ? 'active' : ''}`"
                :href="link.link"
                title="Ir a la sección"
            >
                {{ link.label }}
            </DsLink>
            <SubItem v-if="link.items"/>
        </li>
    </ul>
</template>
