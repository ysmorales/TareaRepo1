export interface IErrorWithMessage {
  message?: string;
  glosaRetorno?: string;
}

export type IError = IErrorWithMessage | null | string;
