const combineRouters = require('koa-combine-routers');
const index = require('./index/index');
const messages = require('./messages/messages');
const createMessage = require('./createMessage/createMessage');
const lastMessages = require('./lastMessages/lastMessages');

const router = combineRouters(
  index,
  messages,
  createMessage,
  lastMessages
);

module.exports = router;