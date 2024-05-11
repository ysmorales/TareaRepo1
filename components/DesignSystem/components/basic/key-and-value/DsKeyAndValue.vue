<script lang="ts" setup>


import {DsTypography} from "../typography";

defineProps({
  title: String,
  infoObject: Object as () => ({})
})

const formatKey = (key: string) => {
  return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
}
</script>

<template>
  <div>
    <DsTypography variant="h3">{{ title }}</DsTypography>
    <ds-typography
        v-for="(value, key) in infoObject"
        :key="key"
        class="mb-5"
    >
      {{ formatKey(key) }}<br>
      <strong>{{ value }}</strong>
    </ds-typography>
  </div>
</template>