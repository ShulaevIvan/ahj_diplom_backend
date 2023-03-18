const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();
router.allowedMethods();

router.post('/messages/actual', async (ctx) => {

    const result = await api.actualMessages(ctx.request.body);
    ctx.status = 201;
});


module.exports = router;