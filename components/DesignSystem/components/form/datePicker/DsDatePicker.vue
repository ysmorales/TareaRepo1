<script lang="ts" setup>
import DsSelect from "../select/DsSelect.vue";
import { months } from "./library";
import { days, years } from "./utils";
import type { InputType } from "./interface";
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";
import type { Ref} from "vue";
import {computed,ref,watch,onMounted} from "vue";
import generateUniqueId from "../../../utils/generateUniqueId";

type DateKind = "finalDay" | "finalMonth" | "finalYear";

const props = defineProps({
  modelValue: {
    type: Date as PropType<Date | null>,
    default: null,
  },

  error: {
    type: String,
    default: null,
  },
  id: {
    type: String,
  },

  rounded: {
    type: Boolean,
    default: false,
  },

  focus: {
    type: Boolean,
    default: false,
  },

  label: {
    type: String,
    default: "Fecha",
  },

  hideLabel: {
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

  class: {
    type: String,
    default: "",
  },
});

const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

const calculateValue = (type: DateKind) =>
  computed(() => {
    if (!props.modelValue) {
      return undefined;
    }
    switch (type) {
      case "finalDay":
        return props.modelValue?.getDate();

      case "finalYear":
        return props.modelValue?.getFullYear();

      case "finalMonth":
        const month = props.modelValue?.getMonth();

        return month + 1;
    }
  });

const finalDay = calculateValue("finalDay");
const finalMonth = calculateValue("finalMonth");
const finalYear = calculateValue("finalYear");
const day = ref(finalDay.value);
const month = ref(finalMonth.value);
const year = ref(finalYear.value);

watch(finalDay, (newValue) => {
  day.value = newValue;
});

watch(finalYear, (newValue) => {
  year.value = newValue;
});

watch(finalMonth, (newValue) => {
  month.value = newValue;
});

const emit = defineEmits(["update:modelValue"]);

// Function to handle the input event and update dateParts
const inputs: Record<InputType, Ref<number | undefined>> = { day, month, year };

function handleInput(e: Event, type: InputType) {
  const target = e.target as HTMLInputElement;

  // Actualizar la ref relevante basándose en 'type'
  if (inputs[type]) {
    inputs[type].value = parseInt(target.value);
  }
}

// Function to evaluate if date is complete and emit event
function emitIfComplete() {
  if (day.value && month.value && year.value && month.value !== 0) {
    emit("update:modelValue", new Date(year.value, month.value - 1, day.value));
  }
}

// Wrapper function for input event handling and emission
function emitCompleteDate(e: Event, type: InputType) {
  handleInput(e, type);
  emitIfComplete();

  return null;
}

const DAY_NOT_SELECTED = "Debe seleccionar el día";
const MONTH_NOT_SELECTED = "Debe seleccionar el mes";
const YEAR_NOT_SELECTED = "Debe seleccionar el año";

const dayError = computed<any>(() => {
  return hasError.value && !day.value ? DAY_NOT_SELECTED : null;
});

const monthError = computed<any>(() => {
  return hasError.value && !month.value ? MONTH_NOT_SELECTED : null;
});

const yearError = computed<any>(() => {
  return hasError.value && !year.value ? YEAR_NOT_SELECTED : null;
});

const hasError = computed(() => !!props.error);
const uniqueID = ref("");
onMounted(() => {
  uniqueID.value = generateUniqueId("datePicker");
});

function handleSelectYear(e: any) {
  emitCompleteDate(e, "year");
}

function handleSelectDay(e: any) {
  emitCompleteDate(e, "day");
}

function handleSelectMonth(e: any) {
  emitCompleteDate(e, "month");
}
</script>

<template>
  <fieldset
    :id="id ?? uniqueID"
    :class="filterClassComp"
    class="focus:border-lime-300 focus:shadow-lime-500 focus:shadow focus:outline-0"
    tabindex="0"
  >
    <legend v-if="!hideLabel" class="mb-2">
      {{ label }}
      <span v-if="required" aria-hidden="true" class="required-marker">*</span>
    </legend>

    <div class="grid grid-cols-3 gap-2">
      <div class="w-full">
        <DsSelect
          v-model="day"
          :disabled="disabled"
          :error="dayError"
          :focus="focus"
          :required="required"
          :rounded="rounded"
          label="Día"
          @select="handleSelectYear"
        >
          <option :value="0" disabled selected>Selecciona</option>
          <option
            v-for="tDay in days"
            :key="tDay"
            :selected="+tDay === day"
            :value="tDay"
          >
            {{ tDay < 10 ? `0${tDay}` : tDay }}
          </option>
        </DsSelect>
      </div>

      <div class="w-full">
        <DsSelect
          v-model="month"
          :disabled="disabled"
          :error="monthError"
          :focus="focus"
          :required="required"
          :rounded="rounded"
          label="Mes"
          @select="handleSelectMonth"
        >
          <option :value="0" disabled selected>Selecciona</option>

          <option
            v-for="tMonth in months"
            :key="tMonth.name"
            :selected="tMonth.value === month"
            :value="tMonth.value"
          >
            {{ tMonth.name }}
          </option>
        </DsSelect>
      </div>

      <div class="w-full">
        <DsSelect
          v-model="year"
          :disabled="disabled"
          :error="yearError"
          :focus="focus"
          :required="required"
          :rounded="rounded"
          label="Año"
          @select="handleSelectDay"
        >
          <option :value="0" disabled selected>Selecciona</option>
          <option
            v-for="tYear in years"
            :key="tYear"
            :selected="+tYear === year"
            :value="tYear"
          >
            {{ tYear }}
          </option>
        </DsSelect>
      </div>
    </div>
  </fieldset>
  <br />
</template>
