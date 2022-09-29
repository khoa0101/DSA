/**
 * @param {number} num
 * @return {boolean}
 */

var checkPerfectNumber = function(num) {
    let perfect = 0;
    
    for (let i = 1; i * i  <= num; i++){
        if(num % i == 0){    
            let first = i;     
            let second = num / first ;
            if(first != num)
            {
                perfect += first;
            }
            
            if(second != first && second != num)
            {
                perfect += second;
            }
        }
    }
    
    return perfect === num;
};