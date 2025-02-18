<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import DsIcon from "../../basic/icon/DsIcon.vue";
import DsTypography from "../../../components/basic/typography/DsTypography.vue";
import generateUniqueId from "../../../utils/generateUniqueId";
import { loremItsum } from "../../../utils/loremItsum";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "standard",
  },
  triggerText: {
    type: String,
    default: "Default trigger",
  },
  title: {
    type: String,
    default: "Default title",
  },
  children: {
    type: String,
    default: loremItsum,
  },
});
const emit = defineEmits(["toggleCollapse"]);

const uniqueId = computed(() => generateUniqueId("accordion"));

const isCollapsed = ref(true);

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
  emit("toggleCollapse");
};

const defaultClasses = computed(() => {
  let result = "collapsed";

  if (isCard.value) {
    result += " border-primary-500 rounded-md overflow-hidden";
  }

  return result;
});

const filterClassComp = computed(() => {
  // return filterClass(predefinedClasses, props.class);
  return props.class;
});

const cssClasses = computed(() => [
  filterClassComp.value,
  defaultClasses.value,
]);

const triggerClass = computed(() => {
  let result = "flex justify-between items-center w-full text-left ";

  switch (props.type) {
    case "standard":
      result += "bg-white py-5 px-4";
      break;

    case "card":
      result += " border-l-8 border-primary-500 py-5 px-4 ";
      break;
  }

  return result;
});

const contentCssClass = computed(() => {
  let result = "p-4 pt-0";

  switch (props.type) {
    case "standard":
      result += " border-x border-b border-primary-500 bg-white rounded-b-md";
      break;

    case "card":
      result += " border-l-8 border-primary-500";
      break;
  }

  return result;
});

const collapseTitleCssClass = computed(() => {
  let result = "font-inriaSansBold";

  if (!isCollapsed.value) {
    result += " text-black"; // Cambia el color a negro cuando está cerrado
  } else {
    switch (props.type) {
      case "standard":
        result += " text-[28px] text-primary-500";
        break;

      case "card":
        result += " text-[28px] font-inriaSansBold text-primary-500";
        break;
    }
  }

  return result;
});

const isStandard = computed(() => {
  return props.type === "standard";
});

const isCard = computed(() => {
  return props.type === "card";
});
const uniqueID = ref("");
onMounted(() => {
  uniqueID.value = generateUniqueId("accordion");
});
</script>

<template>
  <div :class="[cssClasses, 'w-full']">
    <div class="collapse-trigger">
      <button
        :id="uniqueID"
        :aria-controls="uniqueId"
        :aria-expanded="isCollapsed"
        :class="[
          triggerClass,
          { 'rounded-b-none': isCollapsed },
          { 'border-b-0': isCollapsed },
          { 'text-primary-500': isCollapsed },
          { 'border-primary-500': isCollapsed },
        ]"
        class="active:ring-0 hover:ring-0"
        type="button"
        @click="toggleCollapse"
      >
        <slot name="header"
          ><span :class="[collapseTitleCssClass, 'text-[28px]']">
            {{ title }}
          </span></slot
        >
        <DsIcon
          v-if="isStandard"
          :name="'angle-' + (isCollapsed ? 'up' : 'down')"
          size="default"
        />
        <span v-if="isCard" class="text-primary-500">
          {{ triggerText }}
        </span>
      </button>
    </div>

    <div v-if="isCollapsed" :id="uniqueId" :class="contentCssClass">
      <div :aria-labelledby="uniqueID">
        <slot>
          <hr class="pb-4 border-neutral-300" />
          <DsTypography>
            {{ children }}
          </DsTypography>
        </slot>
      </div>
    </div>
  </div>
</template>
