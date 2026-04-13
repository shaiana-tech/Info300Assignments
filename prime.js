// Noor Shaia INFO 300 001

const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Enter a positive number (<= 1000): "));

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let primes = [];

for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

console.log("Primes up to " + n + ": [" + primes.join(", ") + "]");

let largestGap = 0;
let gapStart = 0;
let gapEnd = 0;
let totalGap = 0;

for (let i = 0; i < primes.length - 1; i++) {
    let gap = primes[i + 1] - primes[i];
    totalGap += gap;

    if (gap > largestGap) {
        largestGap = gap;
        gapStart = primes[i];
        gapEnd = primes[i + 1];
    }
}

let avgGap = totalGap / (primes.length - 1);

console.log("The largest gap is " + largestGap + ", between " + gapStart + " and " + gapEnd);
console.log("The average gap is " + avgGap.toFixed(2));