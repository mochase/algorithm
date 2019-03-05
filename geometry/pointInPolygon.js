/**
 * 判断点是否在不规则多边形内
 * 射线法
 * @param {Array} [1, 0] the point to check
 * @param {Array} [[2,0], [3,1], [4,5], [5,2], [4,2]...] the Polygon
 * @return {Boolean} 
 * 算法思想:
 * 以被测点Q为端点，向任意方向作射线（一般水平向右作射线），统计该射线与多边形的交点数。如果为奇数，Q在多边形内；如果为偶数，Q在多边形外
 * 特殊情况:
 * 1.射线与边重合.(忽略该边)
 * 2.射线与边的顶点相交.(如果该顶点是其所属边上纵坐标较大的顶点,则计数)
 * 3.Q在多边形边上.
 */

function inPolygon (p, polygon) {
    const sum = polygon.length
    let count = 0
    let i = -1
    while (++i < sum ) {
        const a = polygon[i]
        const b = polygon[(i+1) % sum]
        // 在边上
        if (onLine([a, b], p)) {
            return true
        }
        // 边水平
        if (a[1] === b[1]) {
            continue
        }
        // 相交
        let c
        if (a[0] === b[0]) {
            c = [a[0], p[1]]
        } else {
            const k = (b[1] - a[1]) / (b[0] - a[0])
            const h = a[1] - k * a[0]
            c = [(p[1] - h) / k, p[1]]
        }
        if (c[0] > p[0]) {
            if (c === a || c === b) {
                // 与顶点相交
                if (c[1] === Math.max(a[1], b[1])) {
                    count++
                }
            } else {
                count++
            }
        }
    }
    if (count % 2 === 0) {
        return false
    } else {
        return true
    }

    function crossAcc (p, q) {
        // 向量叉积
        return p[0] * q[1] - q[0] * p[1]
    }
    function dotAcc(p, q) {
        //  向量点积
        return p[0] * q[0] + p[1] * q[1]
    }

    function onLine ([m, n], p) {
        const l1 = [p[0] - m[0], p[1] - m[1]]
        const l2 = [p[0] - n[0], p[1] - n[1]]
        return crossAcc(l1, l2) === 0 && dotAcc(l1, l2) <= 0
    }
}

// test case
const polygon = [[10, 10], [20, 10], [20, 5], [10, 5]]
const p1 = [15, 8]
const p2 = [25, 8]
console.log(inPolygon(p1, polygon))
console.log(inPolygon(p2, polygon))

/**
 * link
 * http://acm.hdu.edu.cn/showproblem.php?pid=1756
 * https://blog.csdn.net/WilliamSun0122/article/details/77994526
 */
