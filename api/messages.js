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

exports.addMesssage = (data) => new Promise((resolve, reject) => {
  try {
    console.log(data);
  }
  catch (err) {
    console.log(err);
  }
});