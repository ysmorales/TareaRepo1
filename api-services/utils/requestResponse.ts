import { decryptResponse } from './decryptResponse';
import { fetchHeader } from './fetchHeaders.js';
import { getCacheConfig } from '~/utils/commonCache';
import toArray from "~/utils/toArray";
import { isValidResponse } from './isValidResponse';
import { getUser } from "~/utils/getUser";
import { useAuthStore } from '~/stores/auth';
import type { IConfig, IErrorFetch, IErrorWithMessage, IMap, IQuery } from "~/interfaces/interfaces";

interface RequestResponseParams {
    baseURL: string | undefined;
    withAuthorization?: boolean;
    headers?: Record<string, string>;
    path: string;
    body?: any;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    query?: Partial<IQuery> & Record<string, string>;
    decrypt?: boolean;
    withAsyncData?: {
        keyName: string;
        watch?: any;
        useCache?: boolean;
        useWatchQuery?: boolean | string[]
    };
    manifest?: IConfig
}

const getLogDecript = (data: any) => console.log(data, 'decript')

export async function requestResponse(
    {
        baseURL,
        withAuthorization = true,
        headers = {},
        path,
        body,
        method = 'GET',
        query,
        decrypt = true,
        withAsyncData,
        manifest
    }: RequestResponseParams): Promise<any> {
    const dataResponse = async (): Promise<any> => {
        try {
            let theQuery = query

            if (withAsyncData && withAsyncData?.useWatchQuery) {
                const isArrayQuery = Array.isArray(withAsyncData?.useWatchQuery)
                if (withAsyncData?.watch && !isArrayQuery) {
                    toArray(withAsyncData?.watch).forEach(reactiveVal => {
                        const newValue = reactiveVal.value
                        theQuery = { ...theQuery, ...newValue }
                    });
                }
                if (isArrayQuery) {
                    const newQuery = {}
                    toArray(withAsyncData?.useWatchQuery).forEach(keyQueryToUse => {
                        if ((theQuery as IMap)[keyQueryToUse])
                            (newQuery as IMap)[keyQueryToUse] = (theQuery as IMap)[keyQueryToUse]
                    });
                    theQuery = newQuery
                }
            }

            const data = await $fetch(path, {
                headers: { ...(withAuthorization ? fetchHeader() : {}), ...headers },
                baseURL,
                body,
                method,
                query: theQuery
            })
            if (decrypt && data) {
                const info = decryptResponse(data as string)
                getLogDecript(info)
                if (isValidResponse(info.codigoRetorno)) {
                    return info
                }

                throw info?.glosaRetorno
            }
            return data
        } catch (err: unknown) {
            const error = err as IErrorFetch & IErrorWithMessage


            const errorDecript = decryptResponse(error?.data) || {}
            console.log(error, 'error', errorDecript)
            if (error && error.statusCode === 401) {
                const errorData = decryptResponse(error.data)
                getLogDecript(errorData)
                if (errorData.codigoRetorno === 401) {
                    const authStore = useAuthStore();
                    console.log(errorData.glosaRetorno, 'revalidate token');
                    await authStore.refreshToken();
                    if (manifest) {
                        await getUser(manifest)
                    }
                    return await dataResponse();
                }
            }

            const { glosaRetorno } = errorDecript
            const theError = isNotEmpty(glosaRetorno) ? glosaRetorno : error?.statusCode ? `${error?.statusCode}: ${error?.message}` : error
            throw new Error(theError as string);
        }
    }

    if (withAsyncData) {
        const { keyName, watch = {}, useCache } = withAsyncData;
        return useAsyncData(
            keyName,
            dataResponse,
            {
                lazy: true,
                watch,
                transform: (td) => ({ ...td, fetchedAt: new Date() }),
                ...(useCache ? getCacheConfig() : {}),
            }
        );
    }

    return dataResponse()
} 
