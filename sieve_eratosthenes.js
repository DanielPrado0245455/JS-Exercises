/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

var sieve = function (n) {
    "use strict";

    var array = [], primes = [], i, j;
    let p = 2;
    n = parseInt(document.getElementById("num").value);
    let ans = document.getElementById("ans").innerHTML = primes;

    for(let i=2;i<n+1;i++)
    {
        array.push(i);
    };

    array.forEach

    array.forEach(val => 
        {
            if(val !=0)
            {
                primes.push(val);
            }
        });
    
    


    return primes;
};

console.log(sieve(1000000));