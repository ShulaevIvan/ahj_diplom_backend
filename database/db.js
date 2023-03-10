class Database {
    constructor() {
        this.allData = [];
        this.id = 0;
    }

    add(data) {
        this.id += 1;
        const obj = {
            id: this.id,
            data: data,
            type: undefined,
        }
        this.allData.push(data);
    }
}

const database = new Database();

module.exports = database