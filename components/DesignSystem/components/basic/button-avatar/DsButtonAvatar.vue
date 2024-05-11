<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import DsButton from "../button/DsButton.vue";
import DsAvatar from "../avatar/DsAvatar.vue";
import DsTypography from "../typography/DsTypography.vue";
import DsLink from "../../navigation/link/DsLink.vue";
import type { IUser } from "../../../interfaces/elements";


const props = defineProps({
  title: {
    type: String,
    default: "Mi cuenta",
  },
  userData: {
    type: Object as () => IUser,
    default: { name: "invitado", email: "no se ha definido correo" },
  },
  class: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["closeSession", "editProfile"]);
const menuOpen = ref(false);
const style = computed(() => [props.class, "relative inline-block m-2"]);

function handleClickOutside(event: Event) {
  if (menuOpen.value && !(event.target as HTMLElement).closest("#menu")) {
    menuOpen.value = false;
  }
}

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});

function editProfile() {
  menuOpen.value = false;
  emit("editProfile");
}

function handleClick() {
  menuOpen.value = false;
  emit("closeSession");
}
</script>

<template>
  <div id="menu" :class="style" :title="title">
    <DsButton
      class="ds-button-arrow"
      color="simple"
      @click="menuOpen = !menuOpen"
    >
      <DsAvatar class="min-w-8" size="small" />
    </DsButton>
    <!--    <button class="flex items-center p-0 ds-button-arrow" @click="menuOpen = !menuOpen">-->
    <!--      -->
    <!--    </button>-->
    <div
      v-if="menuOpen"
      class="absolute p-4 top-full right-0 w-fit space-y-1 rounded shadow bg-white min-w-[200px]"
    >
      <DsTypography>{{ userData.name }} </DsTypography>
      <DsTypography>{{ userData.email }}</DsTypography>
      <hr class="py-1" />
      <DsLink class="hover:underline" color="gray" href="#" @click="editProfile"
        >Editar perfil
      </DsLink>
      <hr class="py-1" />
      <DsLink class="hover:underline" color="gray" @click="handleClick"
        >Cerrar sesión
      </DsLink>
    </div>
  </div>
</template>

<style scoped>
.ds-button-arrow::after {
  content: "";
  display: inline-block;
  margin-left: 5px;
  border-top: 5px solid #333;
  border-bottom: 5px solid transparent;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}
</style>
