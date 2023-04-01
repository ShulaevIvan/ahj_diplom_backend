const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();
router.allowedMethods();

router.post('/messages/add/', async (ctx) => {
    const result = await api.createMessage(ctx);
    ctx.status = 201;
});

module.exports = router;