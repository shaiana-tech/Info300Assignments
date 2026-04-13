// Noor Shaia INFO 300 001

const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Enter a positive number: "));

let fib = [];

if (n >= 1) fib.push(0);
if (n >= 2) fib.push(1);

for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}

let oddFib = [];

for (let i = 0; i < fib.length; i++) {
    if (fib[i] % 2 !== 0) {
        oddFib.push(fib[i]);
    }
}

console.log("First " + n + " Fibonacci numbers: [" + fib.join(", ") + "]");
console.log("Odd Fibonacci numbers: [" + oddFib.join(", ") + "]");