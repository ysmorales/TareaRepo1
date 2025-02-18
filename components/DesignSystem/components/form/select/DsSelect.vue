<script lang="ts" setup>
import {computed, ref, onMounted} from "vue";
import type {Ref, PropType} from "vue";
import type {ISizeText} from "../../../interfaces/elements";
import generateUniqueId from "../../../utils/generateUniqueId";
import useFocus from "../../../composables/useFocus";
import {translateError} from "../../../utils/translateErrorMessage";
import buildAriaLabels from "../../../utils/buildAriaLabels";
import type {ISelect} from "./interfaces";
import {sizeSelect} from "./library";
import Multiple from "./Multiple.vue";

const props = defineProps({
    modelValue: {
        type: [String, Array] as PropType<string | number | string[]>,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    labelStyle: {
        type: String,
    },
    error: {
        type: String as () => string | null | undefined | Ref<string>,
        default: null,
    },
    id: {
        type: String,
    },
    label: {
        type: String,
        default: "Default label",
    },
    size: {
        type: String as () => ISizeText,
        default: "full",
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
    exampleText: {
        type: Boolean,
        default: true,
    },
    helpMessage: {
        type: String as PropType<string | null>,
        default: null,
    },
    placeholder: {
        type: String,
        default: "Selecciona una opción",
    },
    focus: {
        type: Boolean,
        default: false,
    },
    option: {
        type: Array as () => ISelect[],
        default: [
            {value: "1", text: "option 1"},
            {value: "2", text: "option 2"},
            {value: "3", text: "option 3"},
        ],
    },
    class: {
        type: String,
        default: "",
    },
    addOption: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
});

const elementSizeComputed = computed(() => {
    const size = props.size || "full";
    return sizeSelect[size];
});

const {elementRef: selectRef} = useFocus(
    () => props.focus,
    () => props.error
);

const uniqueID = ref("");
onMounted(() => {
    uniqueID.value = generateUniqueId("select");
});
const labelId = computed(() => `${uniqueID.value}-label`);
const errorMessageId = computed(() => `${uniqueID.value}-error-message`);
const helpMessageId = computed(() => `${uniqueID.value}-help-message`);

const filterClassComp = computed(() => {
    return props.class;
});

const emit = defineEmits(["update:modelValue", "select"]);

function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = props.multiple
        ? Array.from(
            document.querySelectorAll(`input[name="${uniqueID.value}"]:checked`),
            (input) => (input as HTMLInputElement).value
        )
        : target.value;
    model.value = value;
    emit("select", e);
}

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
    })
);
</script>

<template>
    <div class="mb-5 w-full">
        <label
            v-if="label"
            :id="labelId"
            :class="labelStyle"
            :for="uniqueID"
            class="m-0"
        >
            {{ label }}<span v-if="required" aria-hidden="true" class="required-marker">*</span>
        </label>

        <div class="relative">
            <!--                <div v-for="el in option" :key="el.value" class="flex items-center">-->
            <!--                    <input-->
            <!--                        :id="`${uniqueID}-${el.value}`"-->
            <!--                        :checked="model.includes(el.value)"-->
            <!--                        :name="uniqueID"-->
            <!--                        :value="el.value"-->
            <!--                        class="mr-2"-->
            <!--                        type="checkbox"-->
            <!--                        @input="handleInput"-->
            <!--                    />-->
            <!--                    <label :for="`${uniqueID}-${el.value}`">{{ el.text }}</label>-->
            <!--                </div>-->
            <multiple v-if="multiple" v-model="model as string[]" :options="option"/>
            <select
                v-else
                :id="id ?? uniqueID"
                ref="selectRef"
                v-model="model"
                :aria-invalid="hasError"
                :aria-labelledby="ariaLabels"
                :aria-required="required"
                :class="[
          filterClassComp,
          { error: hasError },
          'block',
          'border',
          elementSizeComputed,
          { rounded: rounded },
          { 'hide-arrow': loading },
        ]"
                :disabled="disabled || loading"
                class="h-[42px] p-2"
                @input="handleInput"
            >
                <slot>
                    <option :value="''" disabled>
                        {{ exampleText ? placeholder : "" }}
                    </option>
                    <option v-if="addOption" :value="'100'">Agregar opción...</option>
                    <option v-for="el in option" :key="el.value" :value="el.value">
                        {{ el.text }}
                    </option>
                </slot>
            </select>
            <div
                v-if="loading"
                class="absolute inset-y-0 right-0 flex items-center pr-3"
            >
                <svg
                    class="animate-spin h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        class="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </div>

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

<style scoped>
.hide-arrow {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image: none !important;
}

.multiple-select {
    height: auto;
    min-height: 42px;
    padding: 0.5rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.multiple-select:focus-within {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.5);
}

input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    width: 1rem;
    height: 1rem;
    display: inline-block;
    position: relative;
}

input[type="checkbox"]:checked {
    background-color: #2563eb;
    border-color: #2563eb;
}

input[type="checkbox"]:checked::after {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 0.5rem;
    height: 0.5rem;
    background-color: #fff;
    border-radius: 0.125rem;
}
</style>