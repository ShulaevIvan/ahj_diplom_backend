const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();

router.post('/messages/rmpinned', async (ctx) => {
  const result = await api.rmPinnedMessage(ctx);
  ctx.response.body = result;
  ctx.response.status = 201;
});

module.exports = router;
