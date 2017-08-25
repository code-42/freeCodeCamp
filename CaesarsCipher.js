
//https://www.freecodecamp.com/challenges/caesars-cipher#?solution=%0Afunction%20rot13(str)%20%7B%20%2F%2F%20LBH%20QVQ%20VG!%0A%20%20%2F%2Fsplit%20str%20into%20a%20as%0A%20%20return%20str%3B%0A%7D%0A%0A%2F%2F%20Change%20the%20inputs%20below%20to%20test%0Arot13(%22SERR%20PBQR%20PNZC%22)%3B%0A

function rot13(str) { // LBH QVQ VG!
	// SERR PBQR PNZC  ==  FREE CODE CAMP
	//see http://www.asciitable.com/
  //split str into individual characters
  var newString = "";
  var charCode;

  for(var i=0, length=str.length; i<length; i++) {  //starts the loop through the string
  	charCode=str.charCodeAt(i);  //gets the ascii value at position i
  	console.log("1.charCode == " + charCode);
  	if (charCode > 90 || charCode < 65){
  		newString += String.fromCharCode(charCode);
  		console.log("newString == " + newString);
  	} else {
  	  console.log("charCode == " + charCode);
  		charCode += 13;
  		console.log("charCode == " + charCode);
  		if (charCode > 90) {
  			charCode -= 26;
  			console.log("charCode == " + charCode);
  		}
  		newString += String.fromCharCode(charCode);
  		console.log("else newString == " + newString);
	  	}
	}
	return newString;
}
// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));