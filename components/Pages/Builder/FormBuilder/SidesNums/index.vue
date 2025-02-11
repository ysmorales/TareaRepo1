<script lang="ts" setup>
import { DsTypography } from "~/components/DesignSystem";
import SideForm from "./form.vue";

interface IProp {
  label?: string;
  keyName?: string;
  sidesDefault: Record<string, number>;
}

const props = withDefaults(defineProps<IProp>(), {
  label: "Padding",
  keyName: "padding",
  sidesDefault: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

const sides = ref(props.sidesDefault);
const emit = defineEmits(["handlerChange"]);

watch(
  sides,
  (newd) => {
    emit("handlerChange", { [props.keyName]: newd });
  },
  { deep: true }
);
</script>

<template>
  <div class="hover:bg-blue-100">
    <DsTypography class="text-ms mb-0" variant="span"
      >{{ label }}:</DsTypography
    >
    <div class="ml-2">
      <SideForm side="Left" v-model="sides.left" />
      <SideForm side="Right" v-model="sides.right" />
      <SideForm side="Top" v-model="sides.top" />
      <SideForm side="Bottom" v-model="sides.bottom" />
    </div>
  </div>
</template>
