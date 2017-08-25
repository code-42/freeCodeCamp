function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
arr.push(num);
arr.sort(function(a, b) {
  return a - b;
});
  return (arr.indexOf(num));
}

console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([40, 60], 50));

// from pythontutor.com 
// https://goo.gl/Hyj1MR