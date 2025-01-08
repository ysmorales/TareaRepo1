<script lang="ts" setup></script>

<template>
  <div class="grid grid-cols-8 h-full">
    <div class="bg-white h-full"><slot name="sideLeft">left side</slot></div>
    <div class="col-span-5 h-full min-h-[calc(100vh-70px)]">
      <slot name="container">container </slot>
    </div>
    <div class="col-span-2 bg-white h-full">
      <slot name="sideRight">right side</slot>
    </div>
  </div>
</template>
