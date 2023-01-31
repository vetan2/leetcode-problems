/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    /**
     * res[i]: ith 선수가 제일 마지막으로 선출되는 조합에서의 최종 점수의 최댓값
     */
    const res = [];
    const arr = scores.map((_, i) => [ages[i], scores[i]]);
    /**
     * res[i]를 구하기 위해 0 <= j < i인 j에 대해 res[j]의 값을 참조할 것이다.
     * 이러기 위해선, ith 선수와 jth 선수가 함께 선출될 수 있을 경우 ith 선수가 res[j]의 조합을
     * 수용할 수 있어야 한다. 따라서 jth 선수는 항상 ith 선수보다 나이가 적거나 같아야 한다.
     * 나이가 같으면 jth 선수가 점수가 ith 선수보다 높아 감당할 수 없는 조합을 가지고 오는 경우를
     * 배제하기 위해, jth 선수의 점수는 항상 ith 선수 점수 이하여야 한다.
     */
    arr.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

    res[0] = arr[0][1];
    for(let i = 1; i < arr.length; i++) {
        res[i] = arr[i][1];
        const [ia, is] = arr[i];

        /**
         * jth 선수와 ith 선수가 함께 선출될 수 있다면, (res[j] + ith 선수의 점수)의 조합이 가능하다.
         */
        for(let j = i - 1; j >= 0; j--) {
            const [ja, js] = arr[j];
            if(ia === ja || is >= js) {
                res[i] = Math.max(res[i], is + res[j]);
            }
        }
    }

    return Math.max(...res);
};