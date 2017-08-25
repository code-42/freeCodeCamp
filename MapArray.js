var oldArray = [1,2,3,4,5];

// Only change code below this line.

var newArray = oldArray.map(function(val){
  return val + 3;                            
});

console.log(newArray); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]