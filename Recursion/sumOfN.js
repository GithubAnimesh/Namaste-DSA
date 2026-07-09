/**
 * Calculates the sum of all numbers from 1 to n using linear recursion.
 *
 * Example: sum(5) = 5 + 4 + 3 + 2 + 1 = 15
 *
 * How it works:
 * - sum(5) → 5 + sum(4)
 * - sum(4) → 4 + sum(3)
 * - sum(3) → 3 + sum(2)
 * - sum(2) → 2 + sum(1)
 * - sum(1) → 1 + sum(0)
 * - sum(0) → 0 (base case)
 *
 * Then results sum while the stack unwinds:
 * 0 → 1 → 3 → 6 → 10 → 15
 *
 * KEY INSIGHT: "return n + sum(n - 1)" works without storing values because:
 * 1. sum(n - 1) is CALLED FIRST and waits for a return value
 * 2. Once sum(n - 1) returns a number, THEN that number is ADDED to n
 * 3. Each level of recursion adds its number to the result from the level below
 *
 * DETAILED TRACE for sum(3):
 *
 * GOING DOWN (making calls):
 * sum(3) calls sum(2), waits for result
 *   sum(2) calls sum(1), waits for result
 *     sum(1) calls sum(0), waits for result
 *       sum(0) returns 0 immediately (base case)
 *     sum(1) receives 0, now does: return 1 + 0 = 1
 *   sum(2) receives 1, now does: return 2 + 1 = 3
 * sum(3) receives 3, now does: return 3 + 3 = 6
 *
 * The CALL STACK stores each pending operation:
 * ┌─────────────────────┐
 * │ sum(3) waiting for: 3 + ?  ← stays here until sum(2) returns
 * │ sum(2) waiting for: 2 + ?  ← stays here until sum(1) returns
 * │ sum(1) waiting for: 1 + ?  ← stays here until sum(0) returns
 * │ sum(0) returns 0   ← base case hits, starts unwinding
 * └─────────────────────┘
 *
 * Then it unwinds (returning values):
 * sum(0) returns 0
 * sum(1) now has both: 1 + 0, returns 1
 * sum(2) now has both: 2 + 1, returns 3
 * sum(3) now has both: 3 + 3, returns 6
 *
 * Complexity:
 * - Time: O(n)
 * - Space: O(n) because of the call stack
 *
 * @param {number} n - The number to sum up to
 * @returns {number} The sum of all numbers from 1 to n
 */
function sum(n) {
  // Base case: when n reaches 0, stop recursion and return 0
  // This is where the chain of additions starts unwinding
  if (n == 0) return 0;

  // Recursive case:
  // 1. First, sum(n - 1) is called and we WAIT for its return value
  // 2. Once we get that value, we ADD n to it
  // 3. Finally, we return the result up to the caller
  // The actual addition happens when THIS level of recursion returns
  return n + sum(n - 1);
}

console.log(sum(5)); // Output: 15

/*
visualization of the call stack for sum(3):
GOING DOWN (making calls):
sum(3) calls sum(2), waits for result
Going DOWN (making calls):
sum(3) calls sum(2), pauses here ⏸️
  sum(2) calls sum(1), pauses here ⏸️
    sum(1) calls sum(0), pauses here ⏸️
      sum(0) returns 0 ✓ (base case)

Coming BACK UP (unwinding with additions):
      sum(0) returns: 0
    sum(1) gets 0, now does: 1 + 0 = 1 ✓
  sum(2) gets 1, now does: 2 + 1 = 3 ✓
sum(3) gets 3, now does: 3 + 3 = 6 ✓s
*/
