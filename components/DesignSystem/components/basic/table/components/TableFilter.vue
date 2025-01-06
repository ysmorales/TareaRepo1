<script lang="ts" setup>
import { reactive } from "vue";

import { useVuelidate } from "@vuelidate/core";
import DsInput from "../../../form/input/DsInput.vue";
import DsButton from "../../button/DsButton.vue";
import DsTypography from "../../typography/DsTypography.vue";
import type { IFilterInfo, ITableColumnData } from "../interface";
import DsSelect from "../../../form/select/DsSelect.vue";
import { formatRut, isValidRut } from "../../../../utils/isValidRut";
import { getErrorMessage } from "../../../../utils/translateErrorMessage";

type FormData = Record<string, string> & { run?: string };

const props = defineProps({
  columns: {
    type: Array as () => ITableColumnData[],
    default: () => [],
  },
  filterInfo: {
    type: Object as () => IFilterInfo,
    default: {
      title: "Filtrar solicitud(es)",
      buttonOkText: "Filtrar",
      buttonCancelText: "Limpiar",
    },
  },
});
// generando los valores del form dinámicos
const constructFormValues = props.columns.reduce((obj: FormData, item) => {
  if (item.key && item.filter) {
    obj[item.key] = "";
  }
  return obj;
}, {} as FormData);

const rucValidate = {
  $message: "No es un RUN valido",
  $validator: isValidRut,
};
const form = reactive<FormData>(constructFormValues);

const formRules = reactive(
  props.columns.reduce((rules, column) => {
    // Solo añadir la regla rucValidate si el filterType es 'run'
    if (column.filter?.filterType === "run") {
      rules[column.key as string] = { rucValidate };
    }
    return rules;
  }, {} as Record<string, any>)
);
const validateForm = useVuelidate(formRules, form as any);

const emit = defineEmits(["filter", "clean"]);

function handleSearch() {
  const allEmpty = Object.values(form).every((value) => value === "");

  // Si todas las propiedades de `form` son cadenas vacías, interrumpe la ejecución de la función
  if (allEmpty) {
    emit("filter", {});
  }
  if (!form.run) {
    emit("filter", form);
  } else {
    validateForm.value.$touch();
    if (!validateForm.value.$invalid) {
      emit("filter", form);
    }
  }
}

function initializeObjectProperties(obj: any) {
  Object.keys(obj).forEach((key) => {
    obj[key] = "";
  });
}

function handleClean() {
  // searchValues.value = {};
  validateForm.value.$reset();
  initializeObjectProperties(form);
  emit("clean");
}

function handleBlur(key: string) {
  if (form[key] != "") {
    form[key] = formatRut(form[key]);
    validateForm.value.$touch();
  } else {
    validateForm.value.$reset();
  }
}
</script>

<template>
  <fieldset class="">
    <legend class="font-bold mb-2 text-gray-500" />
    <div class="p-2 cont-form-sector mb-5">
      <DsTypography class="mt-2" variant="h3">
        {{ props.filterInfo?.title }}
      </DsTypography>
      <div class="flex flex-row gap-x-3 md:flex-nowrap min-[320px]:flex-wrap">
        <div
          v-for="(column, index) in columns
            .filter((d) => d?.filter)
            .concat(props.filterInfo?.extraFilters ?? [])"
          :key="'filter' + index"
          :class="`md:basis-1/3 min-[320px]:basis-full`"
        >
          <DsInput
            v-if="column.filter?.filterType == 'text'"
            :id="column.key"
            v-model="form[column.key as string]"
            :label="column.filter.title ?? column.title"
            :placeholder="column.filter.placeholder"
            size="full"
            type="text"
          />
          <DsInput
            v-if="column.filter?.filterType == 'date'"
            :id="column.key"
            v-model="form[column.key as string]"
            :label="column.filter.title ?? column.title"
            :placeholder="column.filter.placeholder"
            size="full"
            type="date"
          />
          <DsSelect
            v-if="column.filter?.filterType == 'select'"
            :id="column.key"
            v-model="form[column.key as string]"
            :label="column.filter.title ?? column.title"
            :option="column.filter.config?.options"
            :placeholder="column.filter.placeholder"
            size="full"
          />
          <DsInput
            v-if="column.filter?.filterType == 'run'"
            :id="column.key"
            v-model="form[column.key as string]"
            :error="
              getErrorMessage(validateForm[column.key as string]?.$errors[0])
            "
            :label="column.filter.title ?? column.title"
            :placeholder="column.filter.placeholder"
            size="full"
            type="text"
            @blur="handleBlur(column.key!)"
          />
        </div>
      </div>
      <div class="flex justify-end items-center gap-2.5">
        <DsButton
          class="max-h-[50px]"
          color="tertiary"
          size="large"
          @click="handleClean"
        >
          {{ filterInfo.buttonCancelText ?? "Limpiar" }}
        </DsButton>
        <DsButton class="max-h-[50px]" size="large" @click="handleSearch">
          {{ filterInfo.buttonOkText ?? "Filtrar" }}
        </DsButton>
      </div>
    </div>
  </fieldset>
</template>
