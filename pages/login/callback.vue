<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "vue-router";
import cookies from "js-cookie";
import { ref, computed, onMounted } from "vue";
import { decodeToken } from "~/utils/helpers";

// Define PageMeta
definePageMeta({
  layout: false,
});

// Define RuntimeConfig
const runtimeConfig = useRuntimeConfig();

// Define Store
const authStore = useAuthStore();

// Define Router
const router = useRouter();

// Define props
const props = defineProps({});

// Define emits
const emits = defineEmits([]);

// Variables reactivas
const data = ref("");

// Computeds
const redirect = computed(() => {
  try {
    return cookies.get("redirect-url") || "/";
  } catch {
    return "/";
  }
});

const fetchToken = async (code: string): Promise<void> => {
  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("client_id", runtimeConfig.public.PASSPORT_CLIENT_ID);
  params.append("redirect_uri", runtimeConfig.public.PASSPORT_CALLBACK);
  params.append("code_verifier", localStorage.getItem("verifier") || "");
  params.append("code", code);

  try {
    const response = await fetch(runtimeConfig.public.PASSPORT_TOKEN, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Token fetch error:", errorData);
      throw new Error(
        `Token fetch failed: ${errorData.message || "Unknown error"}`
      );
    }

    const data = await response.json();
    const { token_type, expires_in, access_token, refresh_token } = data;

    if (!access_token) {
      throw new Error("No access token provided");
    }

    localStorage.removeItem("state");
    localStorage.removeItem("verifier");

    // Guarda el token en el store
    authStore.setToken(access_token);
    authStore.setRefreshToken(refresh_token);

    // Decodifica el token y guarda los datos del usuario
    try {
      const dataUser = decodeToken(access_token);
      authStore.setUser(dataUser);
    } catch (error) {
      console.error("Token decoding error:", error);
      authStore.clear(); // Opción para limpiar el estado de autenticación si falla la decodificación
      throw error;
    }

    // Redirecciona a la página guardada si está definida
    if (redirect.value) {
      router.push(redirect.value);
    }
  } catch (error) {
    console.error("Error en fetchToken:", error);
  }
};

onMounted(async () => {
  if (process.client) {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    if (code && state && state === localStorage.getItem("state")) {
      await fetchToken(code);
    }
  }
});
</script>

<template>
  <NuxtLayout name="auth-layout">
    <div>
      <div class="w-full flex">Validando...</div>
    </div>
  </NuxtLayout>
</template>
