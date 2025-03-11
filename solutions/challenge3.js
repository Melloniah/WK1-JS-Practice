function netSalary() {
  let basicSalary = Number(prompt("What is your basic pay?"));
  let benefits = Number(prompt("How much are your benefits"));
  let grossSalary = basicSalary + benefits;
  let taxRate;
  if (grossSalary <= 24000) {
    taxRate = 0.1;
  } else if (grossSalary <= 32333) {
    taxRate = 0.25;
  } else if (grossSalary <= 500000) {
    taxRate = 0.3;
  } else if (grossSalary <= 800000) {
    taxRate = 0.325;
  } else taxRate = 0.35;
  let paye = grossSalary * taxRate; // Calculate PAYE
  alert(`Your PAYE is: ${paye}`);
  // Calculate NHIF (2.75% of gross salary)
  let shif = grossSalary * 0.0275;
  // Calculate Housing Levy (1.5% of gross salary)
  let housingLevy = grossSalary * 0.015;
  // Calculate NSSF
  let nssf;
  let tier1 = 0;
  let tier2 = 0;

  if (grossSalary <= 8000) {
    tier1 = 8000 * 0.06;
    nssf = tier1;
  } else if (grossSalary >= 8001 && grossSalary <= 72000) {
    tier1 = grossSalary * 0.06;
    tier2 = (grossSalary - 8000) * 0.06;
    nssf = tier1 + tier2;
  } else {
    nssf = 4320; //// Max NSSF contribution
  }
  let totalDeductions = paye + shif + housingLevy + nssf;
  let netSalary = grossSalary - totalDeductions;
  alert(`Your Net Salary is: ${netSalary}`);
  return netSalary;
}
