
import type { ICertificateRequest, IListRequest } from "~/api-services/creator";
import type { IMeta } from "~/api-services/global-interface/interfaces";
import { isValidResponse } from "~/api-services/utils";

export interface Item {
  status: number;

  [key: string]: any;
}

export const transformList = (list: any) =>
  list && Array.isArray(list)
    ? list?.map((d) => ({
      ...d?.functionary,
      ...d,
      name: d?.functionary?.nombre_funcionario || d.name,
    }))
    : [];

export function getList(detail: any): any[] {
  return isValidResponse(detail?.codigoRetorno)
    ? detail?.respuesta?.data
      ? transformList(detail?.respuesta?.data)
      : Array.isArray(detail?.respuesta)
        ? detail?.respuesta
        : []
    : [];
}

export function getListMock(detail: any): any[] {
  return detail;
}


export function getData(detail: ICertificateRequest): any {
  return isValidResponse(detail?.codigoRetorno)
    ? detail?.respuesta?.data
      ? detail?.respuesta?.data
      : detail?.respuesta
    : [];
}

export function getPaginator(detail: any): IMeta {
  return isValidResponse(detail?.codigoRetorno)
    ? detail?.respuesta?.meta
      ? detail?.respuesta?.meta
      : detail?.respuesta
    : {};
}

export function getMeta(detail: any): IMeta {
  return getPaginator(detail);
}

export function getItem(detail: Partial<IListRequest> | null, id: string) {
  if (isValidResponse(detail?.codigoRetorno) && detail?.respuesta) {
    if (detail?.respuesta?.data && Array.isArray(detail?.respuesta?.data)) {
      return detail?.respuesta?.data.find((f) => f.id === parseInt(id, 10));
    }
    return detail?.respuesta?.data ?? detail?.respuesta;
  }

  return null;
}

export function getOnlyItem(detail: any) {
  if (isValidResponse(detail?.codigoRetorno)) {
    // console.log(detail?.respuesta)
    return detail?.respuesta?.data;
  }

  return null;
}

export function getError(detail: any) {
  return !isValidResponse(detail?.codigoRetorno) ? detail : false;
}
