class Quene {
    constructor () {
        this.dataStore = []
    }
    // 入队
    enquene (ele) {
        this.dataStore.push(ele)
    }
    // 出队
    dequene () {
        if (this.empty()) {
            return undefined
        } else {
            return this.dataStore.shift()
        }
    }
    // 读取队首元素
    front () {
        if (this.empty()) {
            return undefined
        } else {
            return this.dataStore[0]
        }
    }
    // 读取队尾元素
    back () {
        if (this.empty()) {
            return undefined
        } else {
            return this.dataStore[this.dataStore.length - 1]
        }
    }
    // 查看所有元素
    toString () {
        return this.dataStore.join('\n')
    }
    clear () {
        delete this.dataStore
        this.dataStore = []
    }
    empty () {
        return !this.dataStore.length
    }
}

const quene = new Quene()
quene.enquene('apple')
quene.enquene('pear')
quene.dequene()
quene.enquene('banana')
console.log(quene.toString())