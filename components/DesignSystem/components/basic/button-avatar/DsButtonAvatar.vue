<script lang="ts" setup>
import {computed, onMounted, onUnmounted, ref} from "vue";
import DsAvatar from "../avatar/DsAvatar.vue";
import DsTypography from "../typography/DsTypography.vue";
import DsLink from "../../navigation/link/DsLink.vue";
import type {IUser} from "../../../interfaces/elements";

import ModalFixed from "./ModalFixed.vue";

const props = defineProps({
    title: {
        type: String,
        default: "Mi cuenta",
    },
    userData: {
        type: Object as () => IUser,
        default: () => ({
            name: "invitado",
            email: "no se ha definido correo",
            photo: "/images/avatar.jpeg",
        }),
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

const handlerCloseMenu = () => {
    menuOpen.value = false;
};

function editProfile() {
    handlerCloseMenu();
    emit("editProfile");
}

function handleClick() {
    handlerCloseMenu();
    emit("closeSession");
}
</script>

<template>
    <div id="menu" :class="style" :title="title">
        <DsAvatar
            :src="userData?.photo ?? '/images/avatar.jpeg'"
            class="min-w-8 cursor-pointer"
            size="small"
            @click="menuOpen = !menuOpen"
        />
        <div
            v-if="menuOpen"
            class="absolute p-4 top-full right-0 w-fit space-y-1 rounded shadow bg-white min-w-[200px]"
        >
            <div class="lg:hidden">
                <ModalFixed :handler-close="handlerCloseMenu" show>
                    <div class="p-3">
                        <DsTypography variant="h2">{{ userData.name }}</DsTypography>
                        <DsTypography>{{ userData.email }}</DsTypography>
                        <hr class="py-1"/>
                        <DsLink
                            class="hover:underline block py-3"
                            color="gray"
                            href="#"
                            @click="editProfile"
                        >
                            Editar perfil
                        </DsLink>
                        <hr class="py-1"/>
                        <DsLink
                            class="hover:underline py-3"
                            color="gray"
                            @click="handleClick"
                        >
                            Cerrar sesión
                        </DsLink>
                    </div>
                </ModalFixed>
            </div>
            <DsTypography>{{ userData.name }}</DsTypography>
            <DsTypography>{{ userData.email }}</DsTypography>
            <hr class="py-1"/>
            <DsLink
                class="hover:underline block py-3"
                color="gray"
                href="#"
                @click="editProfile"
            >
                Editar perfil
            </DsLink>
            <hr class="py-1"/>
            <DsLink
                class="hover:underline block py-3"
                color="gray"
                @click="handleClick"
            >
                Cerrar sesión
            </DsLink>
        </div>
    </div>
</template>
