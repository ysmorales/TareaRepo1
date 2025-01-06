<script lang="ts" setup>
import {
  DsImages,
  DsTypography,
  DsButtonAvatar,
} from "~/components/DesignSystem";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

const handleCloseSession = () => {};
</script>

<template>
  <nav
    class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 h-[64px] border-b border-stale-600 bg-[#ffff]"
  >
    <div class="grid grid-cols-2 gap-3 items-center">
      <div class="ml-2 place-content-start">
        <DsImages
          class="h-[53px] w-auto"
          src="/images/builder/creador-logotipo.jpg"
        />
      </div>

      <div class="justify-self-end flex items-center">
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
