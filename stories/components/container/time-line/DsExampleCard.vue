<script lang="ts" setup>
import DsGenericCard from "../../../../components/DesignSystem/components/container/generic-card/DsGenericCard.vue";
import DsTag from "../../../../components/DesignSystem/components/basic/tag/DsTag.vue";
import DsTypography from "../../../../components/DesignSystem/components/basic/typography/DsTypography.vue";
import DsAvatar from "../../../../components/DesignSystem/components/basic/avatar/DsAvatar.vue";
</script>

<template>
  <DsGenericCard class="bg-white border-slate-300 mb-6">
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div>
            <DsAvatar size="normal" />
          </div>
          <div class="ml-2">
            <DsTypography class="mb-0" variant="h4"
              >User name example
            </DsTypography>
            <DsTypography class="font-inriaSans mt-0" variant="span">
              This is user name note
            </DsTypography>
          </div>
        </div>
        <div class="ml-auto flex gap-2">
          <DsTag
            class="text-primary-500 font-inriaSansBold"
            text="29 de diciembre"
          />
          <DsTag color="success" text="Entregada" />
        </div>
      </div>
    </template>

    <template #body>
      <div class="mt-3">
        <span>Ha entregado conforme a su solicitud</span>
      </div>
    </template>
  </DsGenericCard>
</template>
