import type { ITrainingEditRequest, IListRequest } from './types';
import type { AsyncData, IConfig, IError } from "~/global-interface/interfaces.js"
import { requestResponse } from '~/api-services/utils';
import { getBaseUrl } from '~/api-services/utils/getBaseUrl';

export default function (configApi?: IConfig | undefined) {

    const config = (configApi) as IConfig
    const baseURL = getBaseUrl(config, 'builder')

    return {
        getBaseUrl: () => baseURL,

        request: {
            add: (payload: ITrainingEditRequest) => {

                const formData = new FormData();
                formData.append("phone", payload.phone as unknown as string);
                formData.append("celular", payload.celular as unknown as string);
                formData.append("specialMobility", payload.specialMobility as unknown as string);
                formData.append("payMode", payload.payMode as unknown as string);
                formData.append("accountType: ", payload.accountType as unknown as string);
                formData.append("accountNumber", payload.accountNumber as unknown as string);
                formData.append("seasonId", payload.seasonId as unknown as string);
                formData.append("roomId", payload.roomId as unknown as string);
                formData.append("functionary", payload.functionary as unknown as string);
                formData.append("numPersons", payload.numPersons as unknown as string);
                formData.append("startDate", payload.startDate as unknown as string);
                formData.append("endDate", payload.endDate as unknown as string);
                formData.append("mode", payload.mode as unknown as string);
                formData.append("bank", payload.bank as unknown as string);
                formData.append("payMode", payload.payMode as unknown as string);

                if (payload.salarySettlement) {
                    formData.append("salarySettlement", payload.salarySettlement as unknown as string);
                }
                if (payload.idRequest) {
                    formData.append("idRequest", payload.idRequest as unknown as string);
                }
                if (payload.status) {
                    formData.append("status", payload.status as unknown as string);
                }

                return requestResponse({
                    path: `/request`,
                    baseURL,
                    body: formData,
                    method: 'POST',
                    manifest: config
                })
            },

            update: (payload: ITrainingEditRequest) => {
                return requestResponse({
                    path: `/request/update`,
                    baseURL,
                    body: payload,
                    method: 'POST',
                    manifest: config
                })
            },

            get: (
                id: any,
                query?: any
            ): Promise<AsyncData<Partial<IListRequest>, IError>> => {

                const path = `request/${id.value}`

                return requestResponse({
                    path,
                    query,
                    baseURL,
                    withAsyncData: { keyName: path, useCache: true, watch: [id] },
                    manifest: config
                })
            },

            getHistory: (
                id: any
            ): Promise<AsyncData<Partial<IListRequest>, IError>> => {

                const path = `request/${id.value}/history`

                return requestResponse({
                    path,
                    baseURL,
                    withAsyncData: { keyName: path, useCache: true, watch: [id] },
                    manifest: config
                })
            },

            getFiltersInfo: (query, watch): Promise<AsyncData<Partial<IListRequest>, IError>> => {
                const path = `/request/filters`

                return requestResponse({
                    path,
                    baseURL, withAsyncData: { keyName: `/request/filters${JSON.stringify(query)}`, watch, useCache: false, useWatchQuery: true },
                    manifest: config
                })
            },

            getAll: (
                keyName = 'listRequest',
                watch: any,
                useCache: boolean,
                query?: any,
                useWatchQuery?: boolean
            ): Promise<AsyncData<Partial<IListRequest>, IError>> =>
                requestResponse({
                    path: `/request`,
                    baseURL,
                    query,
                    withAsyncData: { keyName, useCache, watch, useWatchQuery },
                    manifest: config
                })
        }
    }
}

export * from './types'