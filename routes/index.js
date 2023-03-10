const combineRouters = require('koa-combine-routers');
const index = require('./index/index');
const messages = require('./messages/messages');

const router = combineRouters(
  index,
  messages
);

module.exports = router;