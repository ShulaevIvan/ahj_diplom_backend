const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();
router.allowedMethods();

router.get('/messages', async (ctx) => {
  const result = await api.getMessages();
  ctx.response.body = result;
  ctx.response.status = 200;
});

// router.get('/messages/id:', async (ctx) => {
//     ctx.response.body = '1';
//     ctx.response.status = 200;
// })

module.exports = router;