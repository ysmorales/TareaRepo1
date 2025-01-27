<script lang="ts" setup>
import {ref, watch, toRef, computed, onMounted} from 'vue';
import {filterClass} from '../../../utils/filterClass';
import {predefinedClasses} from '../../../common/propsStyle';
import generateUniqueId from '../../../utils/generateUniqueId';
import DsButton from '../../basic/button/DsButton.vue';

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
    default: '',
  },
  buttonMainText: {
    type: String,
    default: 'Continuar',
  },
  secondaryButton: {
    type: Boolean,
    default: false,
  },
  textSecondaryButton: {
    type: String,
    default: 'Volver',
  },
});

interface ISteps {
  step: number;
  status: 'default' | 'blocked';
  selected: boolean;
}

const modelValueRef = toRef(props, 'modelValue');
const handleStep = (newStep: 'sumar' | 'restar') => {
  let newValue = props.modelValue;
  if (newStep === 'sumar' && props.modelValue < props.totalSteps) {
    newValue++;
  } else if (newStep === 'restar' && props.modelValue > 1) {
    newValue--;
  }
  if (newValue !== props.modelValue) {
    emitChangeStep('changeStep', newValue, newStep === 'sumar' && 'mainButton');
  }
};

const emitChangeStep = defineEmits(['changeStep', 'update:modelValue', 'clickSecondaryButton']);
const filterClassComp = computed(() => {
  return filterClass(predefinedClasses, props.class);
});

function handleClick(item: any) {
  if (item.status === 'blocked') return;
  emitChangeStep('changeStep', item.step);
  // emitChangeStep("update:modelValue", item.step);
}

const stepStates = ref<ISteps[]>(
  Array.from({length: props.totalSteps}, (_, i) => ({
    step: i + 1,
    status: i + 1 === props.modelValue ? 'default' : 'blocked',
    selected: i + 1 === props.modelValue,
  })),
);

watch(modelValueRef, (newProps) => {
  stepStates.value = stepStates.value.map((step) => {
    if (step.step < newProps) {
      return {...step, status: 'default', selected: false};
    } else if (step.step === newProps) {
      return {...step, status: 'default', selected: true};
    } else if (step.status !== 'default') {
      return {...step, status: 'blocked', selected: false};
    } else {
      return {...step, selected: false};
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
  } else if (item.status === 'blocked') {
    return label + states.blocked;
  } else if (item.step < props.modelValue) {
    return label + states.lowerValue;
  } else {
    return label + states.higherValue;
  }
}

const uniqueID = ref('');
onMounted(() => {
  uniqueID.value = generateUniqueId('typography');
});
</script>

<template>
  <div :class="filterClassComp">
    <ol
      :id="uniqueID"
      :aria-label="
				'Progreso del trámite. Estás en el paso '
					+ modelValue
					+ ' de '
					+ totalSteps
			"
      class="flex items-center justify-center "
      tabindex="0"
    >
      <li
        v-for="(item, index) in steps"
        :key="item.step"
        class="m-0"
        @click="handleClick(item)"
      >
        <div class="flex justify-center items-center">
          <button
            :aria-label="computeAriaLabel(item)"
            :class="[
							'h-10 w-10 md:h-14 md:w-14 font-inriaSans border border-neutral-300  text-dark-500 '
								+ 'rounded-full flex align-middle justify-center items-center text-normal  mx-1 md:mx-2',
							{
								'border-transparent bg-primary-500 text-white cursor-pointer':
									item.selected,
							},
							{
								'border-primary-500 bg-white text-primary-500 cursor-pointer':
									item.status === 'default' && !item.selected,
							},
							{
								'border-dark-500 bg-white text-dark-500 cursor-not-allowed':
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
							'h-[2px] w-[5px] md:w-[20px]',
							`${item.step < modelValue ? 'bg-primary-500' : 'bg-gray-200'}`,
						]"
          />
        </div>
      </li>
    </ol>
  </div>
  <slot/>
  <div
    v-if="!hideButton && modelValue !== totalSteps"
    class="cont-form-btn w-full"
  >
    <DsButton
      :loading="loading"
      class="m-1 mt-3"
      size="large"
      @click="handleStep('sumar')"
    >
			<span>{{
          !loading
            ? totalSteps - modelValue === 1
              ? "Confirmar"
              : "Continuar"
            : "Enviando..."
        }}</span>

    </DsButton>

    <DsButton
      v-if="modelValue !== 1 || (modelValue == 1 && secondaryButton)"
      :disabled="error"
      class="m-1 mt-3"
      color="secondary"
      size="large"
      @click="modelValue !== 1 ? handleStep('restar') : $emit('clickSecondaryButton')"
    >
      {{ modelValue !== 1 ? 'Volver' : (textSecondaryButton ?? 'volver') }}
    </DsButton>
  </div>
</template>
