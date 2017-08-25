function repeatStringNumTimes(str, num) {
  // repeat after me
    if (num <= 0){
      return "";
    }
    return str.repeat(parseInt(num));
}

console.log(repeatStringNumTimes("abc", 3));