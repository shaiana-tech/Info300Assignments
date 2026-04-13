// Noor Shaia INFO 300 001

const readlineSync = require('readline-sync');

// Fixed: I converted input from string to number using parseInt
let start = parseInt(readlineSync.question("Enter start number: "));
let end = parseInt(readlineSync.question("Enter end number: "));

let count = 0;

for (let i = start; i <= end; i++) {

  // Fixed: I used modulus (%) to check for even numbers instead of division (/)
  if (i % 2 == 0) {

    // Fixed: I corrected the operator from =+ to += so it would increment properly
    count += 1;
  }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);