// Pattern 7 - Print a Right-Angled Triangle of Alternating 1s and 0s
// Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.

function patern7(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggole = 1;
    for (let j = 0; j <= i; j++) {
      row += toggole;
      toggole = toggole === 1 ? 0 : 1;
    }
    console.log(row);
  }
}

patern7(4);

// output
// 1
// 10
// 101
// 1010
