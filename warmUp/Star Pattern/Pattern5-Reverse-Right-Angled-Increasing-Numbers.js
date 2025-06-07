// Pattern 5 - Print a Reverse Right-Angled Triangle of Increasing Numbers
// Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.

function Pattern5(n) {
  for (let i = n; i > 0; i--) {
    let num = "";
    for (let j = 1; j <= i; j++) {
      num += j;
    }
    console.log(num);
  }
}

Pattern5(4);

// output
// 1234
// 123
// 12
// 1
