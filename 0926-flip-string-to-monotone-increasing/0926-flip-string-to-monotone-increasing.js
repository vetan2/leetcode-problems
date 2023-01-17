/**
 * @param {string} s
 * @return {number}
 */

var minFlipsMonoIncr = function(s) {
    let result = 0;
    let oneCount = 0;

    Array.from({length: s.length}).forEach((_, i) => {
        if(s[i] === '0') {
            result = Math.min(oneCount, result + 1);
        } else {
            oneCount++;
        }
    });

    return result;
};