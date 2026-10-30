class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Maping groups
        const groups = new Map();

        for (let i = 0; i < strs.length; i++){
            const word = strs[i];
            const key = word.split('').sort().join('');

            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key).push(word);
        }
        return Array.from(groups.values());
    }
}
