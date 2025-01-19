<script lang="ts" setup>
import draggable from "vuedraggable";
import uniqid from "uniqid";
import { useBuilderStore } from "~/stores/builderStore";
import { DsTypography, DsInput } from "~/components/DesignSystem";
import Item from "./CardItemComponent.vue";

const searchText = ref("");
const store = useBuilderStore();
const { changeCurrentDragItem, addItemToForm } = toRefs(store);

function dragStart(currentKeyName: string) {
  if (currentKeyName) {
    console.log(currentKeyName, "tttt");
    changeCurrentDragItem.value(currentKeyName);
  }
}

const listItems = computed(() =>
  getAllComponents()
    .filter((d) =>
      getNameComponentKey(d)
        .toLowerCase()
        .includes(searchText.value.toLowerCase())
    )
    .map((id) => ({ id }))
);

const addComponent = (keyName) => {
  dragStart(keyName);
  addItemToForm.value();
};
const cloneDog = ({ id }) => ({ type: "module", id: uniqid("m"), item: id });
</script>

<template>
  <div class="p-2">
    <DsInput v-model="searchText" placeholder="Buscador" type="text" />
  </div>
  <div>
    <DsTypography> Componentes </DsTypography>
    <div class="flex flex-col overflow-auto max-h-[calc(100vh-210px)]">
      <div
        aria-describedby="vfb-elements-description"
        aria-label="Elements"
        class="flex flex-col space-y-1 p-2"
        tabindex="0"
      >
        <draggable
          class="dragArea list-group"
          :list="listItems"
          :group="{ name: 'rowcol', pull: 'clone', put: false }"
          :clone="cloneDog"
          item-key="id"
        >
          <template #item="{ element }">
            <Item
              :key="element.id"
              :icon="getStories()[element.id].icon ?? ''"
              :name="getNameComponentKey(element.id)"
              :keyName="element.id"
              @dbl-click="addComponent(element.id)"
            />
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
