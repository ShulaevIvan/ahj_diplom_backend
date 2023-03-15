class Database {
    constructor() {
        this.allData = [];
        this.id = 0;
    }

    add(data) {
        console.log(data)
        this.id += 1;
        const obj = {
            id: this.id,
            data: data,
            type: undefined,
        }
        this.allData.push(obj);
    }
}

const database = new Database();

module.exports = database;