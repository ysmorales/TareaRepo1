<script lang="ts" setup>
import DsIcon from "../../../../components/basic/icon/DsIcon.vue";
import DsModal from "../../../../components/container/modal/DsModal.vue";
import DsTypography from "../../../../components/basic/typography/DsTypography.vue";
import DsSeparator from "../../../../components/basic/separator/DsSeparator.vue";

const props = defineProps({
  loadingDelete: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  modalDelete: {
    type: Object as () => { title?: string; message?: string } | null,
    default: () => ({
      title: "¡Atención!",
      message: "¿Estás seguro realmente de eliminar este usuario(a)?",
    }),
  },
});
const emit = defineEmits(["delete", "update:modelValue"]);

function handleModalAccept() {
  emit("delete", props.item);
}
</script>

<template>
  <DsModal
    :button-modal-loading="loadingDelete"
    :model-value="modelValue"
    :show-header="false"
    accept-text="Eliminar"
    color-button-ok="danger"
    @accept="handleModalAccept"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div class="mt-2 p-2">
      <div class="flex text-center space-x-1">
        <DsIcon name="exclamation-triangle" size="medium" />
        <DsTypography variant="h2">{{ modalDelete?.title }}</DsTypography>
      </div>

      <DsSeparator class="mb-2" />
      <p>{{ modalDelete?.message }}</p>
      <DsSeparator class="mb-0" />
    </div>
  </DsModal>
</template>
