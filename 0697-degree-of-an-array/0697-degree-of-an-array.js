/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = function (nums) {
  const freq = {};
  const indicesMap = {};
  let degree = -1;

  nums.forEach((item, index) => {
    // freq 채우기
    if (freq[item] === undefined) {
      freq[item] = 1;
    } else {
      freq[item] += 1;
    }
    // indexMap 채우기
    if (indicesMap[item] === undefined) {
      indicesMap[item] = { start: index, end: index };
    } else {
      indicesMap[item].end = index;
    }

    degree = Math.max(degree, freq[item]);
  });

  return Object.keys(freq).reduce(
    (acc, cur) =>
      freq[cur] === degree
        ? Math.min(acc, indicesMap[cur].end - indicesMap[cur].start + 1)
        : acc,
    987654321,
  );
};
