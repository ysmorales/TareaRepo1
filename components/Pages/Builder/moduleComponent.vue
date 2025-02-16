<script lang="ts" setup>
import { useBuilderStore } from "~/stores/builderStore";
import nestled from "./nestled.vue";
import AddBlock from "./AddBlock.vue";
import TreeNode from "./DefaultAreaContainer.vue";
import SubscribeInternalChanges from "./SubscribeInternalNumChildren.vue";

import { getErrorMessage } from "./helpers";

interface IProp {
  element?: any;
  areaMode: boolean;
  seeOnly: boolean;
  modelValue: any;
}

const props = withDefaults(defineProps<IProp>(), {});

const emit = defineEmits(["update:modelValue"]);

const store = useBuilderStore();
const { validateForm } = toRefs(store);

const model = computed({
  get() {
    return props.element?.props?.modelValue ?? props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  {{ element.props }}
  <component
    :is="getComponentKey(element.item)"
    v-bind="filterProps(element.props)"
    :in-editor="!seeOnly"
    :error="
      validateForm
        ? getErrorMessage(
            validateForm[getNameFieldFormNode(element)]?.$errors[0]
          )
        : null
    "
    v-model="model"
  >
    <template v-for="name in element.slots" v-slot:[name]="slotData">
      <div
        :class="{
          'min-h-[300px]': !isNotEmpty(element.items ?? []) && !seeOnly,
        }"
      >
        <AddBlock
          v-if="!isNotEmpty(element.items ?? []) && !seeOnly"
          type="slotSection"
          emptyList
          :id="element.id"
        />
        <nestled
          v-if="element.items && !seeOnly"
          :items="element.items"
          :type="element.type"
          :area-mode="areaMode"
          :settings="element.settings"
          :indexShow="slotData?.indexShow"
          no-actions
          :adjust-top="!isNotEmpty(element.items)"
        />

        <SubscribeInternalChanges
          v-if="isNotEmpty(slotData?.action)"
          :action="slotData?.action"
          :id="element.id"
        />
        <TreeNode
          v-if="element.items && seeOnly"
          :items="element.items"
          :indexShow="slotData?.indexShow"
        />
      </div>
    </template>
  </component>
</template>
