import * as KoaCors from 'koa2-cors';
const cors = KoaCors({
  origin: function (ctx) {
    // 设置允许来自指定域名请求
    const whiteList = ['http://localhost:3031']; //可跨域白名单
    const url = ctx.header.referer;
    if (whiteList.includes(url)) {
      return url;
    } else {
      return false;
    }
  },
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposeHeaders: ['www-authenticate', 'server-authorization'],
});
export default cors;
