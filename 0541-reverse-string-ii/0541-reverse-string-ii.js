/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function(s, k){
    const arr = s.split('');
    
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = i + k - 1;
        
        while (left < right) {
            if (arr[right] === undefined) {
                right--;
                continue;
            }
            
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    
    return arr.join('');
};