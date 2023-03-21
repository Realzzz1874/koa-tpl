import * as Koa from 'koa';
import * as Types from '../types';
import { Context } from '@/core/koa';
const response = async (ctx: Context, next: Koa.Next) => {
  // success
  ctx.success = (data = null, status = Types.ResponseStatus.SUCCESS) => {
    ctx.status = status;
    ctx.body = {
      data,
    };
  };

  // error
  ctx.error = (
    code = Types.ErrorResponseCode.DEFAULT_ERROR_CODE,
    message = Types.ErrorResponseMessage.DEFAULT_ERROR,
    data = null,
    status = Types.ResponseStatus.SYSTEM_ERROR
  ) => {
    ctx.status = status;
    ctx.body = {
      code,
      message,
      data,
    };
  };

  await next();
};

export default response;