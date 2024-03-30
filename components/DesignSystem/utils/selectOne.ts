export const selectOne = (value: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    // verifica si al menos una opción de checkbox está seleccionada
    return Object.values(value).some(v => v === true);
}