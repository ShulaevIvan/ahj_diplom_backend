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

exports.searchMessages = (ctx) => new Promise((resolve, reject) => {
  try {
    const searchName = ctx.request.query;
    const searchData = database.allData.filter((findObj) => findObj.data.name === searchName.text)
    const result = {
      status: 'ok',
      messages: searchData
    }
    resolve(result)
  }
  catch (err) {
    console.log(err);
  }
});

exports.getWeather = (ctx) => new Promise((resolve, reject) => {
  try {
    
    const result = {
      status: 'ok',
      weather: database.generateWeather()
    }
    resolve(result)
  }
  catch (err) {
    console.log(err);
  }
});

exports.deleteAllMessages = (ctx) => new Promise((resolve, reject) => {
  try {
    database.allData = [];
    const result = {
      status: 'ok',
    }
    resolve(result)
  }
  catch (err) {
    console.log(err);
  }
});

exports.getFiles = (ctx) => new Promise((resolve, reject) => {
  try {
    const audioTypes = ['audio/ogg', 'audio/wav', 'audio/mp3', 'audio/mpeg'];
    const videoTypes = ['video/mp4', 'video/ogg', 'video/webm'];
    const imageTypes = ['image/apng', 'image/avif', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
    let filterData = [];
    if (database.allData.length > 0) {
      filterData = database.allData.filter((msg) => !audioTypes.includes(msg.data.type) && 
      !videoTypes.includes(msg.data.type) && !imageTypes.includes(msg.data.type) &&
      msg.data.type !== 'text' && !imageTypes.includes(msg.data.type));
    }
    const result = {
      status: 'ok',
      fiels: filterData,
    }
    resolve(result);
    
  }
  catch (err) {
    console.log(err);
  }
});

exports.getMedia = (ctx) => new Promise((resolve, reject) => {
  try {
    const audioTypes = ['audio/ogg', 'audio/wav', 'audio/mp3', 'audio/mpeg', 'audio'];
    const videoTypes = ['video/mp4', 'video/ogg', 'video/webm'];
    const imageTypes = ['image/apng', 'image/avif', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
    let filterData = [];
    if (database.allData.length > 0) {
      filterData = database.allData.filter((msg) => audioTypes.includes(msg.data.type) || 
      videoTypes.includes(msg.data.type) || imageTypes.includes(msg.data.type))
    }
    const result = {
      status: 'ok',
      fiels: filterData
    }
    resolve(result);
    
  }
  catch (err) {
    console.log(err);
  }
});