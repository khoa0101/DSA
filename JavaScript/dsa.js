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

var removeDuplicates = function(nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++){
        if (i + 1 < nums.length && nums[i] === nums[i + 1] && nums[i] != undefined){
            nums.splice(i, 1);
            nums.push(undefined);
            count++;
            i--;
        }
    }
    
    return nums.length - count;
};

var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == val){
            nums.splice(i, 1);
            i--;
        }
    }
    
    return nums.length;
};

var strStr = function(haystack, needle) {
    let str=haystack.split(needle);

    if(needle==''){
        return 0;
    }else if(str.length==1){
        return -1
    }else if(str.length==0){
        return 0;
    }else{
        return str[0].length;
    }
};

var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    let start = 0, mid = 0, end = nums.length - 1;
    while (start < end) {
        mid = Math.floor((end + start) / 2);
        if (nums[mid] > target)
            end = mid;
        else if (nums[mid] < target)
            start = mid + 1;
        else
            break;
    }
    return nums[mid] >= target ? mid : mid + 1
};

var maxSubArray = function(nums) {
    let maxAns = nums[0];
    let prevMax = nums[0];
    
    for (let i = 1; i < nums.length; i++){
        prevMax = Math.max(nums[i], nums[i] + prevMax);
        if (prevMax > maxAns){
            maxAns = prevMax;
        }
    }
    
    return maxAns;
};