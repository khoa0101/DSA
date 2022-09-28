/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let newNum = 0;
    let j = 1 ;
    let abs = Math.abs(num);
    
    while(abs > 0){
        newNum += (abs % 7) * j;
        abs = Math.floor(abs / 7);
        j *= 10;
        console.log(newNum);
    }
    
    return num >= 0 ? "" + newNum : "-" + newNum;
};