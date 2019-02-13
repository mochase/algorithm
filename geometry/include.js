/**
 * 判断点是否在不规则多边形内
 * @param {Array} [1, 0] the point to check
 * @param {Array} [[2,0], [3,1], [4,5], [5,2], [4,2]...] the Polygon
 * @return {Boolean} 
 * 算法思想:
 * 以被测点Q为端点，向任意方向作射线（一般水平向右作射线），统计该射线与多边形的交点数。如果为奇数，Q在多边形内；
 * 如果为偶数，Q在多边形外
 * 特殊情况:
 * 1.射线与多边形的一条边重合.
 * 2.射线与多边形的顶点相交.(如果该顶点是其所属边上纵坐标较大的顶点,则计数--此时形状为凸,否则忽略该点)
 * 3.Q在多边形边上.
 */

function include (point, polygon) {

    function onEdage () {
        
    }
}