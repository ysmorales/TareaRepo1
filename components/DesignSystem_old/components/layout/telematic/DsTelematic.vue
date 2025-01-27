<script lang="ts" setup>
import DsLink from "../../navigation/link/DsLink.vue";
import DsButton from "../../basic/button/DsButton.vue";
import DsImages from "../../media/images/imagesHtml/DsImages.vue";
import DsTypography from "../../basic/typography/DsTypography.vue";
import DsAlert from "../../basic/alert/DsAlert.vue";

defineProps({
  institution: {
    type: String,
    required: true,
  },

  institutionLink: {
    type: String,
    default: null,
  },

  title: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  personName: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },

  alertType: {
    type: String as () => IAlertType,
    default: null,
  },

  alertTitle: {
    type: String,
    default: null,
  },

  buttonText: {
    type: String,
    default: null,
  }
});

const emit = defineEmits(['buttonClick']);

const onButtonClick = () => {
  emit( 'buttonClick');
};

</script>

<template>
  <div class="container max-w-[800px] mx-auto">
    <section>
      <div v-if="!institutionLink"
           class="font-roboto text-primary-500 hover:text-primary-900 font-base mb-3">
        {{ institution }}
      </div>

      <DsLink v-if="institutionLink"
          letter="roboto" margin-bottom="3" :href="institutionLink">{{  institution  }}</DsLink>

      <DsTypography class="mb-3" variant="h2">
        {{ title }}
      </DsTypography>

      <DsTypography class="mb-5" variant="h4">
        Comprobante consulta telemática
      </DsTypography>

      <span class="font-roboto bg-neutral-100 rounded text-primary-500 text-xs px-2 py-1 mb-5 inline-block">
        {{ date }}
      </span>

      <div class="mb-5">
        <span class="text-neutral-500 mb-2 font-roboto">
          Estimado(a)
        </span>

        <strong class="block font-robotoSlab">
          {{ personName }}
        </strong>
      </div>

      <div class="mb-5">
        <span class="text-neutral-500 mb-2">
          Presente:
        </span>

        <DsTypography variant="p">
          {{ subject }}
        </DsTypography>
      </div>

      <DsAlert v-if="alertType" :type="alertType" :title="alertTitle">
        <slot />
      </DsAlert>

      <div>
        <DsImages class="inline-block" size="large"
          src="/images/logo-sucursal-virtual.png" />

        <DsTypography class="inline-block text-xl font-robotoSlab ml-4 font-bold" variant="h3">
          Instituto de Previsión Social
        </DsTypography>
      </div>

      <hr class="my-3" />

      <DsButton v-if="buttonText" :text="buttonText" @click="onButtonClick" />
    </section>
  </div>
</template>
