<template>
  <draggable
    :class="[
      areaMode === 'dragable'
        ? 'dragArea outline-blue-200 outline-dashed outline-[0.50px] pl-2 pb-2'
        : '',
      `is-${type ?? 'section'}`,
      {
        grid: type === 'row',
      },
      getClassRow(),
    ]"
    :tag="type !== 'section' ? 'div' : type"
    :list="items"
    :group="{
      name: type ?? 'column',
    }"
    :style="[getCustomStyleRow()]"
    item-key="id"
  >
    <template #item="{ element }">
      <WrapperContainer :type="element.type" :settings="element.settings">
        <OptionsContainer
          :type="element.type"
          :id="element.id"
          :area-mode="areaMode"
          :settings="element.settings"
        >
          <modulec
            v-if="element.type === 'module'"
            :element="element"
            :area-mode="areaMode"
          />
        </OptionsContainer>

        <div class="hidden">{{ element?.items?.length }} {{ element.id }}</div>

        <AddBlock
          v-if="
            !isNotEmpty(element.items ?? []) &&
            element.type !== 'module' &&
            areaMode === 'dragable'
          "
          :type="element.type"
          :id="element.id"
        />

        <NesteDraggable
          v-if="element.items && !element.item"
          :items="element.items"
          :type="element.type"
          :area-mode="areaMode"
          :settings="element.settings"
        />
      </WrapperContainer>
    </template>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import modulec from "./moduleComponent.vue";
import WrapperContainer from "./WrapperContainer.vue";
import OptionsContainer from "./OptionsContainer.vue";
import AddBlock from "./AddBlock.vue";
import { getCustomStyleRow, getClassRow } from "./helpers";

export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
    type: {
      required: false,
      type: String,
    },
    areaMode: {
      required: false,
      type: String,
    },
    settings: {
      required: false,
      type: Object,
    },
  },
  components: {
    draggable,
    modulec,
    WrapperContainer,
    OptionsContainer,
    AddBlock,
  },
  methods: {
    getCustomStyleRow: function () {
      return getCustomStyleRow(this);
    },
    getClassRow: function () {
      return getClassRow(this);
    },
  },
  name: "NesteDraggable",
};
</script>
<style scoped>
.dragArea {
  min-height: 80px;
}
</style>
