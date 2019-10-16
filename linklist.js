function Node (ele) {
    this.element = ele
    this.next = null
}

class LinkList {
    constructor () {
        this.head = new Node('head')
    }
    // 查找节点(根据data)
    find (item) {
        let pos = this.head
        while (pos !== null && pos.element !== item) {
            pos = pos.next
        }
        return pos
    }
    // 插入节点
    insert (newEle, item) {
        let newNode = new Node(newEle)
        let curNode = this.find(item)
        if (curNode) {
            newNode.next = curNode.next
            curNode.next = newNode
        }        
    }
    // 删除节点
    remove (item) {
        let pos = this.head
        while (pos.next && pos.next.element !== item) {
            pos = pos.next
        }
        if (pos.next) {
            pos.next = pos.next.next
        }
    }
    // 显示链表
    display () {
        let data = []
        let curNode = this.head
        while (curNode.next !== null) {
            curNode = curNode.next
            data.push(curNode.element)
        }
        // return this.head
        return data.join(',')
    }
}

let fruits = new LinkList()
fruits.insert('apple', 'head')
fruits.insert('banana', 'apple')
fruits.insert('pear', 'apple')
fruits.remove('apple')
fruits.insert('orange', 'pear')
console.log(fruits.display())
