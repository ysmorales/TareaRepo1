import type { RoleName } from '~/roles/roles'
import type { IApiResponseWrapper, IApiResponsePagination, IData, IFunctionary } from "~/global-interface/interfaces.js"

export interface IUserListItem {
    date?: string
    email?: string
    id?: number
    name?: string
    roles?: RoleName
    created_at?: string
    run?: string
}

export interface IUserRolesTable {
    id: number
    email: string
    roles: RoleName
    role: number
    created_at: string
    updated_at: string
    role_text: string
    run: string
    regional_direction_id: number | null
}

export type IUserListResponse = Array<IUserListItem>

export interface ITrainingEditRequestPayload {
    certificate: {
        run: string
        date: string
        hours: number
        identifier: string
        total_hours: string
    },
    user: IFunctionary
}

export interface ITrainingEditRequest {
    name: string
    startDate: string,
    endDate: string,
    provider: string,
    numHrs: number,
    participants: File,
    participantsRuns: string[] | string,
    id?: string | number
}

export interface ICertificateInfo {
    id?: number,
    authenticity_link?: string | null
}

export interface IVerify {
    isValid: boolean,
    isCurrent: boolean,
    days: number
}


export interface IFile {
    type: string,
}

export interface IListRequest extends IApiResponseWrapper<IApiResponsePagination<ITrainingEditRequest>> { }
export interface ICertificateRequest extends IApiResponseWrapper<IApiResponsePagination<IData<ICertificateInfo>>> { }
