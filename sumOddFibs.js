function sumFibs(num) {
    // Formula from Wikipedia 
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // F[n] = F[n-1] + F[n-2]

    // Create an array to hold the numbers
    var F = [];

    // Seed values for F[0]=1, F[1]=1
    F[0]=1;
    F[1]=1;
    var sum = F[0] + F[1];
    for (var i = 2; i < num; i++)
    {
        F[i] = F[i-2] + F[i-1];
        if((F[i] % 2 > 0) && (F[i] <= num)){
            // console.log("18. odd F["+i+"] =="+F[i]);
            sum = sum + F[i];
            // console.log("20. sum == " + sum);
        }
    }

    // Each subsequent number is the sum of the previous two
    // Sum the odd Fibonacci numbers
    // var sum = F[0] + F[1];
    // for (var j = 2; j < num; j++)
    // {
    //     F[j] = F[j-1] + F[j-2];
    //     // if(F[j] % 2 !== 0){
    //         console.log("24. F["+j+"] ==" + F[j]);
    //     //     sum += F[j];
    //     //   console.log("26. sum ==" + sum);
    //     // }
    // }

    console.log("34. " + num + " : " + sum);
    return sum;
}

// function findMax(max){
//     console.log("33. == " + max);
//     for (var i = 1; i < max; i++)
//     {
//         // console.log("36. == " + i);
//         sumFibs(i); 
//     }
// }

// console.log(findNum(4));
// findMax(10);
sumFibs(4);
sumFibs(1);
sumFibs(10);
sumFibs(1000);
sumFibs(4000000);
sumFibs(78);
sumFibs(75024);
sumFibs(75025);
sumFibs(21);
