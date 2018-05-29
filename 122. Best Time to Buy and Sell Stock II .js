/**
 * @param {number[]} prices
 * @return {number}
 */

prices = [7, 6, 4, 3, 1]
var maxProfit = function(prices) {
    if (prices.length <= 1) 
    return 0;
    var profits = 0;
    for (var i = 1, l = prices.length; i <= l - 1; ++i) {
        if (prices[i] . prices [i - 1]) {
        profits += prices[i] - prices[i -1];
    }
} 
return profits;
}