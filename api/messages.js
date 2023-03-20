const database = require('../database/db');

exports.getMessages = (ctx) => new Promise((resolve, reject) => {
    try {
      const result = {
        status: 'ok',
        messages: database.allData
      };
      resolve(result);
    } catch (err) {
      reject(err);
    }
});


exports.lastMessages = (ctx) => new Promise((resolve, reject) => {
  try {
    const result = {
      status: 'ok',
      messages: database.last()
    };
    resolve(result);
  }
  catch (err) {
    console.log(err);
  }

});

exports.actualMessages = (ctx) => new Promise((resolve, reject) => {
  try {
    let stepStart;
    let stepEnd;
    if (database.historyCounter === 0) {
      stepStart = 0;
      stepEnd = 10;
      database.historyCounter = stepEnd;
    }
    else {
      stepStart = database.historyCounter;
      stepEnd  = database.historyCounter + 10;
    }
    const displayingMessages = ctx;
    const loadingMessages = [];
    database.allData.forEach((item) => {
      if (!displayingMessages.includes(item.data.id)) {
        loadingMessages.push(item);
      }
    });
    database.history = loadingMessages.sort((a, b) => new Date(a.data.date) - new Date(b.data.date)).reverse();
    const result = {
      status: 'ok',
    };
    resolve(result);
  }
  catch (err) {
    console.log(err);
  }

});

exports.getLastId = (ctx) => new Promise((resolve, reject) => {
  try {
    const result = {
      status: 'ok',
      lastId: database.lastId()
    };
    resolve(result);
  }
  catch (err) {
    console.log(err);
  }

});

exports.loadHistory = (ctx) => new Promise((resolve, reject) => {
  try {
    let history = database.history
    if (database.history.length > 10) {
      history = database.history.slice(0, 10);
    }

    const result = {
      status: 'ok',
      history: history,
    };
    resolve(result);
  }
  catch (err) {
    console.log(err);
  }
  
});