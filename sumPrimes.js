function sumPrimes(num) {
    // Sum prime numbers

    var primes = [];
    var sum = 0;

    // 1 is not a prime, 2 is a prime number
    // 2 mod 2 == 0 so it won't pass the mod test
    // So push it onto the array because it is a prime
    primes.push(2);
    // primes.push(3);
    for (var i = 2; i <= num; i++)
    {
        // if(i % 2 !== 0) then it is not an even number so test for prime
        if(i % 2 !== 0){

            // Loop through each number from 2 to num
            for(var j = 2; j <= i; j++)
            {
                // Eliminate numbers that are divisible by a number between 1 and itself
                if ((i !== j) && (i % j === 0))
                {
                    // Exit loop if a number is divisible by j
                    break;
                }
                else if(i === j)
                {
                    // Push the number onto the array if it passes tests and is not already in the array
                    if(primes.indexOf(i) === -1)
                    {
                       primes.push(i);
                    }
                }
            }
        }
    }

    console.log("26. there are " + primes.length + " primes up to " + num);
    for (var k = 0; k < primes.length; k++)
    {
        sum = sum + primes[k];
    }
    console.log("sum == " + sum);
    return sum;
}

sumPrimes(10);
sumPrimes(977);
