function isBigEnough(value) {
  console.log(value >= 10);
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]