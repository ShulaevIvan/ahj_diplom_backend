const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();
router.allowedMethods();

router.get('/commands/files', async (ctx) => {
  const result = await api.getFiles();
  ctx.response.body = result;
  ctx.status = 200;
});

module.exports = router;
