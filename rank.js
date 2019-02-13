// 快排实现-;
function incise(array) {
    if (array.length < 2) {
        return array
    }
    var i = Math.ceil(array.length / 2)
    var j = array.length
    var small = [], large = []

    while (j --) {
        if (array[j] < array[i]) {
            small.push(array[j])
        } else {
            large.push(array[j])
        }
    }
    return incise(small).concat(incise(large))
}


// var t = Array(120).fill(1).map(v => {return Math.ceil(Math.random() * 100)})
// console.log(incise(t))
// 使用了递归,闭包.没有利用原地排序,容易爆栈..

// 改进版快排
function quickSort(array) {
    function partition(array, left, right) {
        var storeIndex = left
        var pivot = array[right]
        for (var i = left; i < right; i ++) {
            if (array[i] < pivot) {
                swap(array, storeIndex, i)
                storeIndex ++
            }
        }
        swap(array, storeIndex, right)
        return storeIndex
    }
    
    function sort (array, left, right) {
        if (left >= right) {
            return
        }
        var storeIndex = partition(array, left, right)
        sort(array, left, storeIndex - 1)
        sort(array, storeIndex + 1, right)
    }
    
    function swap(array, a, b) {
        var tmp = array[a]
        array[a] = array[b]
        array[b] = tmp
    }
    sort(array, 0, array.length - 1)
    return array
}


var t = Array(40).fill(1).map(v => {return Math.ceil(Math.random() * 100)})
console.log(quickSort(t).toString())