class Dictionary {
    constructor () {
        this.dataStore = {}
    }
    find (key) {
        return this.dataStore[key]
    }
    add (key, value) {
        this.dataStore[key] = value
    }
    remove (key) {
        if (this.dataStore[key] !== undefined) {
            delete this.dataStore[key]
        }
    }
    count () {
        return Object.keys(this.dataStore).length
    }
    showAll () {
        for (let key in this.dataStore) {
            console.log(key + '->' + this.dataStore[key])
        }
    }
    clear  () {
        for (let key in this.dataStore) {
            delete this.dataStore[key]
        }
    }
}