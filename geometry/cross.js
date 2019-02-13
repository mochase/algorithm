/**
 * 判断两条线段是否相交
 * @param {Array} [[1,0],[0,1]]
 * @param {Array} [[2,1],[0,0]]
 * @returns {Boolean}
 */

function isCross ([m1, m2], [n1, n2]) {
    try {
        // line1
        let k1 = (m2[1] - m1[1]) / (m2[0] - m1[0])
        let b1 = (m1[1] - k1 * m1[0]) 
        // line2
        let k2 = (n2[1] - n1[1]) / (n2[0] - n1[0])
        let b2 = (n1[1] - k2 * n1[0])
        // 求交点
        let x0 = (b2 - b1) / (k1 - k2)
        if ((x0 < Math.max(m1[0], m2[0])) && (x0 > Math.min(m1[0], m2[0])) 
            && (x0 < Math.max(n1[0], n2[0])) && (x0 > Math.min(n1[0], n2[0]))) {
            return true
        }
        return false
    } catch (e) {
        console.error('参数格式有误')
    }
}