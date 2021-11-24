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
            // nums.push(undefined);
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

var lengthOfLastWord = function(s) {
    let str = s.split(' ');
    for (let i = 0; i < str.length; i++){
        if (str[i].length < 1){
            str.splice(i, 1);
            i--;
        }
    }
    return str[str.length - 1].length;
};

var plusOne = function(digits) {
    return (BigInt(digits.join('')) + 1n).toString().split('');
};

var addBinary = function(a, b) {
    // Built-in version
    // let num1 = BigInt(`0b${a}`), num2 = BigInt(`0b${b}`);
    // return (num1 + num2).toString(2);

    // Brute force version
        let i = a.length - 1;
    let j = b.length - 1;
    let total = '';
    let remainder = 0;
    
    while (i >= 0 || j >= 0 || remainder){
        const digitSum = (+a[i] || 0) + (+b[j] || 0) + remainder;
        remainder = Math.floor(digitSum / 2);
        total = (digitSum % 2) + total; 
        
        i--;
        j--;
    }
    
    return total;
};

var mySqrt = function(x) {
    if (x < 2) return x;
    let answer = 2;
    while (answer * answer <= x){
        answer++;
    }
    return --answer;
};

var climbStairs = function(n) {
    let table = new Array(n + 1);
    table[0] = 1;
    table[1] = 1;
    
    for(let i = 2; i < table.length; i++){
        table[i] = table[i - 1] + table[i - 2];
    }
    
    return table[table.length - 1];
};

var deleteDuplicates = function(head) {
    if (head){
        let currentNode = head.next;
        let previousNode = head;

        while (currentNode){
            if (currentNode.val === previousNode.val){
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
            } else {
                previousNode = previousNode.next;
                if (currentNode){
                    currentNode = currentNode.next;
                }
            }
        }
    }
    
    return head;
};

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);
    nums2.splice(n);
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};

let traverseRecursion = function(node, arr){
    if (!node) return;
    if (node){
        traverseRecursion(node.left, arr);
        arr.push(node.val);
        traverseRecursion(node.right, arr);    
    }
    return;    
}

var inorderTraversal = function(root) {
    let arr = [];
    traverseRecursion(root,arr);
    return arr;
};

var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p && q || p && !q) return false;
    
    let result = true;
    
    let traverseTree = function(node1, node2){
        if(node1.val != node2.val) result = false;
        if (node1.left && node2.left) {
            traverseTree(node1.left, node2.left)
        } else if (!node1.left && node2.left || node1.left && !node2.left){
            result = false;
        }
        
        if (node1.right && node2.right){
            traverseTree(node1.right, node2.right)
        } else if (!node1.right && node2.right || node1.right && !node2.right){
            result = false;
        }
    }
    
    traverseTree(p, q);
    return result;
        
};

var isSymmetric = function(root) {
    let checkSymmetry = function (left, right){
        if (!left && !right) return true;
        if (!left && right || !right && left) return false;
        if (left.val !== right.val) return false;
        
        return checkSymmetry(left.left, right.right) && checkSymmetry(left.right, right.left);
    }
    
    let symmetry = checkSymmetry(root.left, root.right);
    
    return symmetry;
};

var maxDepth = function(root) {
    function findDepth(root, count){
        if(!root){
            return count;
        }
        return Math.max(findDepth(root.left, count+1), findDepth(root.right,count+1));
    }
    return findDepth(root, 0);
};

var hasCycle = function(head) { 
    // object set to check if visited 
    // traverse the list
    // if currentNode reaches null, return false
    // if hit a visited node, return true
    if (!head) return false;
    
    let set = new Set();
    if (head.next){
        let currentNode = head;
        
        while (currentNode){
            if (!set.has(currentNode)){
                set.add(currentNode);
            }

            if (currentNode.next){
                if (set.has(currentNode.next)) return true;  
            } else {
                return false;
            }
            
            currentNode = currentNode.next;
        }
        
    } else {
        return false;
    }
};

var sortedArrayToBST = function(nums, start = 0, end = nums.length - 1) {
    if (start > end) return null;
    
    const mid = (start + end) >> 1;
    return new TreeNode(
        nums[mid],
        sortedArrayToBST(nums, start, mid - 1),
        sortedArrayToBST(nums, mid + 1, end)
    );
};

var isBalanced = function(root) {
    function helper(root){
        if(root==null) return 0;
        
        let left = helper(root.left);
        let right = helper(root.right);
        
        if(left == null) return null;
        if(right == null) return null;
        
        if(Math.abs(left-right) > 1) return null;
        
        return Math.max(left, right) + 1;
    }
    return helper(root) != null;;
};

