
function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);
  // console.log("args == " + args);
  // console.log("args.length == " + args.length) ;

  var arg0Len = args[0].length;
  console.log("arg0Len == " + arg0Len);
  var argsLen = args.length;
  console.log("argsLen == " + argsLen);
  for(var i = 0; i < arg0Len-1; i++){
    for(var j = 1; j < argsLen; j++){
    if(args[0].indexOf(args[j]) > -1){
      args[0].splice(args[0].indexOf(args[j]),1);
      }
    }
  }
  console.log("return == " + args[0]);

// function destroyer(arr) {
//   // Remove all the values
//   var args = Array.from(arguments);
//   var arg0Len = args[0].length;
//   var argsLen = args.length;
//   for(var i = 0; i < arg0Len; i++){
//     for(var j = 1; j < argsLen; j++){
//     if(args[0].indexOf(args[j]) > -1){
//       args[0].splice(args[0].indexOf(args[j]),1);
//       }
//     }
//   }
//   return args[0];
// }

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
