class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
       // Approach: sort both strings; anagrams have identical sorted letters.
   // Time: O(n log n)  Space: O(n)
    isAnagram(s, t) {
        const sortedS = s.split('').sort().join('');
        const sortedT = t.split('').sort().join('');
        if (sortedS === sortedT) {
            return true;
        };
        return false;
    }
}
