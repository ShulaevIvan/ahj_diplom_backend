const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();


router.post('/messages/setpinned', async (ctx) => {
  const result = await api.setPinnedMessage(ctx);
  ctx.response.body = result;
  ctx.response.status = 200;
});

router.allowedMethods();

module.exports = router;
