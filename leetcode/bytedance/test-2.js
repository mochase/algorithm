// 简化路径

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let quene = []
    const arr = path.split('/').filter(v => v !== '')
    let i = -1
    while (++i < arr.length) {
        if (arr[i] === '.') {
            continue
        } else if (arr[i] === '..') {
            quene.pop()
        } else {
            quene.push(arr[i])
        }
    }
    let output = '/' + quene.join('/')
    return output
};