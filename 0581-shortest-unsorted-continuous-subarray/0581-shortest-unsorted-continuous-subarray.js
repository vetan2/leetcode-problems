/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let start = 0, end = 0;

  let biggest = nums[0];
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] < biggest) {
      end = i;
    }

    biggest = Math.max(biggest, nums[i]);
  }

  let smallest = nums[end];
  for(let i = end; i >= 0; i--) {
    if(nums[i] > smallest) {
      start = i;
    }

    smallest = Math.min(smallest, nums[i]);
  }

  return end === start ? 0 : end - start + 1;
};