<script lang="ts" setup>
import {
    DsButton,
    DsIcon,
    DsLink,
    DsImage,
    DsButtonAvatar,
    DsSimpleSideMenu,
} from "../../../../DesignSystem";
import {loremItsum} from "../../../utils/loremItsum";

const emit = defineEmits(["logout"]);

defineProps({
    user: {
        type: Object,
        default: () => ({name: "invitado", email: "sin email"}),
    },
    logo: {
        type: String,
        default: "/images/logo-unidoos.svg",
    },
    styleLogoTailwind: {
        type: String,
        default: "",
    },

});

async function handleCloseSession() {
    emit("logout");
}
</script>

<template>
    <div class="flex flex-col justify-center p-2">
        <div class="top-0 left-0 w-full z-10 bg-white">
            <div
                class="flex flex-row items-end mb-2 justify-between lg:justify-normal"
            >
                <div class="md:flex md:h-[65px] md:w-1/5 justify-start items-center">
                    <DsLink href="/">
                        <DsImage
                            :class="styleLogoTailwind"
                            :src="logo"
                        />
                    </DsLink>
                </div>
                <div class="md:w-4/5">
                    <div class="flex-wrap justify-end h-[31px] hidden lg:flex">
                        <DsButton
                            color="simple"
                            icon-color="dark"
                            icon-size="small"
                            icon-style="mr-0"
                            size="small"
                            start-image="/images/accessibility/icon-disminuir.svg"
                        >Disminuir textos
                        </DsButton>
                        <DsButton
                            class="text-black"
                            color="simple"
                            icon-color="dark"
                            icon-size="small"
                            icon-style="mr-0"
                            size="small"
                            start-image="/images/accessibility/icon-aumentar.svg"
                        >Aumentar textos
                        </DsButton>
                        <DsButton
                            class="text-black"
                            color="simple"
                            icon-color="dark"
                            icon-size="small"
                            icon-style="mr-0"
                            size="small"
                            start-image="/images/accessibility/icon-gris.svg"
                        >Ver sitio en gris
                        </DsButton>
                        <DsButton
                            class="text-black"
                            color="simple"
                            icon-color="dark"
                            icon-size="small"
                            icon-style="mr-0"
                            size="small"
                            start-image="/images/accessibility/icon-restablecer.svg"
                        >Restablecer
                        </DsButton>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="mx-auto max-w-[650px] hidden md:flex">
                            <div class="flex w-full flex-wrap justify-between">
                                <slot name="center-navBar">
                                </slot>
                            </div>
                        </div>
                        <div class="h-[65px] w-auto lg:w-1/3">
                            <div class="flex justify-end items-center">
                                <slot name="final-navBar">
                                </slot>
                                <DsButtonAvatar
                                    :userData="user ?? { name: 'invitado', email: 'invitado@invitado.com' }"
                                    @closeSession="handleCloseSession"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div class="mx-auto max-w-[650px] md:hidden py-2 px-1">
                    <div class="flex w-full flex-wrap justify-between">
                        <DsLink
                            class="flex items-center btn btn-secondary no-underline px-4 mb-1 bg-white mx-1 rounded-none"
                        >
                            <DsIcon class="mr-1" name="home"/>
                        </DsLink>
                        <DsLink
                            class="flex items-center btn btn-secondary no-underline px-4 mb-1 bg-white mx-1 rounded-none"
                        >
                            <DsIcon class="mr-1" name="users"/>
                        </DsLink>
                        <DsLink
                            class="flex items-center btn btn-secondary no-underline px-4 mb-1 bg-white mx-1 rounded-none"
                        >
                            <DsIcon class="mr-1" name="book"/>
                        </DsLink>
                        <DsLink
                            class="flex items-center btn btn-secondary no-underline px-4 mb-1 bg-white mx-1 rounded-none"
                            href="/aplicaciones/cambio-hora"
                        >
                            <DsIcon class="mr-1" name="th"/>
                        </DsLink>
                        <DsLink
                            class="flex items-center btn btn-secondary no-underline px-4 mb-1 bg-white mx-1 rounded-none"
                        >
                            <DsIcon class="mr-1" name="folder"/>
                        </DsLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex">
            <slot name="menu">
                <DsSimpleSideMenu
                    :data="[
          { id: 1, text: 'Ingresar solicitud' },
          { id: 2, text: 'Consultar' },
          { id: 3, text: 'Bandeja de entrada' },
        ]"
                />
            </slot>
            <slot>
                <div class="px-10">
                    <h1>Here slot content</h1>
                    {{ loremItsum }}
                </div>
            </slot>
        </div>
    </div>
</template>
