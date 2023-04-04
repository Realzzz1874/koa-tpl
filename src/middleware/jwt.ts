import * as Koa from 'koa';
import { Context } from '@/core/koa';
const jwt = async (ctx: Context, next: Koa.Next) => {
  await next();
};
export default jwt;
