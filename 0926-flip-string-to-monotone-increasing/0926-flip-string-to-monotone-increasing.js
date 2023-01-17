/**
 * @param {string} s
 * @return {number}
 */

var minFlipsMonoIncr = function(s) {
    const flipsToMakeAllZero = {};
    const flipsToMakeAllOne = {};
    let temp1, temp0;

    temp1 = 0;
    temp0 = 0;
    for(let i = 0; i < s.length ; i++) {
        if(s[i] === '1') ++temp0;
        if(s[s.length - i - 1] === '0') ++temp1;
        flipsToMakeAllZero[i] = temp0;
        flipsToMakeAllOne[s.length - i -1] = temp1;
    }
    flipsToMakeAllZero[-1] = 0;
    flipsToMakeAllOne[s.length] = 0;

    let result = 987654321;
    for(let i = -1; i < s.length; i++) { // 0 기준
        result = Math.min(result, flipsToMakeAllZero[i] + flipsToMakeAllOne[i+1]);
    }

    return result;
};