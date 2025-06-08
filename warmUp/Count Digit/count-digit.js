//Write a function countDigits(n) that takes an integer n and returns how many digits it contains.
// Handles both positive and negative integers.
// Return 1 if n is 0 (since 0 is a single-digit number).

function countInput(n) {
  let count = 0;
  if (n == 0) return 1;
  n = Math.abs(n);
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  console.log(count);
}
countInput(234);
