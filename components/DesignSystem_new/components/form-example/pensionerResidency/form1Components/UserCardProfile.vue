<script lang="ts" setup>
import DsButton from "../../../basic/button/DsButton.vue";
import type { IUserProfile } from "../../../form-example/pensionerResidency/interface";

defineProps({
  dataProfile: {
    type: Object as () => IUserProfile,
  },
});
const buttonEmit = defineEmits(["buttonClick"]);

function handleClick() {
  buttonEmit("buttonClick");
}
</script>

<template>
  <div>
    <h3>{{ dataProfile?.name }}</h3>
    <h4>{{ dataProfile?.ruc }}</h4>
    <hr class="my-3" />
    <div class="cont-gr">
      Fecha de nacimiento<br />
      <strong>{{ dataProfile?.birthday }}</strong>
    </div>
    <div class="cont-gr">
      Dirección<br />
      <strong>{{ dataProfile?.address }}</strong>
    </div>
    <div class="cont-gr">
      Contacto<br />
      <strong>{{ dataProfile?.phoneNumber }}</strong
      ><br />
      <strong>{{ dataProfile?.email }}</strong>
    </div>
    <DsButton
      aria-controls="modal-content"
      color="tertiary"
      @click="handleClick"
      >Editar datos de contacto
    </DsButton>
  </div>
</template>

<style scoped></style>
