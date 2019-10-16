// 复原IP地址

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = []
    const len = s.length
    for (let a = 1; a <=3; a++ ) {
        for (let b = 1; b <=3; b++) {
            for (let c = 1; c <=3; c++) {
                let d = len - a - b - c
                if (d > 0 && d < 4) {
                    let t = []
                    t[0] = s.slice(0, a)
                    t[1] = s.slice(a, a + b)
                    t[2] = s.slice(a+b, a+ b +c)
                    t[3] = s.slice(a+b+c, len)
                    if (t[0] <= 255 && t[1] <= 255 && t[2] <= 255 && t[3] <= 255) {
                        if (t[0].length > 1 && t[0][0] === '0' || 
                            t[1].length > 1 && t[1][0] === '0' || 
                            t[2].length > 1 && t[2][0] === '0' || 
                            t[3].length > 1 && t[3][0] === '0') {
                            
                        } else {
                            const str = t.join('.')
                            result.push(str)
                        }

                    }
                }
            }
        }
    }
    return result
    
};