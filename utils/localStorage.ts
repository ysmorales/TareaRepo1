/**
 * Recupera un elemento de localStorage. Si el elemento no existe o ocurre un error,
 * retorna el valor predeterminado proporcionado.
 *
 * @param {string} key            - La clave del elemento a recuperar de localStorage.
 * @param {T} defaultValue        - El valor predeterminado a retornar si el elemento no existe.
 * @returns {T}                   - El valor del elemento de localStorage, o el valor predeterminado.
 */
export function getItemInLocalStorage<T>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') {
        return defaultValue;
    }

    const storedItem = localStorage.getItem(key);
    if (storedItem === null) {
        return defaultValue;
    }

    try {
        // Intenta analizar el valor almacenado como JSON
        return JSON.parse(storedItem);
    } catch (error) {
        // Si el análisis falla, asume que el valor es una cadena simple y retórnalo directamente
        return storedItem as unknown as T;
    }
}

/**
 * Almacena un elemento en localStorage. Convierte el valor a una cadena JSON si es necesario.
 *
 * @param {string} key    - La clave del elemento a almacenar en localStorage.
 * @param {T} value       - El valor del elemento a almacenar. Si es un objeto o un array, se convierte a JSON.
 */
export function setItemInLocalStorage<T>(key: string, value: T): void {
    if (typeof window !== 'undefined') {
        try {
            const valueToStore = typeof value === 'string' ? value : JSON.stringify(value);
            localStorage.setItem(key, valueToStore);
        } catch (error) {
            console.error('Error al almacenar en localStorage', error);
        }
    }
}

/**
 * Elimina un elemento de localStorage.
 *
 * @param {string} key    - La clave del elemento a eliminar de localStorage.
 */
export function removeItemInLocalStorage(key: string): void {
    if (typeof window !== 'undefined') {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error al eliminar del localStorage', error);
        }
    }
}
