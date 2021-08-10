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
};