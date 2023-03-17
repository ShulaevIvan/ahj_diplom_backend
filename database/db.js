class Database {
    constructor() {
        this.allData = [];
        this.history = [];
        this.id = 0;
        this.counter = 0;
    }

    add(data) {
        this.id += 1;
        const obj = {
            id: this.id,
            data: data,
            type: undefined,
        }

        this.allData.push(obj);
        this.counter +=1
        if (this.counter === 10) {
            this.counter = 0;
            this.history.push(this.allData)
            return this.id
        }
        return this.id
    }
    
    last() {
      const currentDate = new Date().getTime()
      const last = this.allData.reverse().slice(-10);
      console.log(this.history)
      return last
    }
}

const database = new Database();

module.exports = database;