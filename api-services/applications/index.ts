import {requestResponse} from '../utils';

export default function (config?: any | undefined) {
    const runtimeConfig = useRuntimeConfig();
    const baseURL = config ? runtimeConfig.public[config.api] as string : runtimeConfig.public.API_FRANJAS_HORARIAS as string;

    return {
        procedure: {
            getAll: (path: string, keyName = 'certificate-request', watch: any, useCache: boolean, query?: any, useWatchQuery?: boolean) =>
                requestResponse({
                    path: path,
                    baseURL, query, method: 'GET',
                    withAsyncData: {keyName, useCache, watch, useWatchQuery},
                }),
            getOneById: (path: string, keyName = 'certificate-request', watch: any, useCache: boolean, query?: any, useWatchQuery?: boolean) =>
                requestResponse({
                    path: path,
                    baseURL, method: 'GET',
                    withAsyncData: {keyName, useCache, watch, useWatchQuery},
                }),
            update: async (path: string, procedure: any) =>
                requestResponse({
                    path: path,
                    baseURL,
                    body: procedure,
                    method: 'PUT',
                    manifest: config,
                    headers: {'Accept': 'application/json'}
                }),
            updatePost: async (path: string, procedure: any) =>
                requestResponse({
                    path: path,
                    baseURL,
                    body: procedure,
                    method: 'POST',
                    manifest: config,
                    headers: {'Accept': 'application/json'}
                }),
            createOne: async (path: string, procedure: any) =>
                requestResponse({
                    path: path,
                    baseURL,
                    body: procedure,
                    method: 'POST',
                    manifest: config
                }),
            deleteMulti: async (path: string, body: any) =>
                requestResponse({
                    path: path,
                    baseURL,
                    body: body,
                    method: 'DELETE',
                    manifest: config
                }),
        }
    }
}

export * from './certificate-devolution/types';