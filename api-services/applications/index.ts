import {requestResponse} from '../utils';

export default function () {
    const runtimeConfig = useRuntimeConfig();
    const baseURL = runtimeConfig.public.BACKEND_URL;

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
                    headers: {'Accept': 'application/json'}
                }),
            updatePost: async (path: string, procedure: any) =>
                requestResponse({
                    path: path,
                    baseURL,
                    body: procedure,
                    method: 'POST',
                    headers: {'Accept': 'application/json'}
                }),
            createOne: async (path: string, procedure: any) =>
                requestResponse({
                    path: path,
                    baseURL,
                    body: procedure,
                    method: 'POST',
                }),
            resetPassword: async (procedure: any) =>
                requestResponse({
                    path: "/api/password/reset",
                    baseURL,
                    body: procedure,
                    method: 'POST',
                }),
            deleteMulti: async (path: string, body: any) =>
                requestResponse({
                    path: path,
                    baseURL,
                    body: body,
                    method: 'DELETE',
                }),
        }
    }
}

// export * from './certificate-devolution/types';