var minDepth = function(root) {
    if(!root) return 0;
    if(!root.left && !root.right) return 1;
    let sum = 0;
    let min = Number.MAX_VALUE;
    
    let countDepth = function(node, count){
        count++;
        if(!node.left && !node.right) {
            if (count < min){
                min = count;   
            }
            return;
        }
        
        if(node.left)
            countDepth(node.left, count);
        if(node.right)
            countDepth(node.right, count);
    }
    
    countDepth(root, sum);
    
    return min;
};

var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right){
        return root.val === targetSum;    
    };
    
    let addLeaf = function(node, currentSum = 0){
        if (!node){
            return currentSum === targetSum;
        }
        currentSum += node.val;
        console.log(currentSum);
        if (currentSum === targetSum){
            if (node.left){
                return addLeaf(node.left, currentSum);
            }
            if (node.right){
                return addLeaf(node.right, currentSum);
            }
            if (!node.left && !node.right){
                return true;
            }
        }
        return addLeaf(node.left, currentSum) || addLeaf(node.right, currentSum);
    }
    
    if (!root.left || !root.right){
        let sum = root.val;
        return addLeaf((root.left ? root.left : root.right), sum);
    }
    
    return addLeaf(root);
};

var generate = function(numRows) {
    const res = [];
    let prevRow;
    
    for (let i = 1; i <= numRows; i++) {
        const row = new Array(i).fill(1);

        if (prevRow) {
            for (let j = 1; j < prevRow.length; j++) {
                const cs = prevRow[j] + prevRow[j - 1];
                row[j] = cs;
            }
        }
        
        res.push(row);
        prevRow = row;
    }
    
    return res;
};

var getRow = function(rowIndex) {
    let triangle = [[1], [1, 1]];
    let i = 2;
    
    if (rowIndex > 1){
        while (i <= rowIndex){
            let row = new Array(i + 1).fill(1);
            for (let j = 1; j < i; j++){
                row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
            triangle.push(row);
            i++;
        }
    }
    
    return triangle[rowIndex];
};

var maxProfit = function(prices) {
    let profit = 0, min = prices[0];
    
    for (let i = 0; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        }
        
        if(profit < (prices[i] - min)){
            profit = prices[i] - min;
        }
    }
    
    return profit;
};

var maxProfit = function(prices) {
  let d_ik0 = 0;
  let d_ik1 = -Infinity;
  
  for(let i=0;i<prices.length;i++){
    d_ik0 = Math.max(d_ik0 , d_ik1 + prices[i]);
    d_ik1 = Math.max(d_ik1, d_ik0 - prices[i]);
  }
  return d_ik0;
};

var isPalindrome = function(s) {
    let cleanString = s.toLowerCase().replace(/[^0-9a-z]/g, "");
    
    let i = 0, j = cleanString.length - 1;
    
    while(i <= j){
        if (cleanString[i] !== cleanString[j]) return false;
        i++;
        j--;
    }
    
    return true;
};

var singleNumber = function(nums) {
    let map = {};
    
    for (let i in nums){
        if (map[nums[i]]){
            map[nums[i]].push(i);
        } else {
            map[nums[i]] = [i];
        }
    }
    
    for (let i in map){
        if (map[i].length < 2) return i;
    }
};

var preorderTraversal = function(root) {
    let result = [];
    
    function traversal(root) {
         if(!root) {
            return
          }
        result.push(root.val)
        traversal(root.left);
        traversal(root.right)
     }
    
    traversal(root);
    return result;    
};

var postorderTraversal = function(root) {
    let result = [];
    
    let helper = function(node){
        if (node){
            helper(node.left);
            helper(node.right);
            result.push(node.val);
        } else return;
    }
    
    helper(root);
    
    return result;
};

var getIntersectionNode = function(headA, headB) {
    let currentNodeA = headA, currentNodeB = headB;
    let sizeA = 0, sizeB = 0;
    
    while(currentNodeA){
        sizeA++;
        if (currentNodeA) currentNodeA = currentNodeA.next;
    }
    
    while(currentNodeB){
        sizeB++;
        if (currentNodeB) currentNodeB = currentNodeB.next;
    }
    
    let short, long, sizeDiff;
    
    if (sizeA < sizeB){
        short = headA;
        long = headB;
        sizeDiff = sizeB - sizeA; 
    } else {
        short = headB;
        long = headA;
        sizeDiff = sizeA - sizeB;
    }
    
    while (sizeDiff > 0){
        sizeDiff--;
        if (long) long = long.next;
    }
    
    while (short && long){
        if (short === long) return short;
        
        if (short){
            short = short.next;
        }
        if (long){
            long = long.next;
        }
    }
    
    return null;
    
};

