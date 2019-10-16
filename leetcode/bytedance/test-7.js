// 买卖股票的最佳时机(问题1)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0
    }
    let min = prices[0]
    let profit = 0
    for (let i = 1; i<prices.length;i++) {
        profit = Math.max(prices[i] - min, profit)
        min = Math.min(prices[i], min)
    }
    return profit
    
}