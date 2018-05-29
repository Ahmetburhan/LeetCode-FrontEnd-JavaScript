/**
 * @param {number[]} digits
 * @return {number[]}
 */
function maxSubArray(nums) {
    var sum = 0;
    return nums.reduce((max, curr)=> {
        sum = curr + (sum > 0 ? sum : 0);
        return Math.max(max, sum);
    }, -Number.MAX_VALUE);
}