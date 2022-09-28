/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/

var getPrimeFactors = function () {
    "use strict";

    let n = document.getElementById("num").value;

    function isPrime(n) {
        var i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    
    
    var i, sequence = [];

    for(let i = 2; i < n+1; i++)
    {
        if(isPrime(i) === true && n%i == 0)
        {
            sequence.push(i);
        }
    }
    
    let ans = document.getElementById("Ans").innerHTML = sequence;

    console.log(sequence);

    return sequence;
};


