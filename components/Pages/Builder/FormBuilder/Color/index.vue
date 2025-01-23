<script lang="ts" setup>
import { DsTypography } from "~/components/DesignSystem";

interface IProp {
  label?: string;
  keyName?: string;
}

const props = withDefaults(defineProps<IProp>(), {
  label: "Background color",
  keyName: "backgroundColor",
});

const listColors = [
  "rgb(255, 255, 255)",
  "rgb(0, 0, 0)",
  "rgb(36, 36, 36)",
  "rgb(71, 71, 71)",
  "rgb(107, 107, 107)",
  "rgb(143, 143, 143)",
  "rgb(179, 179, 179)",
  "rgb(214, 214, 214)",
  "rgb(252, 149, 105)",
  "rgb(224, 43, 32)",
  "rgb(224, 31, 69",
  "rgb(90, 12, 28)",
  "rgb(18, 135, 111)",
  "rgb(31, 224, 186)",
  "rgb(31, 215, 224)",
  "rgb(136, 196, 221)",
  "rgb(255, 243, 71)",
  "rgb(224, 153, 0)",
  "rgb(224, 97, 0)",
  "rgb(71, 31, 0)",
  "rgb(0, 69, 122)",
  "rgb(0, 127, 224)",
  "rgb(0, 71, 224)",
  "rgb(90, 100, 237)",
  "rgb(210, 255, 87)",
  "rgb(237, 240, 0)",
  "rgb(240, 184, 0)",
  "rgb(87, 66, 0)",
  "rgb(0, 32, 138)",
  "rgb(0, 56, 240)",
  "rgb(4, 0, 240)",
  "rgb(139, 104, 238)",
  "rgb(141, 249, 108)",
  "rgb(124, 218, 36)",
  "rgb(170, 219, 36)",
  "rgb(68, 88, 14)",
  "rgb(51, 21, 132)",
  "rgb(85, 36, 219)",
  "rgb(131, 36, 219)",
  "rgb(200, 139, 218)",
  "rgb(56, 116, 255)",
  "rgb(12, 113, 195)",
  "rgb(13, 160, 197)",
  "rgb(3, 43, 53)",
  "rgb(101, 25, 6)",
  "rgb(197, 49, 13)",
  "rgb(197, 95, 13)",
  "rgb(223, 183, 88)",
  "rgb(223, 82, 255)",
  "rgb(131, 0, 233)",
  "rgb(74, 0, 235)",
  "rgb(26, 0, 82)",
  "rgb(91, 133, 0)",
  "rgb(160, 235, 0)",
  "rgb(102, 235, 0)",
  "rgb(124, 238, 99)",
];
const colorsSelects = [
  "rgb(0, 0, 0)",
  "rgb(255, 255, 255)",
  "rgb(224, 43, 32)",
  "rgb(224, 153, 0)",
  "rgb(237, 240, 0)",
  "rgb(124, 218, 36)",
  "rgb(12, 113, 195)",
  "rgb(131, 0, 233)",
];

const value = ref("");

const emit = defineEmits(["handlerChange"]);

watch(
  value,
  (newd) => {
    emit("handlerChange", { backgroundColor: newd });
  },
  { deep: true }
);

const showAllColors = ref(false);
const toogleModeShow = () => {
  showAllColors.value = !showAllColors.value;
};
const handlerChange = (customColor) => {
  value.value = customColor;
};
</script>

<template>
  <div class="hover:bg-blue-100">
    <DsTypography class="text-ms mb-0" variant="span"
      >{{ label }}:</DsTypography
    >

    <div class="color-picker">
      <input
        type="color"
        v-model="value"
        id="colorPicker"
        :style="{ padding: 0 }"
      />
    </div>

    <div
      v-if="isNotEmpty(value)"
      style="
        background-color: white;
        padding: 10px;
        border-radius: 10px;
        color: black;
      "
    >
      <span>Click para más opciones de colores </span>

      <div class="containerColorsList">
        <div class="selectorMode">
          <div
            @click="toogleModeShow"
            class="et-fb-icon et-fb-icon--expand-palette"
            style="
              fill: rgb(162, 176, 193);
              width: 28px;
              min-width: 28px;
              height: 28px;
            "
          >
            <svg
              viewBox="0 0 28 28"
              preserveAspectRatio="xMidYMid meet"
              shape-rendering="geometricPrecision"
            >
              <g>
                <circle cx="14" cy="20" r="2" />
                <circle cx="14" cy="13" r="2" />
                <circle cx="14" cy="6" r="2" />
              </g>
            </svg>
          </div>
        </div>

        <div class="listColors">
          <div
            v-for="cc in showAllColors ? listColors : colorsSelects"
            class="colorCC"
            :style="{ backgroundColor: cc }"
            @click="() => handlerChange(cc)"
          />
        </div>

        <div class="noColor">
          <div
            class="colorCC"
            @click="() => handlerChange('transparent')"
            currentitem="false"
            :style="{
              backgroundImage:
                'url(https://www.kunapak.com/wp-content/themes/Divi/includes/builder/images/no-color.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.colorCC {
  border-radius: 26px;
  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  height: 26px;
  width: 26px;
  margin: 1.5px;
}

.containerColorsList {
  display: flex;
}
.listColors {
  display: flex;
  flex-wrap: wrap;
}

.selectorMode {
  width: 30px;
}
.colorCC,
.selectorMode:hover {
  cursor: pointer;
}
</style>
