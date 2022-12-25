/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let maxDigit = 1;
    for(let i = 1; ; i++) {
        if([a, b, c].some(n => parseInt(n / 2 ** i))) {
            maxDigit += 1;
        } else {
            break;
        }
    }

    let answer = 0;
    for(let i = 1; i <= maxDigit; i++) {
        const an = getNum(a, i);
        const bn = getNum(b, i);
        const cn = getNum(c, i);

        if(cn && !an && !bn) answer += 1;
        if(!cn) {
            if(an) answer += 1;
            if(bn) answer += 1;
        }
    }

    return answer;
};

const getNum = (num, digit) => parseInt((num % 2 ** digit) / 2 ** (digit - 1));