function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var lastChar = str.substr(str.length-target.length, target.length) ;
  console.log(str.length-target.length, target.length);
  if (lastChar === target){
      return true;
  }
  return false;
}

console.log(confirmEnding("Bastian", "an"));