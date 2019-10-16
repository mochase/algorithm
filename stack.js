class Stack {
    constructor () {
        this.dataStore = []
        this.deep = 0
    }

    push (ele) {
        this.dataStore[this.deep++] = ele
    }
    pop () {
        if (this.deep < 1) return
        this.dataStore.pop()
        this.deep--
    }
    // 查看栈顶元素
    peek () {
        if (this.deep === 0) {
            return undefined
        }
        return this.dataStore[this.deep - 1]
    }
    length () {
        return this.deep
    }
    clear () {
        delete this.dataStore
        this.dataStore = []
        this.deep = 0
    }
}