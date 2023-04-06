const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();
router.allowedMethods();

router.get('/messages/loadhistory', async (ctx) => {
  const result = await api.loadHistory();
  ctx.response.body = result;
  ctx.status = 200;
});

module.exports = router;
