import React from 'react'

const CheapCost = () => {
    const minCost = (s="aabaa", cost=[1,2,3,4,1]) => {
        let totalCost = 0;
        let prev = s.charAt(0);
        let maxCost = cost[0];
        let curTotalCost = cost[0];
        let length = s.length;
        for (let i = 1; i < length; i++) {
            let c = s.charAt(i);
            let curCost = cost[i];
            if (c === prev) {
                maxCost = Math.max(maxCost, curCost);
                curTotalCost += curCost;
            } else {
                totalCost += curTotalCost - maxCost;
                prev = c;
                maxCost = curCost;
                curTotalCost = curCost;
            }
        }
        totalCost += curTotalCost - maxCost;
        return totalCost;
    }
  return (
    <div>{minCost()}</div>
  )
}

export default CheapCost