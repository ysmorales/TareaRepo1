<script lang="ts" setup>
import nestled from "./nestled.vue";
import AddBlock from "./AddBlock.vue";
import TreeNode from "./DefaultAreaContainer.vue";
import SubscribeInternalChanges from "./SubscribeInternalNumChildren.vue";

interface IProp {
  element?: any;
  areaMode: boolean;
  seeOnly: boolean;
  modelValue: any;
}

const props = withDefaults(defineProps<IProp>(), {});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.element.props.modelValue ?? props.modelValue;
  },

  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <component
    :is="getComponentKey(element.item)"
    v-bind="filterProps(element.props)"
    :in-editor="!seeOnly"
    v-model="model"
  >
    <template v-for="name in element.slots" v-slot:[name]="slotData">
      <div class="min-h-[300px]">
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
