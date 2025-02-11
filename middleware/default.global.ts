import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const authStore = useAuthStore();
        const publicPages = ['/login', '/login/reset-password'];
        const authRequired = !publicPages.includes(to.path);

        if (!authStore.isAuthenticated && authRequired) {
            return navigateTo('/login');
        }
    }
});