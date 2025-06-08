//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

function countInput(n) {
  let p = 0;
  let nCopy = n;
  n = Math.abs(n);
  while (n > 0) {
    let last = n % 10; // get last digit
    p = 10 * p + last; // build reversed number
    n = Math.floor(n / 10); // remove last digit
  }
  let limit = Math.pow(2, 31);
  if (p < -limit || p > limit) return 0;
  console.log(nCopy < 0 ? -p : p);
}
let res = countInput(1345);
console.log("Try programiz.pro", res);
