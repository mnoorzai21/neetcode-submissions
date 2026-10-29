class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // I am trying to reduce time complexity with Map() method
    twoSum(nums, target) {
        // Setting a Map() method to my seen
        const seen = new Map();
        // looping every element
        for (let i = 0; i < nums.length; i++) {
        // It's the same as to say targe = nums[i] + nums [j]
        const needed  = target - nums[i];
        // if this value has been seen then return it with its key
        if (seen.has(needed)) {
            return [seen.get(needed), i];
        }
        // if no then keep for the next round
        seen.set(nums[i], i)
    }
    // checked every number but found no pair
    return [];
    }
}
