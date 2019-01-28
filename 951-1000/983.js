/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    const maxcost = [0];
    days.forEach(function (v,i) {
        maxcost[i + 1] = Math.min(maxcost[i] + costs[0], maxcost[find(v - 6)] + costs[1], maxcost[find(v - 29)] + costs[2])
    })
    return maxcost[days.length];

    function find(number) {
        for (let i = 0; i < days.length; i++) {
            if (days[i] >= number) {
                return i;
            }
        }
        return 0;
    }
};