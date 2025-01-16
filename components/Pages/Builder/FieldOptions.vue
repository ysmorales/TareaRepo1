<script lang="ts" setup>
import Fields from "./FormBuilder/Fields.vue";

interface IProp {
  item: any;
}

const props = withDefaults(defineProps<IProp>(), {
  item: {},
});

const infoComponent = getComponentByName(props.item?.component?.__name);

const getAllInfoComponent = (keyNameProp) => ({
  ...props.item?.component?.props[keyNameProp],
  ...infoComponent?.argTypes[keyNameProp],
});
</script>

<template>
  <div class="m-2 mt-0">
    <div v-for="ii in Object.keys(item?.component?.props ?? {})">
      <Fields
        :fieldKey="ii"
        :fieldInfo="getAllInfoComponent(ii)"
        :name="item?.component?.__name"
        :id="item.id"
      />
    </div>
  </div>
</template>
