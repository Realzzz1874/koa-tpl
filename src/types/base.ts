declare module 'koa' {
  interface DefaultState { }
  interface DefaultContext {
    success: TSuccess,
    error: TError
  }
}
export enum EResponseStatus {
  SUCCESS = 200,
  ERROR = 500
}
export enum ErrorResponseCode {
  DEFAULT_ERROR_CODE = 10000,
  INVALID_PARAMS_CODE = 10001
}
export enum ErrorResponseMsg {
  INVALID_PARAMS = '参数不正确',
  DEFAULT_ERROR = '系统错误'
}
export type TSuccess = (data?: any, status?: EResponseStatus) => void;
export type TError = (
  code: ErrorResponseCode,
  message?: ErrorResponseMsg,
  data?: any,
  status?: EResponseStatus
) => void;
