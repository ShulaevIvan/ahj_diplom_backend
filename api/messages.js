const database = require('../database/db');

exports.getMessages = (ctx) => new Promise((resolve, reject) => {
    try {
      const result = {
        status: 'ok',
        messages: database.allData.sort((a, b) => a.data.date - b.data.date)
      };
      resolve(result);
    } catch (err) {
      reject(err);
    }
});

exports.addMesssage = (data) => new Promise((resolve, reject) => {
  try {
    console.log(data);
  }
  catch (err) {
    console.log(err);
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