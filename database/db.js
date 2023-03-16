class Database {
    constructor() {
        this.allData = [
            {
                id: 11,
                data: { type: 'text', name: 'dfg', value: 'dfg', date: 1678970397255 },
                type: undefined
            },
            {
                id: 12,
                data: { type: 'text', name: 'dfg', value: 'dfg', date: 1678970397255 },
                type: undefined
            },
            {
                id: 13,
                data: { type: 'text', name: 'dfg', value: 'dfg', date: 1678970397255 },
                type: undefined
            },
            {
                id: 14,
                data: { type: 'text', name: 'dfg', value: 'dfg', date: 1678970397255 },
                type: undefined
            },
            {
                id: 15,
                data: { type: 'text', name: 'dfg', value: 'dfg', date: 1678970397255 },
                type: undefined
            },
            {
                id: 16,
                data: { type: 'text', name: 'dfg', value: 'dfg', date: 1678970397255 },
                type: undefined
            },
            {
                id: 17,
                data: { type: 'text', name: 'dfg', value: 'dfg', date: 1678970397255 },
                type: undefined
            },
            {
                id: 18,
                data: { type: 'text', name: 'dfg', value: 'dfg', date: 1678970397255 },
                type: undefined
            },
            {
                id: 19,
                data: { type: 'text', name: 'dfg', value: 'dfg', date: 1678970397255 },
                type: undefined
            },
            {
                id: 20,
                data: { type: 'text', name: 'dfg', value: 'dfg', date: 1678970397255 },
                type: undefined
            },
        ];
        this.id = 0;
        this.lastMsg = undefined
    }

    add(data) {
        this.id += 1;
        const obj = {
            id: this.id,
            data: data,
            type: undefined,
        }
        this.allData.push(obj);
        return this.id
    }
    
    last() {
        const currentTime = new Date().getTime();
        if (this.allData.length > 10) {
            let sortedData = this.allData;
            //FIND INDEX LAST MSG TOMORROW 
            sortedData.sort((a, b) => a.data.date - b.data.date).slice(0, 10);
            this.lastMsg = sortedData[sortedData.length -1];
            sortedData.forEach((item) => {
                console.log(new Date(item.data.date))
            })
            return sortedData;
        }
        else {
            return this.allData
        }
    }
}

const database = new Database();

module.exports = database;