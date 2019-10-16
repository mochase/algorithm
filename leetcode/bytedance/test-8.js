// 最小栈

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min =  1 / 0
    let temp = []
    while (this.stack.length) {
        const v = this.top()
        this.pop()
        if (v !== undefined) {
            temp.push(v)
            min = Math.min(v, min)
        }
    }
    let i = temp.length - 1
    while (i >= 0) {
        this.push(temp[i])
        i--
    }
    return min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  
minStack.pop();
console.log(minStack.top());      
console.log(minStack.getMin()); 
