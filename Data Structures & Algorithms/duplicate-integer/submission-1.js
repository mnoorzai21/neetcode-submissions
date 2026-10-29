class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    //  I am trying to reduce the time complexity
    //  And I am using the Set() method

    hasDuplicate(nums) {
        // I am setting up my seen to a new set
        const seen = new Set();
        // Going through every element of the array
        for (let i = 0; i < nums.length; i++){
        // Cheching unique value, becaseu Set() stores only uniques
        // and retrun a boolean if seen
            if (seen.has(nums[i])){
                return true;
            }
        // Now whatever has been seen I am adding here
            seen.add(nums[i]); 
        }
        return false;
    }
}
