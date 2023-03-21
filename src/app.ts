import * as Koa from 'koa';
import * as Logger from 'koa-logger';
import { koaBody } from 'koa-body';
import { Context } from '@/core/koa';
import router from './routes';

import Middleware from './middleware';

const __DEV__ = process.env.NODE_ENV === 'dev';

class Application {
  private app: Koa;
  constructor() {
    this.app = new Koa();
    this.init();
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
      console.log(`server has started, running with: http://127.0.0.1:${port}`);
    });
  }
}

export default new Application();
