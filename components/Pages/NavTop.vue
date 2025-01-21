<script lang="ts" setup>
import {
  DsImages,
  DsTypography,
  DsButtonAvatar,
  DsButton,
  DsIcon,
} from "~/components/DesignSystem";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

const handleCloseSession = () => {};

const handleSave = () => {
  console.log("handleSave");
};
</script>

<template>
  <nav
    class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 h-[70px] border-b border-stale-600 bg-[#ffff]"
  >
    <div class="grid grid-cols-8 gap-3 items-center">
      <div class="ml-2 place-content-start">
        <DsImages
          class="w-auto h-auto max-w-[110%]"
          src="/images/builder/creador-logotipo.jpg"
        />
      </div>

      <div class="ml-2 place-content-center flex gap-3 items-center col-span-5">
        <div class="border-gray-300 p-1 float-left border">
          <DsIcon name="home" size="medium" />
        </div>
        <div><DsIcon name="file" size="small" /></div>
        <div>
          <DsTypography variant="span" class="text-md mb-0">
            Nuevo prototipo ...
          </DsTypography>
        </div>
        <div>
          <DsButton color="primary" @click="handleSave"
            >Guardar prototipo
          </DsButton>
        </div>
      </div>

      <div class="justify-self-end flex items-center col-span-2">
        <div>
          <DsTypography variant="h4" class="text-sm mb-0"
            >{{ sanatizeText(authStore.getFullNameUser) }}
          </DsTypography>
          <DsTypography class="text-sm mb-0">Editor(a) </DsTypography>
        </div>

        <div class="z-30 ml-10">
          <DsButtonAvatar
            :userData="
              authStore.user ?? {
                name: 'invitado',
                email: 'invitado@invitado.com',
              }
            "
            @closeSession="handleCloseSession"
          />
        </div>
      </div>
    </div>
  </nav>
</template>
