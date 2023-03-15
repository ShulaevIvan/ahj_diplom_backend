const combineRouters = require('koa-combine-routers');
const index = require('./index/index');
const messages = require('./messages/messages');
const createMessage = require('./createMessage/createMessage');

const router = combineRouters(
  index,
  messages,
  createMessage
);

module.exports = router;