//Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(n) {
  if (n < 0) return false;
  let p = 0;
  let nCopy = n;
  while (n > 0) {
    let rem = n % 10; // get last digit
    p = p * 10 + rem; // build reversed number
    n = Math.floor(n / 10); // remove last digit
  }
  if (nCopy === p) {
    return true;
  }
  return false;
}

let res = isPalindrome(-111);
console.log(res);

// Step by step: p = p * 10 + rem; // build reversed number 345

// n = 345
// last = 345 % 10 = 5
// p = 0 → (0 × 10) + 5 = 5

// n = 34
// last = 34 % 10 = 4
// p = 5 → (5 × 10) + 4 = 54

// n = 3
// last = 3 % 10 = 3
// p = 54 → (54 × 10) + 3 = 543
