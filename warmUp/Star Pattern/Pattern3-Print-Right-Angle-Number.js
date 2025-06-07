// Pattern 3 - Print a Right-Angled Number Triangle
// Write a program that prints a right-angled triangle of numbers of height n.

function Pattern3(n) {
  for (let i = 0; i < n; i++) {
    let num = "";
    for (let j = 0; j <= i; j++) {
      num += j + 1;
    }
    console.log(num);
  }
}

Pattern3(4);

// output
// 1
// 12
// 123
// 1234
