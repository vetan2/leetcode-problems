/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const [arr1, arr2] = [str1, str2].map(str => {
        const result = [];
        const first = str[0];
        let i = 0;
        while(i < str.length) {
            if(str[i + 1] === first && str.length % (i + 1) === 0) {
                const chunkLength = i + 1;
                const chunkCnt = str.length / (i + 1);
                let success = true;
                for(let j = 0; j < chunkLength; j++) {
                    const letter = str[j];
                    for(let k = 1; k < chunkCnt; k++) {
                        if(letter !== str[k * chunkLength + j]) {
                            success = false;
                            break;
                        }
                    }

                    if(!success) {
                        break;
                    }
                }

                if(success) {
                    result.push(str.slice(0, chunkLength));
                }
            }
            i++;
        }
        
        result.push(str);
        return result;
    });

    const arr = arr1.filter(str => arr2.includes(str));

    let result = "";
    let resultLength = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > resultLength) {
            result = arr[i];
        }
    }

    return result;
};