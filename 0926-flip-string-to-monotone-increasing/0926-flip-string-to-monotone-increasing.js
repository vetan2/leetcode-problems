/**
 * @param {string} s
 * @return {number}
 */

var minFlipsMonoIncr = function(s) {
    const flipsToMakeAllOne = [];
    let temp

    temp = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === '0') ++temp;
        flipsToMakeAllOne[i] = temp;
    }
    flipsToMakeAllOne[s.length] = 0;
    
    let result = 987654321;
    temp = 0;
    for(let i = -1; i < s.length; i++) {
        if(s[i] === '1') ++temp;
        result = Math.min(result, temp + flipsToMakeAllOne[i+1])
    }

    return result;
};