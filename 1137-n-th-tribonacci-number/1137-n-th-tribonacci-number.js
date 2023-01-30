/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const arr = [0,1,1];
    if(n <= 2) {
        return arr[n];
    }

    let head = 2;
    let sum = 2;
    while(head < n) {
        arr[head + 1] = sum;
        sum = sum * 2 - arr[head - 2];
        head++;
    }

    return arr[n];
};