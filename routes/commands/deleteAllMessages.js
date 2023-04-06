const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();
router.allowedMethods();

router.delete('/commands/deleteall', async (ctx) => {
  const result = await api.deleteAllMessages();
  ctx.status = 204;
});

module.exports = router;
