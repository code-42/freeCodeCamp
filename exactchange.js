//exact change
//https://www.freecodecamp.com/challenges/exact-change#?solution=%0Afunction%20checkCashRegister(price%2C%20cash%2C%20cid)%20%7B%0A%20%20var%20change%3B%0A%20%20%2F%2F%20Here%20is%20your%20change%2C%20ma'am.%0A%20%20return%20change%3B%0A%7D%0A%0A%2F%2F%20Example%20cash-in-drawer%20array%3A%0A%2F%2F%20%5B%5B%22PENNY%22%2C%201.01%5D%2C%0A%2F%2F%20%5B%22NICKEL%22%2C%202.05%5D%2C%0A%2F%2F%20%5B%22DIME%22%2C%203.10%5D%2C%0A%2F%2F%20%5B%22QUARTER%22%2C%204.25%5D%2C%0A%2F%2F%20%5B%22ONE%22%2C%2090.00%5D%2C%0A%2F%2F%20%5B%22FIVE%22%2C%2055.00%5D%2C%0A%2F%2F%20%5B%22TEN%22%2C%2020.00%5D%2C%0A%2F%2F%20%5B%22TWENTY%22%2C%2060.00%5D%2C%0A%2F%2F%20%5B%22ONE%20HUNDRED%22%2C%20100.00%5D%5D%0A%0AcheckCashRegister(19.50%2C%2020.00%2C%20%5B%5B%22PENNY%22%2C%201.01%5D%2C%20%5B%22NICKEL%22%2C%202.05%5D%2C%20%5B%22DIME%22%2C%203.10%5D%2C%20%5B%22QUARTER%22%2C%204.25%5D%2C%20%5B%22ONE%22%2C%2090.00%5D%2C%20%5B%22FIVE%22%2C%2055.00%5D%2C%20%5B%22TEN%22%2C%2020.00%5D%2C%20%5B%22TWENTY%22%2C%2060.00%5D%2C%20%5B%22ONE%20HUNDRED%22%2C%20100.00%5D%5D)%3B%0A
//multiply by  100 

function checkCashRegister(price, cash, cid) {
  var change = Math.round(cash*100)- Math.round(price*100);
  var registertotal = 0;
  // get register total value
  for(var i=0, length = cid.length; i < length; i++){
  	registerTotal += Math.round(cid[i][1]*100);
  }

  if (registerTotal == change){
  	return "Closed";
  }

  if (registerTotal < change){
  	return "Insufficient Funds";
  }

  //we have enough change give change
  //function in a function
  function makeChange(value, amount){
  	var val = 0;
  	switch (value){
  		case 'PENNY':
  			val = 1;
  			break;
  		case 'NICKEL':
  			val = 5;
  			break;
  		case 'DIME':
  			val = 10;
  			break;
  		case 'QUARTER':
  			val = 25;
  			break;
  		case 'ONE':
  			val = 100;
  			break;
  		case 'FIVE':
  			val = 500;
  			break;
  		case 'TEN':
  			val = 1000;
  			break;
  		case 'TWENTY':
  			val = 20000;
  			break;
  		case 'ONE HUNDRED':
  			val = 100000;
  			break;
  		default:
  			return "Error in Register values";
  	}
  	var count = 0;
  	while (val <= change && amount > 0){
  		change -= val;
  		amount -= val;
  		count ++;
	}

	return(count*val)* 0.01;  // return it back to decimal value 

	var changeArray = [];

	for (var j = cid.length-1; j >= 0; j--){
//		changeArray.push(cid)
	num = makechange(cid[j][0].Math.round(cid[j][1]*100));
	if (num < 0){
		changeArray.push([cid[j][0],(num)]);
		}
	}

if (change > 0){
	return 'Insufficient Funds';
} else {
	return changeArray;
}

  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

