/**
 * @param {string} s
 * @return {number}
 */

var minFlipsMonoIncr = function(s) {
    const flipsToMakeAllZero = {};
    const flipsToMakeAllOne = {};
    let temp;

    temp = 0;
    for(let i = 0; i < s.length ; i++) {
        if(s[i] === '1') ++temp;
        flipsToMakeAllZero[i] = temp;
    }
    flipsToMakeAllZero[-1] = 0;

    temp = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === '0') ++temp;
        flipsToMakeAllOne[i] = temp;
    }
    flipsToMakeAllOne[s.length] = 0;

    let result = 987654321;
    for(let i = -1; i < s.length; i++) { // 0 기준
        result = Math.min(result, flipsToMakeAllZero[i] + flipsToMakeAllOne[i+1]);
    }

    return result;
};