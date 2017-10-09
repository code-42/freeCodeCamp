function sym(args) {

  console.log("arguments.length == ", arguments.length);
  console.log("arguments object == ", arguments);
  
    args = Array.from(arguments);

    function symDiff(arrayA, arrayB) {
        var result = [];
        console.log("\n");
        console.log("arrayA == ", arrayA);
        console.log("arrayB == ", arrayB);

        arrayA.forEach(function(item) {
            if (arrayB.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
                console.log("result.1(" + item + ") == ", result);
            }
        });

        arrayB.forEach(function(item) {
            if (arrayA.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
                console.log("result.2(" + item + ") == ", result);
            }
        });

        return result;
    }

    // Apply reduce method to args array, using the symDiff function
  
    return args.reduce(symDiff);
    
}

sym([1, 2, 3], [5, 2, 1, 4]);
// sym([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
