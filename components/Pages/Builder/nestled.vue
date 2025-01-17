<template>
  <draggable
    class="dragArea"
    tag="div"
    :list="tasks"
    :group="{ name: 'g1' }"
    item-key="id"
  >
    <template #item="{ element }">
      <div>
        <WrapperContainer
          :idm="element.id"
          :ids="element.ids"
          :idr="element.idr"
          :idc="element.idc"
        >
          <div v-if="element.type !== 'module'">
            {{ element.type }} {{ element.id }}
          </div>

          <modulec v-if="element.type === 'module'" :element="element" />
        </WrapperContainer>

        <NesteDraggable
          :ids="element.idS"
          :idr="element.idR"
          :idc="element.idC"
          v-if="element.items"
          :tasks="element.items"
        />
      </div>
    </template>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import modulec from "./moduleComponent.vue";
import WrapperContainer from "./WrapperContainer.vue";

export default {
  props: {
    tasks: {
      required: true,
      type: Array,
    },
    idS: {
      required: false,
      type: String,
    },
    idR: {
      required: false,
      type: String,
    },
    idC: {
      required: false,
      type: String,
    },
  },
  components: {
    draggable,
    modulec,
    WrapperContainer,
  },
  name: "NesteDraggable",
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
  padding-left: 0.5rem;
}
</style>