var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.stack[0];
    for (let n of this.stack){
        if (n < min) min = n;
    }
    return min;
};

var twoSumSorted = function(numbers, target) {

    let sum, i = 0, j = numbers.length - 1;

    while (i < j){
        sum = numbers[i] + numbers[j];
        if (sum === target){
            return [i + 1, j + 1];
        }
        
        if (sum < target){
            i++;
        } else {
            j--;
        }
    }
};

var convertToTitle = function(columnNumber) {
    let letter = 0;
    let string = "";
    
    while(columnNumber > 0){
        letter = columnNumber % 26;
        
        if (letter === 0) letter = 26;
        
        columnNumber = (columnNumber - letter) / 26;
        string = String.fromCharCode(letter + 64) + string; 
    }
    
    return string;
};

var majorityElement = function(nums) {
    let map = {};
    
    for(let i of nums){
        if (map[i]) map[i]++;
        else map[i] = 1;
    }
    
    let max = nums[0];
    
    for(let i in map){
        if (map[i] > map[max]){
            console.log(max);
            max = i;
        }
    }
    
    return max;
};

var titleToNumber = function(columnTitle) {
    let columnNum = columnTitle[0].charCodeAt() - 64; 
        for(let i = 1; i < columnTitle.length; i++){
        columnNum = (columnNum)*26 + (columnTitle[i].charCodeAt()-64) 
    }
    return columnNum;
};

var reverseBits = function(n) {
    let reversed = `${"0".repeat(32 - n.toString(2).length)}${n.toString(2)}`
        .split("").reverse().join("");
    
    let num = 0;
    for (let i = 0; i < 32; i++) {
        if (parseInt(reversed[reversed.length - 1 - i])) {
            num += Math.pow(2, i)
        }
    }
    return num;
};

var hammingWeight = function(n) {
    let count = 0;
    
    while(n > 0){
        if (n % 2 > 0){
            count++;
        }
        
        n = Math.floor(n / 2);
    }
    
    return count;
};

var isHappy = function(n) {
    let seen = new Set();
    
    while (!seen.has(n)){
        seen.add(n);
        let temp = String(n).split('');
        n = 0;
        for (let i of temp){
            n += parseInt(i) * parseInt(i);
        }
        
        if (n === 1) return true;
    }
    
    return false;
};

var removeElements = function(head, val) {
    while(head && head.val == val) head = head.next;
      let curr = head;
      while(curr && curr.next){
        if(curr.next.val == val) curr.next = curr.next.next;
        else curr = curr.next
      }
      return head
};

var countPrimes = function(n) {
    const isPrime = function(num){
        if (num < 2){
            return false;
        }
        if (num % 2 === 0) {
            return num === 2
        }
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    let count = 0;
    
    for (let i = 2; i < n; i++){
        if (isPrime(i)) count++;
    }
    
    return count;
};

var isIsomorphic = function(s, t) {
    if (s.length != t.length) return false;
    
    const hash = {};
    
    for(let i = 0; i < s.length; i++){
        if (hash[s[i]]){
            if (hash[s[i]] !== t[i]){
                return false;
            }
        } else {
            if (Object.values(hash).includes(t[i])){
                return false;
            }
            hash[s[i]] = t[i]
        }
    }
    
    return true;
};

var moveZeroes = function(nums) {
    // have a counter for all zeros
    // delete 0
    // push in the number of zeros to the end of the array
    if (nums === [0]) return nums;
    let counter = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            counter++;
            nums.splice(i, 1);
            i--;
        }
    }
    
    for (let i = 0; i < counter; i++){
        nums.push(0);
    }
    
    return nums;
    
};

var reverseList = function(head, prev = null) {
    if(head === null) return prev;
    let next = head.next;
    head.next = prev;
    
    return reverseList(next, head)
};

var containsDuplicate = function(nums) {
    let map = {};
    
    for (let i of nums){
        if (map[i]) return true;
        else {
            map[i] = true;
        }
    }
    
    return false;
};

var containsNearbyDuplicate = function (nums, k) {
    let map = new Map()
    let indexDiff
    for (let i in nums) {
        if (map.has(nums[i])) {
            indexDiff = Math.abs(map.get(nums[i]) - i)
            if (indexDiff <= k) return true
        }

        map.set(nums[i], i)
    }

    return false
};

var MyStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.stack.length === 0;
};

