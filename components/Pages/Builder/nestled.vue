<template>
  <draggable
    class="dragArea"
    tag="ul"
    :list="tasks"
    :group="{ name: 'g1' }"
    item-key="id"
  >
    <template #item="{ element }">
      <li>
        <p>{{ element.id }}</p>
        <div>{{ element.type }}</div>
        <div>{{ element.item }}</div>
        <NesteDraggable
          :ids="element.idS"
          :idr="element.idR"
          :idc="element.idC"
          v-if="element.items"
          :tasks="element.items"
        />
      </li>
    </template>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";

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
  },
  name: "NesteDraggable",
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
  padding-left: 10px;
}
</style>
