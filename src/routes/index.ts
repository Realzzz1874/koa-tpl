import * as Router from 'koa-router';
const router = new Router();

import TestController from '../controller/test';

// 注册地址 ---- start

router.get('/test', TestController.testGet);
router.post('/test', TestController.testPost);

// 注册地址 ---- end

export default router;
