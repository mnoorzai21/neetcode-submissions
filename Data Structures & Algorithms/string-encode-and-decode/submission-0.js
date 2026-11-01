class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for(let i = 0; i < strs.length; i++){
            result = result + strs[i].length + '#' + strs[i];
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            const hasIndex = str.indexOf('#', i);
            const length = Number(str.slice(i, hasIndex));

            const start = hasIndex + 1;
            const word = str.slice(start, start + length);
            result.push(word);

            i = start + length;
        }
        return result;
    }
}
