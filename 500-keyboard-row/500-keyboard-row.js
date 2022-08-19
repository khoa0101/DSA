/**
 * @param {string[]} words
 * @return {string[]}
 */
var isWordOnSameKeyBoardRow = function(word, row){
    
    for(let char of word){
        if (row.search(char) === -1) {
            return false;
        }
    }
    
    return true;
}

var findWords = function(words) {
    const firstRow = "qwertyuiop";
    const secondRow = "asdfghjkl";
    const thirdRow = "zxcvbnm";
    
    const result = [];
    
    for (let word of words){
        let firstChar = word[0].toLowerCase();
        if (firstRow.search(firstChar) !== -1){
            isWordOnSameKeyBoardRow(word.toLowerCase(), firstRow) ? result.push(word) : null;
        }
        else if (secondRow.search(firstChar) !== -1){
            isWordOnSameKeyBoardRow(word.toLowerCase(), secondRow) ? result.push(word) : null;
        } 
        else if (thirdRow.search(firstChar) !== -1){
            isWordOnSameKeyBoardRow(word.toLowerCase(), thirdRow) ? result.push(word) : null;
        }
    }

    return result;
};