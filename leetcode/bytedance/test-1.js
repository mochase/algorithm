// 无重复字符的最长子串

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = s.split('')
    let curLen = maxLen = arr.length
    while (curLen > 1) {
        for (let i = 0; i <= maxLen - curLen; i++) {
            let t = arr.slice(i, i+curLen)
            if (isUnique(t)) {
                return curLen
            }
        }
        curLen--
    }
    return curLen
    
    
    function isUnique (s) {
        const set = new Set(s)
        return set.size === s.length
    }
};