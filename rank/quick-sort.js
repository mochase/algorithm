// 简单版本,效率很低
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

// 改进版(利用原地排序)
function quickSort (array) {
    // 交换元素
    function swap (arr, i, k) {
        var tmp = arr[i]
        arr[i] = arr[k]
        arr[k] = tmp
    }

    // 数组分区
    function partition (arr, left, right) {
        var storeIndex = left
        var pivot = arr[right] // 任选一个基准
        for (var i = left; i < right; i ++) {
            if (arr[i] < pivot) {
                swap(arr, i, storeIndex)
                storeIndex ++
            }
        }
        swap(arr, storeIndex, right)
        return storeIndex
    }

    function sort (arr, left, right) {
        if (left > right) {
            return
        }
        var storeIndex = partition(arr, left, right)
        sort(arr, left, storeIndex - 1)
        sort(arr, storeIndex + 1, right)
    }
    sort(array, 0, array.length - 1)
    return array
}

// test case
const arr = quickSort((new Array(60)).fill(1).map(v => Math.round(Math.random() * 100)))
console.log(arr.toString())