<script lang="ts" setup>
import {inputSizes} from "../../../common/propsStyle";
import type {ISize, ITextType} from "../../../interfaces/elements";
import generateUniqueId from "../../../utils/generateUniqueId";
import useFocus from "../../../composables/useFocus";
import {translateError} from "../../../utils/translateErrorMessage";
import buildAriaLabels from "../../../utils/buildAriaLabels";
import {computed, ref, onMounted} from "vue";
import type {PropType, Ref} from "vue";

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: "",
    },

    type: {
        type: String as () => ITextType,
        default: "text",
    },
    id: {
        type: String,
    },

    size: {
        type: String as () => ISize,
        default: "full",
    },

    rounded: {
        type: Boolean,
        default: true,
    },

    disabled: {
        type: Boolean,
        default: false,
    },

    readOnly: {
        type: Boolean,
        default: false,
    },

    required: {
        type: Boolean,
        default: false,
    },

    focus: {
        type: Boolean,
        default: false,
    },

    label: {
        type: String,
        default: "Default label",
    },

    placeholder: {
        type: String,
        default: '',
    },

    helpMessage: {
        type: String as PropType<string | null>,
        default: null,
    },

    error: {
        type: String as () => string | null | undefined | Ref<string>,
        default: null,
    },

    class: {
        type: String,
        default: "",
    },
});

const uniqueID = ref("");
onMounted(() => {
    uniqueID.value = generateUniqueId("typography");
});
const labelId = computed(() => `${uniqueID.value}-label`);
const errorMessageId = computed(() => `${uniqueID.value}-error-message`);
const helpMessageId = computed(() => `${uniqueID.value}-help-message`);

const defaultClasses = "hover:border-dark-500 border p-2 block ";

const filterClassComp = computed(() => {
    // return filterClass(predefinedClasses, props.class);
    return props.class;
});

const cssClasses = computed(() => [
    inputSizes[props.size],
    {
        rounded: props.rounded,
        error: hasError.value,
    },
    defaultClasses,
]);

const {elementRef: inputRef} = useFocus(
    () => props.focus,
    () => props.error,
);

const emit = defineEmits(["update:modelValue", "blur"]);

const model = computed({
    get() {
        return props.modelValue;
    },

    set(value) {
        emit("update:modelValue", value);
    },
});

const hasError = computed(() => !!props.error);
const errorMessage = computed(() => translateError(props.error as any));

const ariaLabels = computed(() =>
    buildAriaLabels(props, {
        label: labelId.value,
        error: errorMessageId.value,
        helpMessage: helpMessageId.value,
    }),
);

function handleBlur() {
    emit("blur");
}

const containerSize = computed(() => {
    return inputSizes[props.size];
});
</script>

<template>
    <div :class="['mb-4', containerSize, filterClassComp]">
        <label v-if="label" :id="labelId" :for="uniqueID" class="mb-2">
            {{ label }}
            <span v-if="required" aria-hidden="true" class="required-marker">*</span>
        </label>

        <input
            :id="id ?? uniqueID"
            ref="inputRef"
            v-model="model"
            :aria-invalid="hasError"
            :aria-labelledby="ariaLabels"
            :aria-required="required"
            :class="cssClasses"
            :disabled="disabled"
            :placeholder="placeholder"
            :readonly="readOnly"
            :type="`${type}`"
            @blur="handleBlur"
        />

        <label
            v-if="hasError"
            :id="errorMessageId"
            class="error-message block mb-0"
        >
            {{ errorMessage }}
        </label>

        <label v-if="helpMessage" :id="helpMessageId" class="help-message block">
            {{ helpMessage }}
        </label>
    </div>
</template>
