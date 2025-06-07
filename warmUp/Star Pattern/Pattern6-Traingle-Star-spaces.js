// Pattern 6 - Print a Right-Aligned Right-Angled Triangle of Stars
// Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.

let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) {
    row += " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row += "*";
  }
  console.log(row);
}

// output
//    *
//   **
//  ***
// ****
