<script lang="ts" setup>
import { filterClass } from "../../../utils/filterClass";
import { predefinedClasses } from "../../../common/propsStyle";
import generateUniqueId from "../../../utils/generateUniqueId";
import DsButton from "../../basic/button/DsButton.vue";
import { ref, watch,toRef ,computed,onMounted} from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  totalSteps: {
    type: Number,
    default: 4,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  hideButton: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: "",
  },
  buttonMainText: {
    type: String,
    default: "Continuar",
  },
});

interface ISteps {
  step: number;
  status: "default" | "blocked";
  selected: boolean;
}

const modelValueRef = toRef(props, "modelValue");
const handleStep = (newStep: "sumar" | "restar") => {
  let newValue = props.modelValue;
  if (newStep === "sumar" && props.modelValue < props.totalSteps) {
    newValue++;
  } else if (newStep === "restar" && props.modelValue > 1) {
    newValue--;
  }
  if (newValue !== props.modelValue) {
    emitChangeStep("changeStep", newValue, newStep === "sumar" && "mainButton");
  }
};

const emitChangeStep = defineEmits(["changeStep", "update:modelValue"]);
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

function handleClick(item: any) {
  emitChangeStep("changeStep", item.step);
  // emitChangeStep("update:modelValue", item.step);
}

const stepStates = ref<ISteps[]>(
  Array.from({ length: props.totalSteps }, (_, i) => ({
    step: i + 1,
    status: i + 1 === props.modelValue ? "default" : "blocked",
    selected: i + 1 === props.modelValue,
  })),
);

watch(modelValueRef, (newProps) => {
  stepStates.value = stepStates.value.map((step) => {
    if (step.step < newProps) {
      return { ...step, status: "default", selected: false };
    } else if (step.step === newProps) {
      return { ...step, status: "default", selected: true };
    } else if (step.status !== "default") {
      return { ...step, status: "blocked", selected: false };
    } else {
      return { ...step, selected: false };
    }
  });
});

const steps = computed(() => stepStates.value);

function computeAriaLabel(item: any) {
  const label = `Paso ${item.step}`;

  if (props.modelValue === props.totalSteps) {
    return `${label}, bloqueado`;
  }

  const states = {
    selected: `, actualmente estás en este paso`,
    blocked: `, bloqueado`,
    lowerValue: `, Volver al paso ${item.step}`,
    higherValue: `, Avanzar al paso ${item.step}`,
  };

  if (item.selected) {
    return label + states.selected;
  } else if (item.status === "blocked") {
    return label + states.blocked;
  } else if (item.step < props.modelValue) {
    return label + states.lowerValue;
  } else {
    return label + states.higherValue;
  }
}

const uniqueID = ref("");
onMounted(() => {
  uniqueID.value = generateUniqueId("typography");
});
</script>

<template>
  <div :class="filterClassComp">
    <ol
      :id="uniqueID"
      :aria-label="
        'Progreso del trámite. Estás en el paso ' +
        modelValue +
        ' de ' +
        totalSteps
      "
      class="flex items-center space-x-4 md:space-x-8"
      tabindex="0"
    >
      <li
        v-for="(item, index) in steps"
        :key="item.step"
        class="ml-0"
        @click="handleClick(item)"
      >
        <div class="flex justify-center items-center">
          <button
            :aria-label="computeAriaLabel(item)"
            :class="[
              'h-10 w-10 md:h-14 md:w-14 font-robotoSlab border border-neutral-300  text-dark-500 ' +
                'rounded-full flex align-middle justify-center items-center text-lg font-bold mr-4 md:mr-8',
              {
                'border-transparent bg-primary-500 text-white cursor-pointer':
                  item.selected,
              },
              {
                'border-primary-500 bg-white text-primary-500 cursor-pointer':
                  item.status === 'default' && !item.selected,
              },
              {
                'border-neutral-300 bg-neutral-100 text-neutral-500 cursor-not-allowed':
                  item.status === 'blocked',
              },
            ]"
            :disabled="error || modelValue === totalSteps"
          >
            {{ item.step }}
          </button>
          <span
            v-if="index !== steps.length - 1"
            :class="[
              'h-[2px] w-[20px] md:w-[60px]',
              `${item.step < modelValue ? 'bg-primary-500' : 'bg-gray-200'}`,
            ]"
          ></span>
        </div>
      </li>
    </ol>
  </div>
  <slot />
  <div
    v-if="!hideButton && modelValue !== totalSteps"
    class="cont-form-btn w-full"
  >
    <DsButton
      class="m-1 mt-3"
      end-image="las la-angle-right"
      @click="handleStep('sumar')"
    >
      <span>{{
        !loading
          ? totalSteps - modelValue === 1
            ? "Confirmar"
            : "Continuar"
          : "Enviando..."
      }}</span>
      <div
        v-if="loading"
        class="ml-1 w-5 h-5 border-2 border-t-4 border-white rounded-full animate-spin"
      ></div>
    </DsButton>

    <DsButton
      v-if="modelValue !== 1"
      :disabled="error"
      class="m-1 mt-3"
      color="tertiary"
      start-image="las la-angle-left"
      @click="handleStep('restar')"
      >Volver
    </DsButton>
  </div>
</template>
