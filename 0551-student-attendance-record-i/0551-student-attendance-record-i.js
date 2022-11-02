/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let L = 0;
    let A = 0;
    
    for (let c of s){
        if (c === "A"){
            A++;
        } 
        
        if(c === "L"){
            L++;
        }
        
        if(c !== "L"){
            L = 0;
        }
        
        if (A >= 2) return false;
        if (L === 3) return false;
    }
    
    return true ;
};