class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;
        let l = 0;
        let r = l + heights.length - 1;

        while(l < r) {
            const area = (r - l) * Math.min(heights[l], heights[r]);
            result = Math.max(result, area);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return result;
    }
}
