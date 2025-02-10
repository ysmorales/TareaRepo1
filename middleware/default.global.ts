import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const authStore = useAuthStore();
        if (!authStore.isAuthenticated && to.path !== '/login') {
            return navigateTo('/login');
        }
    }
});