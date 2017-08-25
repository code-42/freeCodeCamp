console.log("romNum == " + convertToRoman(3614));

function convertToRoman(num) {
  console.log("num == " + num);
  var romanNum = '';
  while(num > 0){
    // convert argument into an array
    var numArr = Array.from(num.toString());
    console.log(numArr);
    var numArrLen = numArr.length;
    console.log("numArr.length == " + numArrLen);
    
    // determine the place value of the left-most digit
    var placeVal = placeValue(numArrLen);
    console.log("placeVal == " + placeVal);
    
    // remove the left-most digit from the array 
    var digit = numArr.shift();
  
    // and determine it's numeric value
    var numVal = parseInt(placeVal) * parseInt(digit);
    console.log("numVal == " + placeVal + " * " + digit + " == " + numVal);
    
    // and determine it's roman numeral
    var romNum = int_to_char(placeValue(parseInt(numArrLen)))
                            .repeat(parseInt(digit));
    console.log("romNum == " + romNum);

    // return romNum;
    num = numArr.join('');
    // console.log(num);
    return convertToRoman(num);
  }
    romanNum += romNum;
    console.log("romNum == " + romanNum);
 }

function fixRomanNum(romNum){
  console.log("romNum.length == " + romNum.length); 
}



function int_to_char(x){
 
   switch (x){
    case '1': return 'I';
    case '2': return 'II';
    case '3': return 'III';
    case '5': return 'V';
    case '10': return 'X';
    case '50': return 'L';
    case '100': return 'C';
    case '500': return 'D';
    case '1000' : return 'M';
    default: return -1;
  } 
}

function placeValue(x){
 
   switch (x){
    case 1 : return '1';
    case 2 : return '10';
    case 3 : return '100';
    case 4 : return '1000';
    default: return -1;
  } 
}