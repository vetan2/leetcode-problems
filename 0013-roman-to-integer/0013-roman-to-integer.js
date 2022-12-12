const values = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
}
const levels = Object.keys(values).reduce((acc, cur, index) => ({...acc, [cur]: index }), {});

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const reversed = s.split("").reverse().join("");
    let result = 0;

    for(let i=0; i<s.length; i++) {
        if(i > 0 && levels[reversed[i]] < levels[reversed[i-1]]) {
            result -= values[reversed[i]];
        } else {
            result += values[reversed[i]];
        }
    }

    return result;
};