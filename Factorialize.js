function factorialize(num) {
  var prevNum = 1;
    for (var i=1; i <= num; i++){
        prevNum = prevNum * i;
   }
   return num = prevNum;
}

console.log(factorialize(4));