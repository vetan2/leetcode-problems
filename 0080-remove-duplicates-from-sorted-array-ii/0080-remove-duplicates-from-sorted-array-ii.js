/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let cur = 987654321;
    let count = 0;
    let i = 0, k = 0;

    while(k < nums.length) {
        nums[i] = nums[k];

        if(cur === nums[k]) {
            ++count;
        } else {
            cur = nums[k];
            count = 1;
        }

        if(count >= 2) {
            while(cur === nums[k + 1]) {
                ++k;
            }
        }

        ++i;
        ++k;
    }

    nums.length = i;

    return i;
};