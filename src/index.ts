import * as Koa from "koa";

const App = new Koa();

App.use(async (ctx) => {
  ctx.body = "Hello World!";
});
App.listen(3000);
