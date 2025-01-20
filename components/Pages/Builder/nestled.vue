<template>
  <draggable
    :class="[
      'dragArea',
      `is-${type ?? 'section'}`,
      {
        'grid grid-cols-12': type === 'row',
      },
    ]"
    :tag="type !== 'section' ? 'div' : type"
    :list="items"
    :group="{
      name:
        type === 'module' || type === 'column'
          ? 'rowcol'
          : type === 'row'
          ? 'row'
          : 'section',
    }"
    item-key="id"
  >
    <template #item="{ element }">
      <WrapperContainer :type="element.type">
        <OptionsContainer :type="element.type" :id="element.id">
          <modulec v-if="element.type === 'module'" :element="element" />
        </OptionsContainer>

        <div class="hidden">{{ element?.items?.length }} {{ element.id }}</div>

        <AddBlock
          v-if="!isNotEmpty(element.items ?? []) && element.type !== 'module'"
        />

        <NesteDraggable
          v-if="element.items"
          :items="element.items"
          :type="element.type"
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
  },
  components: {
    draggable,
    modulec,
    WrapperContainer,
    OptionsContainer,
    AddBlock,
  },
  name: "NesteDraggable",
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
