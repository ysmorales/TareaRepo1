export const isProduction = () => {
    const runtimeConfig = useRuntimeConfig();
    return runtimeConfig.public?.NODE_ENV !== 'development'
}