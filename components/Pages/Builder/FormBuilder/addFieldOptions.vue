<script lang="ts" setup>
interface IProp {
  label?: string;
}

const props = withDefaults(defineProps<IProp>(), {
  label: "Add Background color",
});

const emit = defineEmits(["add"]);

const handlerAdd = () => {
  emit("add", {});
};
</script>

<template>
  <div class="toCenter" style="flex-direction: column">
    <div class="circleB" @click="handlerAdd">
      <div
        class="et-fb-icon et-fb-icon--add"
        for="colorPicker"
        style="
          fill: rgb(255, 255, 255);
          width: 28px;
          min-width: 28px;
          height: 28px;
          margin: -6px;
        "
      >
        <svg
          viewBox="0 0 28 28"
          preserveAspectRatio="xMidYMid meet"
          shape-rendering="geometricPrecision"
        >
          <g>
            <path
              d="M18 13h-3v-3a1 1 0 0 0-2 0v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z"
              fill-rule="evenodd"
            />
          </g>
        </svg>
      </div>
    </div>

    <div>
      <label class="labelAdd">{{ label }}</label>
    </div>
  </div>
</template>

<style scoped>
.circleB {
  outline: none;
  z-index: 1;
  position: relative;
  display: inline-block;
  background: transparent;
  max-height: 40px;
  border: 0;
  margin: 0;
  padding: 12px;
  box-sizing: border-box;
  transition: background 0.2s ease;
  color: #4c5866;
  font-family: Open Sans, Helvetica, Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px !important;
  overflow: hidden;
  vertical-align: middle;
  cursor: pointer;
  text-transform: none;
  min-height: 0;
  box-shadow: 5px 5px 15px rgba(43, 135, 218, 0.15);
  transition: padding 0.25s ease-in-out, margin 0.25s ease-in-out,
    bottom 0.25s ease-in-out;
  padding: 6px;
  background: #a3b0c2;
  border-radius: 100px;
}

.labelAdd {
  margin-top: 5px;
  color: #a3b0c2;
  display: block;
  margin: 0 0 5px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  cursor: default;
}

.toCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.circleB:hover {
  padding: 12px;
  margin: -6px;
  background: #a3b0c2;
}
</style>
