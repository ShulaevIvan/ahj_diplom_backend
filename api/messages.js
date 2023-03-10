const database = require('../database/db');

exports.getMessages = (ctx) => new Promise((resolve, reject) => {
    try {
      const result = {
        status: 'ok',
        timestamp: Number(new Date())
      };
      resolve(result);
    } catch (err) {
      reject(err);
    }
});