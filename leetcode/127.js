/**
 * 一个用BFS求最短路径的例子
 * 
 * 
给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。
说明:

如果不存在这样的转换序列，返回 0。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-ladder
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0
    wordList.unshift(beginWord)
    wordList = wordList.map(v => ({ id: v, distance: 0, isVisit: false, edges: [] }))
    function hasEdge (a, b) {
        let diff = 0
        for (let i = 0;i < a.length; i++) {
            if (a[i] !== b[i]) {
                diff++
            }
            if (diff > 1) return false
        }
        return diff === 1
    }
    wordList.forEach(a => {
        const others = wordList.filter(n => n.id !== a.id)
        others.forEach(b => {
            if (hasEdge(a.id, b.id)) {
                a.edges.push(b.id)
            }
        })
    })

    function BFS(node) {
        let degree = 2
        const walker = (nodeArr) => {
            let nexts = []
            let end = false
            for (let i =0;i<nodeArr.length;i++) {
                const n = nodeArr[i]
                for (let j = 0;j<n.edges.length;j++) {
                    const id = n.edges[j]
                    const word = wordList.find(w => w.id === id)
                    if (!word.isVisit) {
                        word.isVisit = true
                        word.distance = degree
                        nexts.push(word)
                    }
                    if (word.id === endWord) {
                        end = true
                        break
                    }
                }
            }
            if (end) return
            if (nexts.length) {
                degree++
                walker(nexts)
            }
        }
        node.isVisit = true
        walker([node])
    }

    BFS(wordList[0])

    const target = wordList.find(w => w.id === endWord)
    return target.distance
};
