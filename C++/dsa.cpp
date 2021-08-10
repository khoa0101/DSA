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

    int romanToInt(string s) {
        map<char, int> mp = {
            { 'I' , 1 },
            { 'V' , 5 },
            { 'X' , 10 },
            { 'L' , 50 },
            { 'C' , 100 },
            { 'D' , 500 },
            { 'M' , 1000 }};
        
        int num = 0;
        
        for(size_t i=0; i<s.length(); ++i){
            
            if( mp[s[i]] < mp[s[i+1]] )
                num -= mp[s[i]];
            else 
                num += mp[s[i]];
        }
        return num;
    }

    string longestCommonPrefix(vector<string>& strs) {
        int n =strs.size();
        string ans; 
        sort(strs.begin(), strs.end());
        string a = strs[0];
        string b = strs[n-1];
        for(int i =0; i< a.size(); i++){
            if(a[i] == b[i]){
                ans += a[i];
            }else break;
        }
        return ans;
    }
};