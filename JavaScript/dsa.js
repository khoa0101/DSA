// Return the target sums of two numbers in the argument array
var twoSum = function (nums, target) {
  const map = new Map() // key = target - currentValue, value - current index

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    const difference = target - val

    if (map.has(val)) {
      return [map.get(val), i]
    }

    map.set(difference, i)
  }

};

// Return the reverse of the interger, if the reverse interger exceeds the signed 32-bit range, it will return 0
var reverse = function(x) {
    var y = parseInt(x.toString().split('').reverse().join(''))
    if (y >= 2**31-1 || -y <= -(2**31)) return 0;
    return x < 0 ?  -y : y  
};

var isPalindrome = function(x) {
    let stir = String(x);
    let stirReverse = stir.split('').reverse().join('');
    
    return stir === stirReverse;
};

var romanToInt = function(s) {
    let map = new Map();
    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);
    let str = s.split('').map((el) => map.get(el));
    let n = str.length;
    let result = str[n - 1];
    
    for (let i = n - 1; i > 0; i--){
        if (str[i] <= str[i - 1]) {
        result += str[i - 1];
        } else {
        result -= str[i - 1];
        }
    }
        
    return result;
};