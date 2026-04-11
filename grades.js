const readline = require("readline-sync");
let currentAverage;

while (true) {
  currentAverage = Number(readline.question("Enter your current average: "));
  if (currentAverage >= 0 && currentAverage <= 100) break;
  console.log("Invalid input. Must be between 0 and 100.");
}
let finalScores = [];

let numScores = Number(readline.question("How many final exam scores do you want to test? "));

for (let i = 0; i < numScores; i++) {
  let score;

  while (true) {
    score = Number(readline.question(`Enter final exam score #${i + 1}: `));
    if (score >= 0 && score <= 100) break;
    console.log("Invalid input. Must be between 0 and 100.");
  }

  finalScores.push(score);
}
function getLetterGrade(avg) {
  if (avg >= 90) return "A";
  else if (avg >= 80) return "B";
  else if (avg >= 70) return "C";
  else if (avg >= 60) return "D";
  else return "F";
}
console.log("\n--- Grade Projections ---");

for (let score of finalScores) {
  let finalAverage = (currentAverage * 0.75) + (score * 0.25);

  let letter = getLetterGrade(finalAverage);

  let status;
  if (finalAverage > currentAverage) {
    status = "Improved";
  } else if (finalAverage < currentAverage) {
    status = "Declined";
  } else {
    status = "Stayed the same";
  }

  console.log(`\nFinal Exam Score: ${score}`);
  console.log(`Final Course Average: ${finalAverage.toFixed(2)}`);
  console.log(`Letter Grade: ${letter}`);
  console.log(`Status: ${status}`);
}
