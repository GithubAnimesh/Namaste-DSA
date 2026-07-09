/**
 * Prints all numbers from n down to 1 in descending order using linear recursion.
 *
 * Example: printN(5) outputs:
 * 5
 * 4
 * 3
 * 2
 * 1
 *
 * How it works:
 * - printN(5) prints 5, then calls printN(4)
 * - printN(4) prints 4, then calls printN(3)
 * - printN(3) prints 3, then calls printN(2)
 * - printN(2) prints 2, then calls printN(1)
 * - printN(1) prints 1, then calls printN(0)
 * - printN(0) hits base case and returns (no recursion)
 *
 * This is a side-effect recursion (performs work with console.log)
 * rather than returning a computed value.
 *
 * Complexity:
 * - Time: O(n) - prints n numbers
 * - Space: O(n) - call stack depth is n
 *
 * @param {number} n - The starting number to print from
 */
function printN(n) {
  // Base case: when n drops below 1, stop recursion
  if (n < 1) return;

  // Perform work: print the current number
  console.log(n);

  // Recursive case: decrement n and call printN with smaller value
  n--;
  printN(n);
}

console.log("Output:"); // Label for clarity
printN(5);
