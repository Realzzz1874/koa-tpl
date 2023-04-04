import * as Koa from 'koa';
import response from './response';
import cors from './cors';
import jwt from './jwt';
const Middleware = (App: Koa) => {
  App.use(response);
  App.use(cors);
  App.use(jwt);
};

export default Middleware;
