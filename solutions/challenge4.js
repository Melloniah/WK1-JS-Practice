//bubblesort
let num = [5, 6, 1, 3, 4, 2];
num.sort((a, b) => a - b);
console.log(num);

//Staircase problem
function downStairs(levels) {
  for (let i = 1; i <= levels; i++) {
    let step = ""; // Define step inside the loop so it resets for each level
    for (let m = 1; m <= i; m++) {
      step += "#"; // Append "#" for each level
    }
    console.log(step); // Print the step at each level
  }
}

// Example usage:
downStairs(5);
