def two_sum(nums, target)
    hash = {}
    
    nums.each_with_index do |num, i|
        if hash[target - num]
            return hash[target - num], i
        end
        hash[num] = i;
    end
    
end

def reverse(x)
    string = x.to_s
    
    bit_max = 2**31
    bit_min = -2**31
    
    result = string[0] == '-' ? -string.reverse.to_i : string.reverse.to_i
    
    if result > bit_max || result < bit_min
        return 0
    end
    
    result
end