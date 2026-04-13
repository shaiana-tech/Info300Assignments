// Noor Shaia INFO 300 001

const readlineSync = require("readline-sync");

let input = readlineSync.question("Enter a string: ");

input = input.toLowerCase();

let freq = {};
let firstRepeat = null;

for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char >= 'a' && char <= 'z') {

        if (freq[char]) {
            freq[char]++;

            if (firstRepeat === null) {
                firstRepeat = char;
            }

        } else {
            freq[char] = 1;
        }
    }
}

console.log("\nLetter Frequency:");

for (let letter in freq) {
    console.log(letter + ": " + freq[letter]);
}

if (firstRepeat) {
    console.log("\nFirst repeated letter: " + firstRepeat);
} else {
    console.log("\nNo repeated letters found.");
}