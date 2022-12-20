/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let queue = [0];
    const arr = new Array(rooms.length).fill(false);

    while(queue.length) {
        const [num] = queue.splice(0, 1);
        if(arr[num]) continue;

        queue = [...queue, ...rooms[num]];
        arr[num] = true;
    }

    return !arr.includes(false);
};