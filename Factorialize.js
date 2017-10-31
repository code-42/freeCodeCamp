function factorialize(num) {
  var prevNum = 1;
    if (num == 0)
        return 1
    for (var i=1; i <= num; i++){
        prevNum = prevNum * i;
    }
    return num = prevNum;
    // return (num * factorialize(num-1));
}

console.log(factorialize(1));
console.log(factorialize(2));
console.log(factorialize(3));
console.log(factorialize(4));
console.log(factorialize(5));
console.log(factorialize(6));
console.log(factorialize(7));
console.log(factorialize(8));
console.log(factorialize(9));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(30));
console.log(factorialize(40));