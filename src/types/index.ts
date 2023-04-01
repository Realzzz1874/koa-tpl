declare module 'koa' {
  interface DefaultState {}
  interface DefaultContext {
    success: TSuccess;
    error: TError;
  }
}

// http status
export enum ResponseStatus {
  SUCCESS = 200,
  SYSTEM_ERROR = 500,
}

// system error code
export enum ErrorResponseCode {
  // 系统错误
  DEFAULT_ERROR_CODE = 10000,
  // 参数不正确
  INVALID_PARAMS_CODE = 422,
}

// system error message
export enum ErrorResponseMessage {
  SYSTEM_ERROR = '系统错误',
  INVALID_PARAMS_MESSAGE = '参数不正确',
}

// ctx.success()
export type TSuccess = (data?: any, status?: ResponseStatus) => void;
// ctx.error()
export type TError = (
  message: ErrorResponseMessage | string,
  code?: ErrorResponseCode | number,
  data?: any,
  status?: ResponseStatus
) => void;
