<script lang="ts" setup>
import nestled from "./nestled.vue";
import AddBlock from "./AddBlock.vue";
import TreeNode from "./DefaultAreaContainer.vue";
import SubscribeInternalNumChildren from "./SubscribeInternalNumChildren.vue";

interface IProp {
  element?: any;
  areaMode: boolean;
  seeOnly: boolean;
}

const props = withDefaults(defineProps<IProp>(), {});
</script>

<template>
  <component
    :is="getComponentKey(element.item)"
    v-bind="filterProps(element.props)"
    :in-editor="!seeOnly"
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
        />

        <SubscribeInternalNumChildren
          v-if="isNotEmpty(slotData?.numChildrens)"
          :numChildrens="slotData?.numChildrens"
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
