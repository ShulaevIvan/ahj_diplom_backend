class Database {
    constructor() {
        this.allData = [];
        this.history = undefined;
        this.actualMessages = [];
        this.id = 1;
        this.allIds = [];
        this.counter = 0;
    }

    incrementId() {
        this.id += 1;
        return this.id;
    }


    add(data) {
        const obj = {
            data: data,
            type: undefined,
        }
        this.allData.push(obj);
        this.counter +=1;
    }
    
    last() {
      const currentDate = new Date().getTime()
      const last = this.allData.slice(-10);
      return last
    }

    lastId() {
        return this.id;
    }
}

const database = new Database();

module.exports = database;