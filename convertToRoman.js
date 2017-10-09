function toRoman(num) {  
  var romanNum = '';
  var arabicArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanArr = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  var arabicArrLength = arabicArr.length;
  for (var i = 0;i  < arabicArrLength; i++) {
    while (num%arabicArr[i] < num) {     
      romanNum += romanArr[i];
      num -= arabicArr[i];
    }
  }
  return romanNum;
}

console.log(toRoman(29));

