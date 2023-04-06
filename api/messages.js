const database = require('../database/db');

exports.getMessages = (ctx) => new Promise((resolve, reject) => {
  try {
    const result = {
      status: 'ok',
      messages: database.allData,
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

exports.createMessage = (ctx) => new Promise((resolve, reject) => {
  try {
    const result = {
      status: 'ok',
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
      messages: database.last(),
    };
    resolve(result);
  } catch (err) {
    reject(err);
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
    } else {
      stepStart = database.historyCounter;
      stepEnd = database.historyCounter + 10;
    }
    const displayingMessages = ctx;
    const loadingMessages = [];
    database.allData.forEach((item) => {
      if (!displayingMessages.includes(item.data.id)) {
        loadingMessages.push(item);
      }
    });
    // eslint-disable-next-line
    database.history = loadingMessages.sort((a, b) => new Date(a.data.date) - new Date(b.data.date)).reverse();
    const result = {
      status: 'ok',
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

exports.getLastId = (ctx) => new Promise((resolve, reject) => {
  try {
    const result = {
      status: 'ok',
      lastId: database.lastId(ctx),
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

exports.loadHistory = (ctx) => new Promise((resolve, reject) => {
  try {
    let historyArr = database.history;
    if (database.history.length > 10) {
      historyArr = database.history.slice(0, 10);
    }

    const result = {
      status: 'ok',
      history: historyArr,
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

exports.searchMessages = (ctx) => new Promise((resolve, reject) => {
  try {
    const searchName = ctx.request.query;
    // eslint-disable-next-line
    let searchData = database.allData.filter((findObj) => findObj.data.name.toLowerCase() === searchName.text.toLowerCase());
    if (searchData.length === 0) {
      searchData = [];
      const pattern = new RegExp(`${searchName.text.toLowerCase()}`, 'g');
      database.allData.forEach((findObj, i) => {
        if (findObj.data.name.toLowerCase().match(pattern)) {
          searchData.push({ data: findObj.data });
        }
      });
    }
    const result = {
      status: 'ok',
      messages: searchData,
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

exports.getWeather = (ctx) => new Promise((resolve, reject) => {
  try {
    const result = {
      status: 'ok',
      weather: database.generateWeather(),
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

exports.deleteAllMessages = (ctx) => new Promise((resolve, reject) => {
  try {
    database.allData = [];
    const result = {
      status: 'ok',
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

exports.getFiles = (ctx) => new Promise((resolve, reject) => {
  try {
    const audioTypes = ['audio/ogg', 'audio/wav', 'audio/mp3', 'audio/mpeg'];
    const videoTypes = ['video/mp4', 'video/ogg', 'video/webm'];
    const imageTypes = ['image/apng', 'image/avif', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
    let filterData = [];
    if (database.allData.length > 0) {
      filterData = database.allData.filter((msg) => !audioTypes.includes(msg.data.type)
      && !videoTypes.includes(msg.data.type) && !imageTypes.includes(msg.data.type)
      && msg.data.type !== 'text' && !imageTypes.includes(msg.data.type));
    }
    const result = {
      status: 'ok',
      fiels: filterData,
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

exports.getMedia = (ctx) => new Promise((resolve, reject) => {
  try {
    const audioTypes = ['audio/ogg', 'audio/wav', 'audio/mp3', 'audio/mpeg', 'audio'];
    const videoTypes = ['video/mp4', 'video/ogg', 'video/webm'];
    const imageTypes = ['image/apng', 'image/avif', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp'];
    let filterData = [];
    if (database.allData.length > 0) {
      filterData = database.allData.filter((msg) => audioTypes.includes(msg.data.type)
      || videoTypes.includes(msg.data.type) || imageTypes.includes(msg.data.type));
    }
    const result = {
      status: 'ok',
      fiels: filterData,
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

exports.setPinnedMessage = (ctx) => new Promise((resolve, reject) => {
  try {
    const { id } = ctx.request.body;
    let pinned;
    database.allData.forEach((item) => {
      if (Number(item.data.id) === Number(id)) {
        // eslint-disable-next-line
        item.data.pinned = true;
        pinned = item.data;
      }
    });
    const result = {
      status: 'ok',
      pinnedMessage: pinned,
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

exports.rmPinnedMessage = (ctx) => new Promise((resolve, reject) => {
  try {
    const { id } = ctx.request.body;
    database.allData.forEach((item) => {
      if (Number(item.data.id) === Number(id)) {
        // eslint-disable-next-line
        item.data.pinned = false;
      }
    });
    const result = {
      status: 'ok',
    };
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

exports.getCounterByType = (type) => new Promise((resolve, reject) => {
  try {
    const typesObj = {
      text: ['text', 'url'],
      image: ['image/apng', 'image/avif', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp', 'image/avif', 'image/bmp'],
      audio: ['audio/ogg', 'audio/wav', 'audio/mp3', 'audio/mpeg'],
      video: ['video/mp4', 'video/ogg', 'video/webm', 'video/x-msvideo'],
      fiels: [
        'application/x-abiword', 'application/x-freearc', 'application/vnd.amazon.ebook', 'application/x-bzip', 'application/x-bzip2',
        'text/csv', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-fontobject', 'application/gzip', 'text/html', 'application/pdf', 'application/vnd.rar',
      ],
      geolocation: ['geolocation'],
    };
    const resultArr = [];

    new Promise((res, rej) => {
      if (type === 'geolocation' || type === 'image') {
        database.allData.forEach((msgObj) => {
          if (typesObj[type].includes(msgObj.data.type) || msgObj.data.type === 'geolocation') {
            resultArr.push(msgObj.data);
          }
        });
      } else {
        database.allData.forEach((msgObj) => {
          if (typesObj[type].includes(msgObj.data.type)) {
            resultArr.push(msgObj.data);
          }
        });
      }
      res(resultArr);
    })
      .then((data) => {
        const result = {
          status: 'ok',
          counter: data.length,
          messages: data,
        };
        resolve(result);
      });
  } catch (err) {
    reject(err);
  }
});

exports.getMessagesByType = (ctx) => new Promise((resolve, reject) => {
  try {
    const type = ctx.request.url.match(/(\w+\/\w+)$|\w+$/g)[0];
    const typesObj = {
      text: ['text', 'url'],
      image: ['image/png', 'image/avif', 'image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/webp', 'image/avif', 'image/bmp'],
      audio: ['audio/ogg', 'audio/wav', 'audio/mp3', 'audio/mpeg'],
      video: ['video/mp4', 'video/ogg', 'video/webm', 'video/x-msvideo'],
      fiels: [
        'application/x-abiword', 'application/x-freearc', 'application/vnd.amazon.ebook', 'application/x-bzip', 'application/x-bzip2',
        'text/csv', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-fontobject', 'application/gzip', 'text/html', 'application/pdf', 'application/vnd.rar',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ],
      geolocation: ['geolocation'],
    };
    let resultArr = [];
    database.allData.forEach((item) => {
      if (type === 'image') {
        if (item.data.type === 'geolocation' || typesObj.image.includes(item.data.type)) {
          resultArr.push(item);
        }
      } else if (type !== 'image' && type !== 'geolocation' && typesObj[type].includes(item.data.type)) {
        resultArr.push(item);
      }
    });
    const result = {
      status: 'ok',
      messages: resultArr,
    };
    resultArr = undefined;
    resolve(result);
  } catch (err) {
    reject(err);
  }
});
