<script lang="ts" setup>
import { DsButton, DsTypography } from "~/components/DesignSystem";
import { useAuthStore } from "~/stores/auth";
import crypto from "crypto-js";

const runtimeConfig = useRuntimeConfig();

const loginUrlAzure = ref("");
const loginUrlClaveUnica = ref("");

let state = "";
let challenge = "";
let verifier = "";
const { clear } = useAuthStore();

const createRandomString = (num: number): string => {
  return [...Array(num)].map(() => Math.random().toString(36)[2]).join("");
};

const base64Url = (string: crypto.WordArray): string => {
  return string
    .toString(crypto.enc.Base64)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
};

const setupLoginUrl = (): void => {
  clear();
  state = createRandomString(40);
  verifier = createRandomString(128);
  challenge = base64Url(crypto.SHA256(verifier));

  localStorage.setItem("state", state);
  localStorage.setItem("verifier", verifier);

  loginUrlAzure.value =
    `${runtimeConfig.public.PASSPORT_AUT}?client_id=${runtimeConfig.public.PASSPORT_CLIENT_ID}` +
    `&redirect_uri=${runtimeConfig.public.PASSPORT_CALLBACK}` +
    `&response_type=code&scope=*&state=${state}` +
    `&code_challenge=${challenge}&code_challenge_method=S256&provider=azure`;

  loginUrlClaveUnica.value =
    `${runtimeConfig.public.PASSPORT_AUT}?client_id=${runtimeConfig.public.PASSPORT_CLIENT_ID}` +
    `&redirect_uri=${runtimeConfig.public.PASSPORT_CALLBACK}` +
    `&response_type=code&scope=*&state=${state}` +
    `&code_challenge=${challenge}&code_challenge_method=S256&provider=claveunica`;
};

onMounted(() => {
  setupLoginUrl();
});

const openLoginAzure = () => {
  window.location.href = loginUrlAzure.value;
};
</script>
<template>
  <div class="w-[350px]">
    <DsTypography variant="h1"> Inicio de sesión </DsTypography>

    <DsTypography class="mb-5 block" size="small">
      Para entrar al creador ingrese sus credenciales de Microsoft
    </DsTypography>

    <DsButton
      class="size-full mb-2 flex justify-center py-4"
      color="primary"
      type="submit"
      @click="openLoginAzure"
    >
      <strong>Ingresar con Microsoft</strong>
    </DsButton>
  </div>
</template>
