// Pattern 2 - Right-Angled Star Triangle Pattern
// Write a program to print a right-angled triangle of stars (*) with n rows.

function Pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let num = "";
    for (let j = 1; j <= i; j++) {
      num += j;
    }
    console.log(num);
  }
}

Pattern3(4);

//OR

function Pattern2(n) {
  for (let i = 0; i < n; i++) {
    let num = "";
    for (let j = 0; j < i + 1; j++) {
      num += "*";
    }
    console.log(num);
  }
}
Pattern2(4);

//Output
// *
// **
// ***
// ****
