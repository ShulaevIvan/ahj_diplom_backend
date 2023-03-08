const Router = require('koa-router');

const router = new Router();
router.allowedMethods();

router.get('/', async (ctx) => {
  ctx.response.body = 'root';
  ctx.response.status = 200;
});

module.exports = router;