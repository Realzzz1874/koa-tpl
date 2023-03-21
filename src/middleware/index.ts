import * as Koa from 'koa';
import response from './response';

const Middleware = (App: Koa) => {
  App.use(response);
};

export default Middleware;