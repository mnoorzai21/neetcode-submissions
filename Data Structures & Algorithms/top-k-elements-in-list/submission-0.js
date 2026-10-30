class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        // Step 1: count each number
        for (let i = 0; i < nums.length; i++){
            count.set(nums[i], (count.get(nums[i]) || 0) + 1)
        }

        // Step 2: turn into pairs, sort by count, take top k
        const pairs = Array.from(count.entries());
        pairs.sort((a, b) => b[1] - a[1]);

        return pairs.slice(0, k).map(pair=> pair[0]);
    }
}
