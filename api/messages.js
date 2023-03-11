const database = require('../database/db');

exports.getMessages = (ctx) => new Promise((resolve, reject) => {
    try {
      console.log(database)
      const result = {
        status: 'ok',
        messsages: database.allData
      };
      resolve(result);
    } catch (err) {
      reject(err);
    }
});