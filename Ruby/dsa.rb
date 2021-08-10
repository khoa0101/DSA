def two_sum(nums, target)
    hash = {}
    
    nums.each_with_index do |num, i|
        if hash[target - num]
            return hash[target - num], i
        end
        hash[num] = i;
    end
    
end