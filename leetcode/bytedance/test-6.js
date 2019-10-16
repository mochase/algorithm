// 两数相加(链表)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Point = l1
    let l2Point = l2
    let listNodes = []
    let acc = 0
    while (l1Point || l2Point || acc) {
        let a = l1Point ? l1Point.val : 0
        let b = l2Point ? l2Point.val : 0
        const sum = a + b + acc
        let val = sum % 10
        acc = sum >= 10 ? 1 : 0
        listNodes.push(new ListNode(val))
        l1Point = l1Point ? l1Point.next : null
        l2Point = l2Point ? l2Point.next : null
    }
    let point = listNodes[0]
    
    for (let i = 0; i < listNodes.length; i++ ) {
        listNodes[i].next = listNodes[i+1]
    }
    return point
};