import { Context } from '@/core/koa';
export default class TestController {
  static async testGet(ctx: Context) {
    ctx.success('test done');
  }

  static async testPost(ctx: Context) {
    const params = ctx.request.body;
    console.log('testPost ====>', params);
    ctx.success(params);
  }
}
