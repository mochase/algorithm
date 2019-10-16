// 反转链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return head
    }
    let arr = []
    let point = head
    while (point) {
        arr.push(point)
        point = point.next
    }
    let newPoint = arr[arr.length - 1]
    
    for (let i = arr.length -1; i >= 0; i--) {
        arr[i].next = arr[i-1]
    }
    

    return newPoint
};