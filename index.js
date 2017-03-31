//快排实现
// function incise(array) {
//     if (array.length < 2) {
//         return array
//     }
//     var i = Math.ceil(array.length / 2)
//     var j = array.length
//     var small = [], large = []

//     while (j --) {
//         if (array[j] < array[i]) {
//             small.push(array[j])
//         } else {
//             large.push(array[j])
//         }
//     }
//     return incise(small).concat(incise(large))
// }


// var t = Array(12).fill(1).map(v => {return Math.ceil(Math.random() * 100)})
// console.log(incise(t))
//没有利用原地排序,容易爆栈..


function quickRank(array) {
    var i = Math.ceil(array.length / 2)
    var head = 0, tail = array.length - 1
    while (head < i) {
        if (array[head] >= array[i]) {
            array.splice(head, 1)
            array.push(array[head])
        }
        if (array[tail] <= array[i]) {
            array.splice(tail, 1)
            array.unshift(array[tail])
        }
        head ++
        tail --
    }
    console.log(array)
}

var t = Array(12).fill(1).map(v => {return Math.ceil(Math.random() * 100)})
console.log(quickRank(t))