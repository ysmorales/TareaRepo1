<template>
  <draggable
    class="dragArea"
    tag="div"
    :list="items"
    :group="{ name: 'g1' }"
    item-key="id"
  >
    <template #item="{ element }">
      <WrapperContainer>
        <OptionsContainer :type="element.type" :id="element.id">
          <div v-if="element.type !== 'module'">
            {{ element.type }} {{ element.id }}
          </div>

          <modulec v-if="element.type === 'module'" :element="element" />
        </OptionsContainer>

        <NesteDraggable v-if="element.items" :items="element.items" />
      </WrapperContainer>
    </template>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import modulec from "./moduleComponent.vue";
import WrapperContainer from "./WrapperContainer.vue";
import OptionsContainer from "./OptionsContainer.vue";

export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
  components: {
    draggable,
    modulec,
    WrapperContainer,
    OptionsContainer,
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
