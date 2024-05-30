<script lang="ts" setup>
import DsIcon from "../../basic/icon/DsIcon.vue";
import DsTypography from "../../../components/basic/typography/DsTypography.vue";
import generateUniqueId from "../../../utils/generateUniqueId";
import {loremItsum} from "../../../utils/loremItsum";
import {ref, computed, onMounted} from "vue";

const props = defineProps({
    class: {
        type: String,
        default: "",
    },
    type: {
        type: String as () => IAccordionType,
        default: "standard",
    },

    triggerText: {
        type: String,
        default: "Default trigger",
    },

    title: {
        type: String,
        default: "Default title",
    },

    collapsed: {
        type: Boolean as () => boolean | string,
        default: 'disability',
    },

    children: {
        type: String,
        default: loremItsum,
    },
});
const emit = defineEmits(['toggleCollapse'])

const uniqueId = computed(() => generateUniqueId("accordion"));

const isCollapsed = ref(false);

const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
    emit('toggleCollapse');
};

const defaultClasses = computed(() => {
    let result = "collapsed border";

    if (isCard.value) {
        result += " border-neutral-300 rounded-lg overflow-hidden";
    }

    return result;
});

const filterClassComp = computed(() => {
    // return filterClass(predefinedClasses, props.class);
    return props.class
});

const cssClasses = computed(() => [
    filterClassComp.value,
    defaultClasses.value,
]);

const triggerClass = computed(() => {
    let result = "flex justify-between items-center w-full ";

    switch (props.type) {
        case "standard":
            result += " border border-neutral-300 bg-neutral-100 py-2 px-4";
            break;

        case "card":
            result += " border-l-8 border-primary-500 py-3 px-4";
            break;
    }

    return result;
});

const contentCssClass = computed(() => {
    let result = "p-4";

    switch (props.type) {
        case "standard":
            result += " border-x border-b border-neutral-300";
            break;

        case "card":
            result += " border-l-8 border-primary-500";
            break;
    }

    return result;
});

const collapseTitleCssClass = computed(() => {
    let result = "font-robotoSlab text-neutral-700";

    switch (props.type) {
        case "standard":
            result += " text-xl";
            break;

        case "card":
            result += " text-2xl font-robotoSlab text-neutral-700";
            break;
    }

    return result;
});

const isStandard = computed(() => {
    return props.type === "standard";
});

const isCard = computed(() => {
    return props.type === "card";
});
const uniqueID = ref("");
onMounted(() => {
    uniqueID.value = generateUniqueId("accordion");
});
const collapsedMode = computed(() => {
    if (props.collapsed == 'disability') {
        return isCollapsed.value
    }
    return props.collapsed
})
</script>

<template>
    <div :class="[cssClasses, 'w-full']">
        <div class="collapse-trigger">
            <button
                :id="uniqueID"
                :aria-controls="uniqueId"
                :aria-expanded="collapsed=='disability'?!isCollapsed:collapsed as boolean"
                :class="[triggerClass, { 'rounded-b-none':(collapsed=='disability'?!isCollapsed:collapsed) }]"
                type="button"
                @click="toggleCollapse"
            >
                <span :class="[collapseTitleCssClass, 'text-xl']">
                    {{ title }}
                </span>

                <DsIcon
                    v-if="isStandard"
                    :name="'angle-'+(collapsedMode ? 'up' : 'down')"
                    size="small"
                />
                <span v-if="isCard" class="text-primary-500">
          {{ triggerText }}
        </span>
            </button>
        </div>

        <div v-if="collapsed=='disability'?!isCollapsed:collapsed" :id="uniqueId" :class="contentCssClass">
            <div :aria-labelledby="uniqueID" class="colap-cont">
                <slot>
                    <DsTypography>
                        {{ children }}
                    </DsTypography>
                </slot>
            </div>
        </div>
    </div>
</template>
