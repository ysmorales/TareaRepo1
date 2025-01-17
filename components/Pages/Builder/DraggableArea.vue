<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import { toRefs } from "vue";
import Sections from "./Section";

const store = useBuilderStore();
const { addItemToForm } = toRefs(store);
const emit = defineEmits(["property", "remove", "validate"]);

const drop = () => {
  addItemToForm.value();
};
</script>

<template>
  <!-- @drop="drop"
  @dragover.prevent -->
  <div
    :draggable="false"
    class="w-full pb-20 md:min-w-[723px] border border-gray-300 shadow-md rounded-md p-5 items-center overflow-auto min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)]"
  >
    <Sections />
    <!-- <div
      v-if="builderItems.length == 0"
      class="flex flex-col justify-center h-full items-center"
    >
      <DsIcon class="mb-4" name="hand-pointer" size="medium" />
      <p class="mb-2">Drag elements here</p>
      <p>Grab an element from the left and drop it here</p>
    </div>
    <div
      v-for="(item, index) in builderItems"
      :key="index"
      class="w-full relative cursor-pointer"
      @mouseleave="showIcons[index] = false"
      @mouseover="showIcons[index] = true"
      @dragstart.prevent
    >
      <div class="h-[25px]">
        <IconArea
          v-show="showIcons[index] || selectedItem === index"
          :index="index"
          :item="item"
          @removeItem="removeItem"
          @validate="handleValidate(item, index)"
        />
      </div>
      <div
        :class="[
          'relative border hover:border-blue-500 cursor-pointer z-10 mb-3',
          { 'border-blue-500': selectedItem === index },
          { 'border-transparent': selectedItem !== index },
        ]"
        @click="viewProperties(item, index)"
      >
        <component
          :is="item.component"
          v-bind="filterProps(item.props || {})"
        />
        <div
          :class="[
            'absolute inset-0 ',
            {
              'bg-blue-500 opacity-20 border border-blue-500 ':
                selectedItem === index,
            },
          ]"
        ></div>
      </div> 
    </div>-->
  </div>
</template>
