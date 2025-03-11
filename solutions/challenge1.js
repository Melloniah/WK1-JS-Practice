function inputStudentMarks() {
  let studentMarks = prompt("Input student marks:");

  let marks = Number(studentMarks);

  // checks if input is a number, or the marks are less than 0 or greater than 100
  if (!isFinite(marks) || marks < 0 || marks > 100) {
    alert("Invalid input! Please enter a number between 0 and 100.");
    return;
  }

  let grade;
  if (marks >= 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  alert(`Your grade is: ${grade}`);
  return;
}
inputStudentMarks();
