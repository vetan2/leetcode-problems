/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    const stack = [];

    logs.forEach(log => {
        if(log.startsWith("../")) {
            if(stack.length) {
                stack.pop();
            }
            return;
        }

        if(!log.startsWith("./")) {
            stack.push(log);
        }
    });

    return stack.length;
};