var invertTree = function(root) {
    if (root){
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        invertTree(root.left);
        invertTree(root.right);
    }
    
    return root;
};

var summaryRanges = function(nums) {
    if(nums.length <= 0) return nums;
    
    let result = [];
    let start = nums[0];
    
    for(let i=1; i<nums.length; i++){
        if(nums[i] - nums[i-1] !== 1) {
            if(start !== nums[i-1]) result.push(start + "->" + nums[i-1])
            else result.push(start.toString())

            start = nums[i]
        }
    }
    
    if(start !== nums[nums.length-1]) result.push(start + "->" + nums[nums.length-1])
    else result.push(start.toString());
    
    return result;
};

var isPowerOfTwo = function(n) {
    if (n <= 0)
        return false;
    return (2 ** 31) % n===0
};

var MyQueue = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length === 0;
};

var addTwoNumbers = function(l1, l2) {
    let num1 = "";
    let num2 = "";
    let curr1 = l1;
    let curr2 = l2;
    
    while(curr1){
        num1 = curr1.val + num1; 
        curr1 = curr1.next;
    }
    
    while(curr2){
        num2 = curr2.val + num2;
        curr2 = curr2.next;
    }
    
    let result = (BigInt(num1) + BigInt(num2)).toString().split('').reverse();
    
    let l3 = new ListNode(result[0]);
    let previous = l3;
    
    for (let i = 1; i < result.length; i++){
        let curr = new ListNode(result[i]);
        previous.next = curr;
        previous = previous.next;
    }
    
    return l3;
};

var isPalindromeList = function(head) {
    let result = [];
    let currentNode = head;
    
    while (currentNode){
        result.push(currentNode.val);
        currentNode = currentNode.next;
    }
    
    let reverse = result.slice().reverse();
    
    for (let i = 0; i < result.length; i++){
        if (result[i] !== reverse[i]) return false
    }
    
    return true;
};

var lowestCommonAncestor = function(root, p, q) {
    if ((p.val <= root.val && q.val >= root.val) || (q.val <= root.val && p.val >= root.val) ){
        return root;
    } else if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
};

var deleteNode = function(node) {
    let lastNode = node;
    let currentNode = node;
    while (currentNode.next) {
        currentNode.val = currentNode.next.val;
        lastNode = currentNode;
        currentNode = currentNode.next;
    }
    lastNode.next = null;
};

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let map_1 = {}, map_2 = {};
    
    for (let i = 0; i < s.length; i++){
       if(map_1[s[i]]) map_1[s[i]] += 1;
        else map_1[s[i]] = 1;
       if(map_2[t[i]]) map_2[t[i]] += 1;
        else map_2[t[i]] = 1;
    }
    
    for (let i in map_1){
        if (map_1[i] !== map_2[i]) return false;
    }
    
    return true;
};

var binaryTreePaths = function(root, paths = [], path = []) {
    path.push(root.val);
    if (!root.right && !root.left) paths.push(path.join('->'));
    root.left && binaryTreePaths(root.left, paths, path);
    root.right && binaryTreePaths(root.right, paths, path);
    path.pop();
    return paths;
};

var addDigits = function(num) {
    if (num < 10) return num;
    return num - (Math.floor(num / 9)) * 9 || 9;
};

var isUgly = function(n) {
    if (n < 1) return false;
    
    while (n % 2 === 0 || n % 3 === 0 || n % 5 === 0){
        if (n % 2 === 0) n /= 2;
        if (n % 3 === 0) n /= 3;
        if (n % 5 === 0) n /= 5; 
    }
    
    
    return n === 1;
};

var missingNumber = function(nums) {
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++){
        if (i !== nums[i]){
            return i;
        }
    }
    
    return nums.length; 
};

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1, r = n;
        
        while (l <= r){
            const mid = Math.floor((l + r)/ 2);
            if (!isBadVersion(mid)){
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return l;
    };
};

var wordPattern = function(pattern, s) {
    let map = {};
    let visited = [];
    let arr = s.split(" ");
    
    if (pattern.length !== arr.length) return false;
    
    for (let i = 0; i < arr.length; i++){
        if (map[arr[i]]){
            if (map[arr[i]] !== pattern[i]) return false;
        } else {
            if (!visited.includes(pattern[i])) {
                map[arr[i]] = pattern[i];
                visited.push(pattern[i]);
            }
            else return false;
        }
    }
    
    console.log(map, visited)
    
    return true;
};

var canWinNim = function(n) {
    return n > 0 ? n % 4 : false ;   
};

