import * as Router from 'koa-router';
import { DefaultState } from 'koa';
import { Context } from '@/core/koa';
const router = new Router<DefaultState, Context>();

import TestController from '../controller/test';

// 注册地址 ---- start

router.get('/test', TestController.testGet);
router.post('/test', TestController.testPost);

// 注册地址 ---- end

export default router;
