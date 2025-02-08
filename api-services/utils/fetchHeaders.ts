import { useAuthStore } from '~/store/auth';

export function fetchHeader() {
    const $authStore = useAuthStore()
    const token: string = $authStore.auth_token

    return { 'Authorization': `Bearer ${token}` }
}

export function fetchRun() {
    const $authStore = useAuthStore()
    return $authStore.user?.run
}

export function fetchEmail() {
    const $authStore = useAuthStore()
    return $authStore.user?.email
}

export function addRunQuery(query = {}) {
    return { ...query, run: fetchRun(), email: fetchEmail() }
}