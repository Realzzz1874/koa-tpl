import * as Koa from "koa";
import * as logger from "koa-logger";

const __DEV__ = process.env.NODE_ENV === "dev";

class Application {
  private app: Koa;
  constructor() {
    this.app = new Koa();
    this.init();
  }
  private init() {
    if (__DEV__) {
      this.app.use(logger());
    }
    this.app.use(async (ctx, next: () => Promise<any>) => {
      const path = ctx.request.path;
      console.log(`path====>: ${path}`);
      if (path === '/') {
        ctx.body = "Hello World!";
      }
      await next();
    });
  }

  public start(port: number) {
    this.app.listen(port, (): void => {
      console.log(
        `server has started, running with: http://127.0.0.1:${port}.`
      );
    });
  }
}

export default new Application();
