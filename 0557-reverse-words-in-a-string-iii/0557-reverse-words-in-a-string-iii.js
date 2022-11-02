/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) { 
   const reverseWord = (word) => {
        let newWord = "";
        
        for (let i = word.length - 1; i >= 0; i--){
            newWord += word[i];
        }
        
        return newWord;
    }
   
    let split = s.split(" ");
    
    for (let i in split){
        split[i] = reverseWord(split[i]);
    }
    
    return split.join(" ")
    
};