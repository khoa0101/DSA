/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let map = {};
    const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);
    let ogScore = clone(score);
    let orderedScore = score.sort((a, b) => b - a);
    let result = [];
    
    for (let i = 0; i < orderedScore.length; i++){
        switch(i){
            case 0 : map[orderedScore[i]] = "Gold Medal";
            break;
            case 1 : map[orderedScore[i]] = "Silver Medal";
            break;
            case 2 : map[orderedScore[i]] = "Bronze Medal";
            break;
            default: map[orderedScore[i]] = i + 1 + "";
        }
    }
    
    for (let i = 0; i < ogScore.length; i++){
        result.push(map[ogScore[i]]);
    }
    
    return result;
};