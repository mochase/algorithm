// 三数之和

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const order = nums.sort((a,b) => {
        return a - b
    })
    let result = []

    for (let i = 0; i < order.length - 2; i++) {
      for (let j = i +1; j < order.length - 1; j++) {
        let a = order[i]
        let b = order[j]
         if (order.lastIndexOf(-a - b) > j) {
           let repeat = result.some(v => {
             return v[0] === a && v[1] === b
           })
           if (!repeat) {
             result.push([a, b, -a-b]) 
           }
           
        }
      }
    }
    return result
};