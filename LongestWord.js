function findLongestWord(str) {
    var maxLen = 0;
    var strArr = str.split(' ');
    var s = strArr.map(function(val){
        if (maxLen < val.length){
            maxLen = val.length;
        }
        
    });
  return maxLen;
}

findLongestWord("The quick brown fox jumped over the lazy dog");