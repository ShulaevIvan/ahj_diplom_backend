const combineRouters = require('koa-combine-routers');
const index = require('./index/index');
const messages = require('./messages/messages');
const createMessage = require('./createMessage/createMessage');
const lastMessages = require('./lastMessages/lastMessages');
const actualMessages = require('./actualMessages/actualMessages');
const getLastId = require('./getLastId/getLastId');
const loadHistory = require('./loadHistory/loadHistory');
const searchMessages = require('./searchMessages/searchMessages');


const router = combineRouters(
  index,
  messages,
  createMessage,
  lastMessages,
  actualMessages,
  getLastId,
  loadHistory,
  searchMessages

);

module.exports = router;