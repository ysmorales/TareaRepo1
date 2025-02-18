

export enum RoleName {
  ADMIN = 'admin',
  EDITOR = 'editor',
  VIEWER = 'viewer',
  COORDINATOR = 'coordinator',
}

/**
* PermissionName
*/
export enum PermissionName {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
}

export interface IUser {
  id: number | null,
  name: string | null,
  first_name: string | null,
  last_name: string | null,
  functionary?: object,
  run: string | null,
  dv: string | null,
  email: string | null,
  job_title: string | null,
  office_location: string | null,
  photo: string | null,
  roles: string[] | string
}


export interface DecryptedResponse {
  glosaRetorno: string;
  timestamp: string;
  codigoRetorno: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  respuesta: { data: any, respuesta?: any };
}


export interface IQuery {
  paginate: number | string,
  page: number | string,
}

export type AsyncData<DataT, ErrorT> = {
  data: Ref<DataT | null>
  refresh: (opts?: AsyncDataExecuteOptions) => Promise<void>
  execute: (opts?: AsyncDataExecuteOptions) => Promise<void>
  clear: () => void
  error: Ref<ErrorT | null>
  status: Ref<AsyncDataRequestStatus>
};

interface AsyncDataExecuteOptions {
  dedupe?: 'cancel' | 'defer'
}

export interface IErrorWithMessage {
  message?: string
  glosaRetorno?: string
}

export interface IErrorFetch {
  statusCode: number
  data: string
}

export type IError = IErrorWithMessage | null | string

type AsyncDataRequestStatus = 'idle' | 'pending' | 'success' | 'error'

export interface IApiResponseWrapper<T> {
  codigoRetorno: number
  glosaRetorno: string
  respuesta: T
}

export interface IJefatura {
  run: string
  nombre_supervisor: string
  email: string
}

export interface IFunctionary {
  run: string
  nombre_funcionario: string
  email: string
  sexo: string
  fecha_ingreso: string
  region: string
  departamento: string
  unidad: string
  cargo: string
  jefatura: IJefatura
  horario?: string
}

export interface IItemRequest {
  id: number | string
  status: string
  created_at: string
  run: string
  date_change: string
  functionary: IFunctionary
  status_system?: string
  range_type?: string
  reason?: string
  file?: string
}

export interface ILinks {
  first: string
  last: string
  prev: string | null
  next: string | null
}

export interface IMeta {
  current_page: number
  from: number
  last_page: number
  links: Array<{ url: string | null, label: string, active: boolean }>
  path: string
  per_page: number
  to: number
  total: number
}

export interface IApiResponsePagination<T> {
  data: T[] | T
  glosaRetorno: string
  links: ILinks
  meta: IMeta
  query: Partial<IQuery>
}


export interface IData<T> {
  data: T
}

export type IUserProfile = IUser & IData<IUser>

export type IUserRequest = IApiResponseWrapper<IUserProfile>

export type IRoles = RoleName[] | RoleName

export interface IMenu {
  link: string
  id: number
  text: string
  roles: IRoles
  onInit?: boolean
  sideRight: boolean
  centerFull?: boolean
  hiddenSideRight?: boolean
  activeOnInmediate?: boolean
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
  exclude?: string[]
}

export interface IMap {
  [key: string]: string | undefined | boolean | string[]
}

export interface SubItem {
  label: string;
  value: string | string[];
  isTag?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rowRender?: any;
  class?: string
}

export interface IItems {
  title: string;
  subItems: SubItem[];
}
