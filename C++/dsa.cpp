class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> mp;
        int t = nums.size();
        vector<int> v (2);
        
        for (int i = 0; i < t; i++){
            int a = target - nums[i];
            if (mp.find(a) != mp.end()){
                v[0] = mp[a];
                v[1] = i;
                return v;
            }
            mp[nums[i]] = i;
        }
        
        return v;
    }

    int reverse(int x) {
        int result = 0;

        do {
            if (result > (std::numeric_limits<int>::max() / 10) || (result < std::numeric_limits<int>::min() / 10)) {
                return 0;
            }

            result = result * 10 + x % 10;
        } while (x /= 10);

        return result;
    }

        bool isPalindrome(int x) {
        string og = to_string(x);
        string str = og;
        int n = str.length();
        for (int i = 0; i < n / 2; i++)
            swap(str[i], str[n - i - 1]);
        
        return og == str;
    }
};