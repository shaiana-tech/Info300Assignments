const readline = require("readline-sync");
let employees = [];
for (let i = 0; i < 3; i++) {
  console.log(`\nEnter details for employee #${i + 1}`);
  let name = readline.question("Enter employee name: ");
    let wage;
  while (true) {
    wage = Number(readline.question("Enter hourly wage: "));
    if (wage > 0) break;
    console.log("Invalid input. Wage must be positive.");
  }
    let hours;
  while (true) {
    hours = Number(readline.question("Enter hours worked: "));
    if (hours >= 0 && hours <= 80) break;
    console.log("Invalid input. Hours must be between 0 and 80.");
  }
    let regularHours = Math.min(hours, 40);
  let overtimeHours = Math.max(hours - 40, 0);

  let regularPay = regularHours * wage;
  let overtimePay = overtimeHours * wage * 1.5;
  let totalPay = regularPay + overtimePay;
    employees.push({
    name,
    hours,
    wage,
    regularPay,
    overtimePay,
    totalPay
  });
}
let highestPaid = employees[0];

for (let emp of employees) {
  if (emp.totalPay > highestPaid.totalPay) {
    highestPaid = emp;
  }
}
console.log("\n--- Payroll Report ---");

for (let emp of employees) {
  console.log(`\nName: ${emp.name}`);
  console.log(`Hours Worked: ${emp.hours}`);
  console.log(`Regular Pay: $${emp.regularPay.toFixed(2)}`);
  console.log(`Overtime Pay: $${emp.overtimePay.toFixed(2)}`);
  console.log(`Total Pay: $${emp.totalPay.toFixed(2)}`);

  if (emp === highestPaid) {
    console.log("*** Highest Paid Employee ***");
  }
}
