import * as Koa from 'koa';
import response from './response';
import KoaCors from './cors';
const Middleware = (App: Koa) => {
  App.use(response);
  App.use(KoaCors);
};

export default Middleware;
