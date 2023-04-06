const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();
router.allowedMethods();

router.get('/messages/counter', async (ctx) => {
  const type = ctx.request.url.match(/(\w+\/\w+)$|\w+$/g)[0];
  const result = await api.getCounterByType(type);
  ctx.response.body = result;
  ctx.response.status = 200;
});

module.exports = router;
