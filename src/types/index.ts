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
  DEFAULT_ERROR_CODE = 10000,
  INVALID_PARAMS_CODE = 10001,
}

// system error message
export enum ErrorResponseMessage {
  INVALID_PARAMS = '参数不正确',
  DEFAULT_ERROR = '系统错误',
}

export type TSuccess = (data?: any, status?: ResponseStatus) => void;

export type TError = (
  code: ErrorResponseCode,
  message?: ErrorResponseMessage,
  data?: any,
  status?: ResponseStatus
) => void;
