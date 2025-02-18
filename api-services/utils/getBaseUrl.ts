
import type { IConfig } from "~/global-interface/interfaces";
export const getBaseUrl = (config: IConfig | undefined, pathName = '') => {
    const runtimeConfig = useRuntimeConfig();
    return (config ? runtimeConfig.public[config.api] : runtimeConfig.public[pathName]) as string;
}