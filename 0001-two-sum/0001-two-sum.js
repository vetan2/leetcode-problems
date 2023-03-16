/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const store = {}

  for (let i = 0; i < nums.length; i++) {
    if (store[target - nums[i]] !== undefined) {
      return [i, store[target - nums[i]]]
    }

    store[nums[i]] = i
  }
}
