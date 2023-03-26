const http = require('http');
const Koa = require('koa');
const WS = require('ws');
const { v4: uuidv4 } = require('uuid');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const router = require('./routes');
const database = require('./database/db');

const app = new Koa();
const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());

const wsServer = new WS.Server({
  server,
});

wsServer.on('connection', (ws) => {
  ws.on('close', (e) => {

  });

  ws.on('message', (e) => {
    const data = JSON.parse(e.toString());
    if (data) {
      // const id = database.incrementId()
      database.add(data);
    }
  });


});


app.use(koaBody({
  urlencoded: true,
}));
app.use(cors());
app.use(router());
server.listen(port);