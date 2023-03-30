import { Context } from '@/core/koa';
import UserModel from '../model/User';
export default class TestController {
  static async testGet(ctx: Context) {
    // ctx.success('test done');
    const user = await UserModel.addUser();
    ctx.success(user);
  }

  static async testPost(ctx: Context) {
    const params = ctx.request.body;
    console.log('testPost ====>', params);
    ctx.success(params);
  }
}
