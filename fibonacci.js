function fibonacci (n) {
    if (n === 0 || n === 1) {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

// console.log(fibonacci(50))

// 改进版,加缓存
const fibonacci_ = (function() {
    const cache = new Map();
    return function acc(n) {
        if (n === 0 || n === 1) {
            cache.set(n, n)
            return n
        }
        const v1 = cache.get(n - 1) || acc(n-1)
        const v2 = cache.get(n - 2) || acc(n-2)
        cache.set(n, v1 + v2)
        return v1 + v2
    }
})();


console.log(fibonacci_(1000))