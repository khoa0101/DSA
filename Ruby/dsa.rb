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

def is_palindrome(x)
    stir = x.to_s;
    stirReverse = stir.reverse;
    
    return stir == stirReverse
end

def roman_to_int(s)
    hash = {}
    
    hash["I"] = 1;
    hash["V"] = 5;
    hash["X"] = 10;
    hash["L"] = 50;
    hash["C"] = 100;
    hash["D"] = 500;
    hash["M"] = 1000;
    
    str = s.split('').map { |el| hash[el]};
    length = str.length();
    result = str[-1];
    i = length - 1;
    
    while (i > 0)
        if (str[i] <= str[i - 1])
            result += str[i - 1];
        else
            result -= str[i - 1];    
        end
        i -= 1;
    end
    
    return result;
        
end

def longest_common_prefix(strs)
    return '' if strs.empty?
    return strs.pop if strs.length ==1
    one_of_arr = strs.pop
    prefix = ''
    one_of_arr.each_char do |char|
      return prefix if strs.any? { |str| !str.start_with?(prefix + char) }
      prefix += char
    end
    prefix
end