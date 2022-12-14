
/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {1:1, 2:1};
function fibonacci() {
    "use strict";
    var n = parseInt(document.getElementById("num").value);
    var val = f(n);
    document.getElementById("fibonacciLbl").textContent = val;
    console.log(memo);
}

function f(n) {

    var value;
    // Check if the memory array already contains the requested number
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        value = f(n-1) + f(n-2);
        memo[n] = value;
    }

    return value;
}
