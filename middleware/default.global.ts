import {useAuthStore} from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const authStore = useAuthStore();

        // Obtener la ruta de la página actual y la ruta de la página anterior
        const currentPath = to.path;
        const previousPath = from.path;
        // Permitir acceso si el usuario está autenticado o si la página actual es la de inicio de sesión o de devolución de llamada
        if (authStore.isAuthenticated || currentPath === '/login' || currentPath === '/login/callback') {
            return;
        }

        // Redirigir a la página de inicio de sesión si el usuario intenta acceder a cualquier otra página
        if (previousPath !== '/login' && previousPath !== '/login/callback') {
            authStore.setRedirectUrl(currentPath);
            return navigateTo('/login');
        }
    }
})