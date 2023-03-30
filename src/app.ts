import * as Koa from 'koa';
import * as Logger from 'koa-logger';
import { koaBody } from 'koa-body';
import { Context } from '@/core/koa';
import db from './database/connect';
import Middleware from './middleware';
import router from './routes';

const __DEV__ = process.env.NODE_ENV === 'dev';

class Application {
  private app: Koa;
  constructor() {
    this.app = new Koa();
    this.init();
    db.initialize()
      .then(() => {
        console.log(`====> Data Source has been initialized!`);
      })
      .catch((err) => {
        console.error(`====> Data Source initialize err:\n${err}`);
      });
  }

  private init() {
    if (__DEV__) {
      this.app.use(Logger());
    }

    this.app.use(
      koaBody({
        multipart: true,
      })
    );

    // 注册中间件
    Middleware(this.app);

    // routes
    this.app.use(router.routes());

    this.app.use(async (ctx: Context, next: () => Promise<any>) => {
      const path = ctx.request.path;
      console.log(`path====>: ${path}`);
      if (path === '/') {
        ctx.success('Hello World!');
      }
      await next();
    });
  }

  public start(port: number) {
    this.app.listen(port, (): void => {
      console.log(
        `====> server has started, running with: http://127.0.0.1:${port}`
      );
    });
  }
}

export default new Application();
