const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();
router.allowedMethods();

router.get('/commands/media', async (ctx) => {
  const result = await api.getMedia();
  ctx.response.body = result;
  ctx.status = 200;
});

module.exports = router;
