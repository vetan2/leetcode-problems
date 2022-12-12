// momized[i] = 계단 높이가 i일 때 오를 수 있는 경우의 수
let memoized = {};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    memoized = {};

    return travel(n);
};

const travel = (num) => {
    if(memoized[num] !== undefined) return memoized[num];

    if(num === 1 || num === 0) return memoized[num] = 1;

    const result = travel(num-1) + travel(num-2);

    return memoized[num] = result;
}