<template>
  <draggable
    :class="[
      areaMode === 'dragable' ? 'dragArea' : '',
      `is-${type ?? 'section'}`,
      {
        grid: type === 'row',
      },
      getClassRow(),
    ]"
    :tag="type !== 'section' ? 'div' : type"
    :list="items"
    :group="{
      name: type ?? 'section',
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
        >
          <modulec v-if="element.type === 'module'" :element="element" />
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
          v-if="element.items"
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
      const calcRem = (value) => `${value / 4}rem`;
      return {
        marginLeft: calcRem(this.settings?.margin?.left),
        marginRight: calcRem(this.settings?.margin?.right),
        marginTop: calcRem(this.settings?.margin?.top),
        marginBottom: calcRem(this.settings?.margin?.bottom),

        paddingLeft: calcRem(this.settings?.padding?.left),
        paddingRight: calcRem(this.settings?.padding?.right),
        paddingTop: calcRem(this.settings?.padding?.top),
        paddingBottom: calcRem(this.settings?.padding?.bottom),

        backgroundColor: this.settings?.backgroundColor,
      };
    },
    getClassRow: function () {
      const colsNum =
        this.type === "row" && this.settings
          ? `grid-cols-${this.settings?.rowNumCols ?? "12"}`
          : "";

      return [colsNum];
    },
  },
  name: "NesteDraggable",
};
</script>
<style scoped>
.dragArea {
  min-height: 80px;
  outline: 1px dashed;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