var NumArray = function(nums) {
    this.array = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = 0;
    for (let i =left; i <= right; i++){
        sum += this.array[i];
    }
    return sum;
};

var isPowerOfThree = function(n) {
    if (n < 1) return false;
    while (n % 3 === 0){
        n /= 3;
    }
    
    return n === 1;
};

var isPowerOfFour = function(n) {
    if (n < 1) return false;
    
    while (n % 4 === 0){ n /= 4 }
    
    return n === 1;
};

var reverseString = function(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++){
        let temp = s[i], switchIndex = s.length - 1 - i;
        s[i] = s[switchIndex];
        s[switchIndex] = temp;
    }
};

var reverseVowels = function(s) {
    s = s.split('');
    let i = 0; j = s.length - 1;
    let vowels = "aeiouAEIOU";
    while(i <= j){
        if (vowels.includes(s[i]) && vowels.includes(s[j])){
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        } else {
            if (!vowels.includes(s[i])) i++;
            if (!vowels.includes(s[j])) j--;
        }
    }
    
    return s.join('');
};

var intersection = function(nums1, nums2) {
    let result = [];
    let map = {};
    
    for (let i of nums1){
        if (!map[i]){
            map[i] = true;
        }
    }
    
    for (let i of nums2){
        if (map[i]){
            result.push(+i);
            map[i] = false;
        }
    }
    
    return result;
};

var intersect = function(nums1, nums2) {
    let result = [];
    let map = {};
    
    for (let i of nums1){
        if (!map[i]) map[i] = 1;
        else map[i]++;
    }
    
    for (let i of nums2){
        if (map[i] > 0){
            result.push(+i);
            map[i]--;
        }
    }
    
    return result;
};

var lengthOfLongestSubstring = function(s) {
    let visited = {};
    let word = [];
    let max = 0;
    
    for (let i = 0; i < s.length; i++){
        if (!visited[s[i]] === undefined) {
            visited[s[i]] = i;
            word.push(s[i]); 
        } else {
            word = word.slice(word.indexOf(s[i]) + 1);
            word.push(s[i]);
        }
        
        if (max < word.length){
            max = word.length;
        }
    }
    
    return max;
};

var firstUniqChar = function(s) {
    let map = {};
    for (let c of s){
        if (map[c]) map[c]++;
        else map[c] = 1;
    }
    
    for (let i in s){
        if (map[s[i]] === 1) return i; 
    }
    
    return -1;
};

var findTheDifference = function(s, t) {
    s = s.split("").sort();
    t = t.split("").sort();
    for (let i = 0; i < s.length; i++){
        if (t[i] !== s[i]) return t[i];
    }
    
    return t[s.length];
};

var isSubsequence = function(s, t) { //axc, ahbgdc
    let j = 0;
    
    for (let i = 0; i < t.length; i++){ // 5
        if (t[i] === s[j]){
            j++;
        } 
    }
    
    return (s.length === j);
};

var sumOfLeftLeaves = function(root) {
    let sum = 0;
    
    const traverse = function(node, isLeft = false){
        if (node){
            if (!node.left && !node.right && isLeft) sum += node.val;
            return traverse(node.left, true) + traverse(node.right, false);
        }
    }
    
    traverse(root);
    
    return sum;
};

var toHex = function(num) {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let str = "";
    
    if (num < 0) num = num + 2**32
    while (num > 15) {
        str = digits[num % 16] + str
        num = Math.floor(num / 16)
    }
    
    str = digits[num % 16] + str
    if (str[0] === "0" && str.length > 1) str = str.slice(1) 
    return str
    
};

var longestPalindrome = function(s) {
    let output = 0, letterCount = {};
    for (let letter of s) letterCount[letter] = letterCount[letter] + 1 || 1;
    let letters = Object.keys(letterCount);
    for (let letter of letters) {
        if (letterCount[letter] > 1) {
            if (isEven(letterCount[letter])) output += letterCount[letter];
            else output += letterCount[letter] - 1;
        }
    } 
    console.log(letterCount);
    return s.length - output >= 1 ? output + 1 : output;    
};

function isEven(num) {
    return !(num % 2);
};

var fizzBuzz = function(n) {
    let result = [];
    
    for (let i = 0; i < n; i++){
        let num = i + 1;
        if (num % 3 === 0 && num % 5 === 0){
            result.push("FizzBuzz");
        } else if (num % 3 === 0){
            result.push("Fizz");
        } else if (num % 5 === 0){
            result.push("Buzz");
        } else {
            result.push(`${num}`);
        }
    }
    
    return result;
};