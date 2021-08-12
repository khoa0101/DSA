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

var longestCommonPrefix = function(strs) {
  if (!strs[0] || strs.length ==  1) return strs[0] || "";
  let i = 0;

  while(strs[0][i] && strs.every(s => s[i] === strs[0][i]))
    i++;
 
  return strs[0].substr(0, i);
};

function isInside(n, x, y)
{
    return (x >= 0 && x <= n && y >= 0 && y <= n);
}

var minStepToReachTarget = function(KnightPos, TargetPos, N)
{
    let visit = new Set();
    visit.add(`${KnightPos[0]}-${KnightPos[1]}`);
    let queue = [KnightPos];
    let dir = [[1, 2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]];
      let targetX = TargetPos[0];
      let targetY = TargetPos[1];
    let count = 0;

    while(queue.length !== 0){
        let totalMove = queue.length; 
        for (let i = 0; i < totalMove; i++){
        let currentPos = queue.shift();
        let currentX = currentPos[0];
        let currentY = currentPos[1];
        if (currentX === targetX && currentY === targetY) return count;
            for (let i = 0; i < dir.length; i++){
                let nextPos = [currentPos[0] + dir[i][0], currentPos[1] + dir[i][1]];
                if (isInside(N, nextPos[0], nextPos[1]) && !visit.has(`${nextPos[0]}-${nextPos[1]}`)){
                    if (nextPos[0] === targetX && nextPos[1] === targetY) return ++count;
                      visit.add(`${nextPos[0]}-${nextPos[1]}`);
                      queue.push(nextPos);
                  }
            }  
        } 
        count++;
      }
        
    return -1; 
}

var isValid = function(s) {
    // have a stack that tracks opening characters
    // if encounter a closing character, i will pop the stack if and only if the top of the stack is the matching opening character
    // return true if the stack is empty
    
    let stack = [];
    
    if (s.length % 2 === 1) return false;
    if (s[0] === "]" || s[0] === "}" || s[0] === ")") return false;
    
    for (let i = 0; i < s.length; i++){
        if (s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.unshift(s[i]);
        }
        else{
            if (s[i] === ")" && stack[0] === "("){
                stack.shift();
            } else if (s[i] === "}" && stack[0] === "{"){
                stack.shift();
            } else if (s[i] === "]" && stack[0] === "["){
                stack.shift();
            } else {
                stack.push(s[i]);
            }
        }
    }
    
    return stack.length === 0;
};

var mergeTwoLists = function(l1, l2) {
    let result = new ListNode();
    let current = result;
    
    while(l1 && l2){
        if (l1.val < l2.val){
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    
    return result.next;
};
