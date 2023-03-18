const Router = require('koa-router');
const api = require('../../api/messages');

const router = new Router();
router.allowedMethods();

router.get('/messages/lastid', async (ctx) => {

    const result = await api.getLastId();
    ctx.response.body = result;
    ctx.status = 200;
});

module.exports = router;
