/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
 let table;
var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b);
    
    let result = [];
    queries.forEach(M => {
        let sum = 0;
        let res = 0;
        for(let i=0; i<nums.length; i++) {
            sum += nums[i];
            res = i + 1;
            if(sum > M) {
                res -= 1;
                break;
            }
        }
        result.push(res);
    })

    return result;
};