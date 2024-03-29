class Database {
  constructor() {
    this.allData = [];
    this.history = undefined;
    this.actualMessages = [];
    this.allIds = [];
    this.weatherData = [];
    this.id = 1;
    this.counter = 0;
    this.historyCounter = 0;
    this.generateWeather();
  }

  generateWeather() {
    const timeNow = new Date().toJSON().toString().match(/\d{4}\S\d{2}\S\d{2}/);
    const resultData = [];
    this.randTemp = undefined;
    this.randWind = undefined;

    for (let i = 0; i < 100; i += 1) {
      const minDate = new Date(timeNow).getTime();
      const maxDate = new Date(2024, 0, 1).getTime();
      const timestamp = Math.floor(Math.random() * (maxDate - minDate + 1) + minDate);
      this.randTemp = Math.floor(Math.random() * (40 - -30 + 1)) + -30;
      this.randWind = Math.floor(Math.random() * (32 - 0 + 1)) + 0;

      const weatherObj = {
        year: new Date(timestamp).getFullYear(),
        month: new Date(timestamp).getMonth(),
        day: new Date(timestamp).getDay(),
        temp: this.randTemp,
        wind: this.randWind,
      };
      resultData.push(weatherObj);
    }
    return resultData[Math.floor(Math.random() * resultData.length)];
  }

  incrementId() {
    this.id += 1;
    return this.id;
  }

  add(data) {
    this.data = data;
    const obj = {
      data: this.data,
      type: undefined,
    };
    this.allData.push(obj);
    this.counter += 1;
  }

  last() {
    const currentDate = new Date().getTime();
    const last = this.allData.slice(-10);
    return last;
  }

  lastId() {
    const lastId = this.id;
    this.incrementId();
    return lastId;
  }
}

const database = new Database();

module.exports = database;
