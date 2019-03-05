/**
 * 判断点是否在线段上
 * @param {Array} [[1, 0], [2, 4]] the line
 * @param {Array} [2, 2] the point to check
 * @return {Boolean}
 */

 function onLine ([m, n], p) {
     function crossAcc (p, q) {
        // 向量叉积
        return p[0] * q[1] - q[0] * p[1]
     }
     function dotAcc(p, q) {
        //  向量点积
         return p[0] * q[0] + p[1] * q[1]
     }
     const l1 = [p[0] - m[0], p[1] - m[1]]
     const l2 = [p[0] - n[0], p[1] - n[1]]
     return crossAcc(l1, l2) === 0 && dotAcc(l1, l2) <= 0
 }

//  test case
let p = [2,4]
const line = [[0,0], [3,6]]
console.log(onLine(line, p))
p = [-2, -4]
console.log(onLine(line, p))
p = [0,0]
console.log(onLine(line, p))