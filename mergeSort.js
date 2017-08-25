function mergeSort(numbers){
    if (numbers.length < 2){
        return numbers;
    }
    var middle = Math.floor(numbers.length / 2);
    var leftArray = numbers.slice(0, middle);
    console.log("leftArray " + leftArray);
    var rightArray = numbers.slice(middle, numbers.length);
    console.log("rightArray " + rightArray);
    // [4,5,8,2] == leftArray[4,5] | rightArray[8,2]
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// [4,5]
function merge(leftArray, rightArray){
    var resultArray = [];

    // [1,2] [3,4]
    while(leftArray.length != 0 && rightArray.length != 0){
        if (leftArray[0] <= rightArray[0]){
            resultArray.push(leftArray.shift());
            console.log("resultArray " + resultArray);
        } else {
            resultArray.push(rightArray.shift());
            console.log("resultArray " + resultArray);
        }
    }
    while(leftArray.length > 0){
        resultArray.push(leftArray.shift());
        console.log("resultArray " + resultArray);
    }
    while(rightArray.length > 0){
        resultArray.push(rightArray.shift());
        console.log("resultArray " + resultArray);
    }
    return resultArray;
}


console.log(mergeSort([3,5,2,4,1]));
// leftArray = [3,5] | rightArray = [2,4,1]
