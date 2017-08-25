function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  console.log("arguments.length == " + arguments.length);
  var args = Array.prototype.slice.call(arguments);
  console.log("args == " + args);
  console.log("args.length == " + args.length);
  console.log(args[0].length);
  console.log(args[1].length);
  for(var i = 0; i<args[0].length; i++){
    console.log("args[0][i] == " + args[0][i]);
    for(var j = 0; j<args[1].length; j++){
      console.log(args[1][j]+ " " + args[0].indexOf(args[1][j]));
      if( args[0].indexOf(args[1][j]) == -1){
        if(newArr.indexOf(args[1][j]) == -1){
        newArr.push(args[1][j]);
        }
      }
      if( args[1].indexOf(args[0][i]) == -1){
        if(newArr.indexOf(args[0][i]) == -1){
          newArr.push(args[0][i]);
        }
      }
    }
  }
  // console.log("newArr == " + newArr);
  // newArr = newArr.filter(function(a,b){
  //   if(newArr.indexOf(b) == -1){
  //     newArr.push(b);
  //   }
  //   });
      console.log("newArr == " + newArr);
  // return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);