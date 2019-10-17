// 保留了一个对父节点的引用,方便查找
function Node (data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.parent = null
}

// 二叉查找树（Binary search tree）
/**
 * {定义}
 * 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
 * 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
 * 任意节点的左、右子树也分别为二叉查找树；
 * 没有键值相等的节点;
 */
class BST {
    constructor () {
        this.root = null
    }
    insert (data) {
        const node = new Node(data, null, null)
        if (this.root === null) {
            this.root = node
            return
        }
        let pos = this.root
        while (true) {
            if (data <= pos.data) {
                if (pos.left === null) {
                    pos.left = node
                    node.parent = pos
                    break
                }
                pos = pos.left
            } else {
                if (pos.right === null) {
                    pos.right = node
                    node.parent = pos
                    break
                }
                pos = pos.right
            }
        }
    }
    // 先序遍历
    preOrder (node) {
        if (node !== null) {
            console.log(node.data)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
    // 中序遍历
    inOrder (node) {
        if (node !== null) {
            this.inOrder(node.left)
            console.log(node.data)
            this.inOrder(node.right)
        }
    }
    // 后序遍历
    postOrder () {
        if (node !== null) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.data)
        }
    }
    // 查找给定值
    find (data) {
        let pos = this.root
        while (pos !== null) {
            if (data < pos.data) {
                pos = pos.left
                pos.path = 'left'
            } else if (data > pos.data) {
                pos = pos.right
                pos.path = 'right'
            } else {
                return pos
            }
        }
        return null
    }
    // 查找最小值(总在左节点上)
    getMin () {
        let pos = this.root
        while (pos.left !== null) {
            pos = pos.left
        }
        return pos.data
    }
    // 最大值总在右节点
    getMax () {
        let pos = this.root
        while (pos.right !== null) {
            pos = pos.right
        }
        return pos.data
    }
    // 节点个数
    getCount (node) {
        if (node === null) {
            return 0
        }
        return 1 + this.getCount(node.left) + this.getCount(node.right)
    }
    delete (data) {
        const pos = this.find(data)
        if (!pos || !pos.parent) return
        // 叶子节点
        if (pos.left === null && pos.right === null) {
            pos.parent[pos.path] = null
            return
        }
        // 一个子节点
        if (pos.left === null && pos.right !== null) {
            pos.parent[pos.path] = pos.right
            return
        }
        if (pos.left !== null && pos.right === null) {
            pos.parent[pos.path] = pos.left
            return
        }
        // 两个子节点
        // 用最大前驱代替当前节点
        let newP = pos.left
        while (newP.right !== null) {
            newP = newP.right
        }
        pos.data = newP.data
        if (newP.parent.data !== pos.data) {
            newP.parent.right = newP.left
        } else {
            newP.parent.left = newP.left
        }
    }
}

const bst = new BST()
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
bst.delete(37)
bst.inOrder(bst.root)