import type { RoleName } from './roles.ts'
export interface IItemBuilder {
    id?: number;
    name?: string;
    type: 'DsConfirmationButton' | 'DsSelect' | 'DsInput' | 'DsTextArea';
    validation?: { required: boolean, custom?: 'defecto' | 'email' | 'number' | 'text' | 'run' };
    props?: {
        [key: string]: any;
    };
}

export interface IUser {
    id: number | null,
    name: string | null,
    first_name: string | null,
    last_name: string | null,
    run: string | null,
    dv: string | null,
    email: string | null,
    job_title: string | null,
    office_location: string | null,
    photo: string | null,
    roles: string | null
}
export interface IErrorFetch {
    statusCode: number
    data: string
}
export interface IErrorWithMessage {
    message?: string
    glosaRetorno?: string
}
export interface IMap {
    [key: string]: string | undefined | boolean | string[]
}
export interface IQuery {
    paginate: Number | String,
    page: Number | String,
}
export type IRoles = RoleName[] | RoleName
export interface IMenu {
    link: string
    id: number
    text: string
    roles: IRoles
    onInit?: boolean
    sideRight: boolean
    hiddenSideRight?: boolean
}
export interface IConfig {
    title: string
    name: string
    textUtil: string
    path: string
    api: string
    image: string
    active: boolean
    mediaLink: string
    customRightSideComponent?: boolean
    menu: IMenu[]
    isDone?: boolean
}

export type role = 'USER' | 'OPERATOR' | 'ADMIN'
