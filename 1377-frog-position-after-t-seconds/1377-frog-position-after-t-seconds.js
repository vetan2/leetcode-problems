/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
    const line = new Array(n + 1).fill(0).map(() => []);
    
    edges.forEach(([start, end]) => {
        line[start].push(end);
        line[end].push(start);
    });

    if(!line[1].length && target === 1) {
      return 1;
    }
    
    const root = createNode(1, 1, 0, -1);
    const queue = [root];

    while(queue.length) {
      if(queue[0].lev > t) break;
      const parent = queue.shift();
      const valArr = line[parent.val].filter(val => val !== parent.parentVal);
      for(let i=0; i<valArr.length; i++) {
        const val = valArr[i];
        const prob = parent.prob / valArr.length;
        const lev = parent.lev + 1;
        if(val === target && (lev === t || (!(line[val].length - 1) && lev <= t))) {
          return prob;
        }
        const node =
          createNode(val, prob, lev, parent.val);

        queue.push(node);
      }
    }

    return 0;
};
    
const createNode = (val, prob, lev, parentVal) => ({
  val,
  prob,
  lev,
  parentVal,
});