<script lang="ts" setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  variant: {
    type: String as () => "circular" | "text" | "rectangular" | "rounded",
    default: "text",
  },
  width: {
    type: [String, Number],
    default: "100%",
  },
  height: {
    type: [String, Number],
    default: "1rem",
  },
  fontSize: {
    type: String,
    default: "1rem",
  },
});

const classes = computed(() => {
  let baseClasses = "bg-slate-200 animate-pulse mb-2"; // Added margin-bottom for separation
  let widthClass =
    props.width === "number" ? `w-[${props.width}px]` : `w-[${props.width}]`;
  let heightClass =
    props.height === "number" ? `h-[${props.height}px]` : `h-[${props.height}]`;
  let fontSizeClass = `text-[${props.fontSize}]`;

  let variantClass = "";
  if (props.variant === "circular") {
    variantClass = "rounded-full w-[40px] h-[40px]";
  }
  if (props.variant === "text") {
    variantClass = "h-4";
  }
  if (props.variant === "rectangular") {
    variantClass = "h-16";
  }
  if (props.variant === "rounded") {
    variantClass = "rounded-lg h-16";
  }

  return `${baseClasses} ${widthClass} ${heightClass} ${fontSizeClass} ${variantClass}`;
});
</script>

<template>
  <div :class="classes">&nbsp;</div>
</template>
