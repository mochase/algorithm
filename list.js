function List () {
    this.listSize = 0
    this.pos = 0
    this.dataStore = []
}

List.prototype.clear = function () {
    delete this.dataStore
    this.listSize = 0
    this.pos = 0
    this.dataStore = []
}

// 尾部插入元素
List.prototype.append = function (ele) {
    this.dataStore[this.listSize++] = ele
}
// 查找元素索引
List.prototype.find = function (ele) {
    let i = -1
    while (++i < this.dataStore.length) {
        if (this.dataStore[i] === ele) {
            return i
        }
    }
    return -1
}
// 删除元素
List.prototype.remove = function (ele) {
    const index = this.find(ele)
    if (index > -1) {
        this.dataStore.splice(index, 1)
        this.listSize--
        return true
    }
    return false
}
// 列表长度
List.prototype.length = function () {
    return this.listSize
}
// 列表元素
List.prototype.toString = function () {
    return this.dataStore
}
// 插入元素
List.prototype.insert = function (ele, after) {
    const index = this.find(after)
    if (index > -1) {
        this.dataStore.splice(index+1, 0, ele)
        this.listSize++
        return true
    }
    return false
}
// 移动指针到首部
List.prototype.front = function () {
    this.pos = 0
}
List.prototype.end = function () {
    this.pos = this.listSize - 1
}
List.prototype.prev = function () {
    this.pos > 0 && this.pos--
}
// 指针前移一位
List.prototype.next = function () {
    this.pos < this.listSize -1 && this.pos++
}
List.prototype.curPos = function () {
    return this.pos
}
// 移动指针到指定位置
List.prototype.moveTo = function (position) {
    position >= 0 && position<= this.listSize -1 && (this.pos = position)
}
// 当前位置元素
List.prototype.getElement = function () {
    return this.dataStore[this.pos]
}
List.prototype.contains = function (ele) {
    return this.dataStore.includes(ele)
}