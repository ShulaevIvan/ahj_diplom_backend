const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();
router.allowedMethods();

router.get('/messages/types', async (ctx) => {
    const result = await api.getMessagesByType(ctx);
    ctx.response.body = result;
    ctx.response.status = 200;
});

module.exports = router;