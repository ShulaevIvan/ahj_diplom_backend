const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();
router.allowedMethods();

router.get('/messages/search', async (ctx) => {
  const result = await api.searchMessages(ctx);
  ctx.response.body = result;
  ctx.response.status = 200;
});


module.exports = router;