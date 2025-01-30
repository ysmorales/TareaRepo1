<script lang="ts" setup>
import draggable from "vuedraggable";
import uniqid from "uniqid";
import { useBuilderStore } from "~/stores/builderStore";
import { DsTypography, DsInput, DsIcon } from "~/components/DesignSystem";
import Item from "./CardItemComponent.vue";

const emit = defineEmits(["handlerClick", "handlerSelect"]);

interface IProp {
  inModal?: boolean;
  selected?: string;
}
const props = withDefaults(defineProps<IProp>(), { inModal: false });

const searchText = ref("");
const store = useBuilderStore();
const { changeCurrentDragItem, addItemToForm } = toRefs(store);

function dragStart(currentKeyName: string) {
  if (currentKeyName) {
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

const modulePrevSelect = ref();

const handlerPreSelect = (keyName) => {
  emit("handlerClick", keyName);
};

const handlerSelect = (keyName) => {
  console.log("aquiii");
  emit("handlerSelect", keyName);
};

const cloneDog = ({ id }) => ({ type: "module", id: uniqid("m"), item: id });
</script>

<template>
  <div class="p-2">
    <DsInput
      v-model="searchText"
      placeholder="Buscador"
      type="text"
      :label="''"
    />
  </div>
  <div>
    <div class="ml-2 flex">
      <DsIcon
        name="info-circle"
        size="default"
        color="primary"
        class="mt-[-5px]"
      />
      <DsTypography class="text-primary-500 ml-2 text-sm">{{
        inModal ? "Selecciona un componente" : "Arrastra uno o más componentes"
      }}</DsTypography>
    </div>
    <DsTypography> Componentes </DsTypography>
    <div
      class="flex flex-col overflow-auto"
      :class="[
        !inModal ? ' max-h-[calc(100vh-210px)]' : 'max-h-[calc(100vh-350px)]',
      ]"
    >
      <div
        aria-describedby="vfb-elements-description"
        aria-label="Elements"
        class="flex flex-col space-y-1 p-2"
        tabindex="0"
      >
        <draggable
          v-if="!inModal"
          class="dragArea list-group"
          :list="listItems"
          :group="{ name: 'column', pull: 'clone', put: false }"
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
              :mode="inModal ? 'full' : 'side'"
            />
          </template>
        </draggable>
        <div v-if="inModal">
          <Item
            v-for="element in listItems"
            :key="element.id"
            :icon="getStories()[element.id].icon ?? ''"
            :name="getNameComponentKey(element.id)"
            :mode="inModal ? 'full' : 'side'"
            :keyName="element.id"
            @handler-click="handlerPreSelect(element.id)"
            @dbl-click="handlerSelect(element.id)"
            :active="selected === element.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>
