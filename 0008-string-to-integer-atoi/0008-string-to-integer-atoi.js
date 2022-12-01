/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    return constaint(+s.trim().match(/^(^[\-\+]|[0-9])*/g).join(""))
    function constaint(value){
        if(value > 2147483647 ) return 2147483647 ;
        if(value < -2147483648) return -2147483648;
        return value || 0;
    }
};