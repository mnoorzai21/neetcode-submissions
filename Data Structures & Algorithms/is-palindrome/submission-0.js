class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if(!this.isAlphaNum(s[left])) {
                left++;
                continue;
            }
            if (!this.isAlphaNum(s[right])){
                right--;
                continue;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    isAlphaNum(char){
        return /[a-zA-Z0-9]/.test(char);
    }
}
