let memoized;

/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
  memoized = new Array(50).fill(0).map(() => new Array(50).fill(-1));

  return dp(values, 0, values.length - 1);
};

const dp = (values, i, j) => {
  if (i + 1 === j) return 0;

  if (memoized[i][j] >= 0) return memoized[i][j];

  let result = 987654321;
  for (let k = i + 1; k < j; k++) {
    result = Math.min(
      result,
      values[i] * values[k] * values[j] + dp(values, i, k) + dp(values, k, j)
    );
  }

  memoized[i][j] = result;
  return result;
};
