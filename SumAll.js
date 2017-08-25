function sumAll(arr) {
  var minMax = arr.reduce(function(a,b){
  var min = Math.min(a,b);
  var max = Math.max(a,b);
  for (var i = min+1; i < max; i++){
    arr.push(i);
    }
  });
    
  var sum = arr.reduce(function(a,b){
    return a + b;
  });
  return sum;
}

console.log(sumAll([1, 4]));