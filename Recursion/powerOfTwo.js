// Problem: Determine whether a given integer is a power of two by repeatedly dividing it by two until it reaches 1 or becomes invalid.
//
// Example:
// Input: n = 8
// Result: true
//
// LeetCode reference:
// - Problem #231: Power of Two
// - Link: https://leetcode.com/problems/power-of-two/
// Note: Approach 2 below is the accepted/optimal solution because it uses the bitwise property of powers of two in constant time.

// ============================================

// Approach 1: Recursive halving
// Formula/Logic: A number is a power of two if it is 1, or if it is even and its half is also a power of two.
// - Check whether the input is 1, which is a power of two.
// - Reject values that are less than 1 or odd.
// - Recurse on n / 2 until the base case or invalid case is reached.
// Time complexity: O(log n) because the number is halved at each recursive step.
// Space complexity: O(log n) because each recursive call adds a frame to the call stack.

// ============================================

function powerOfTwoByDivision(n) {
  if (n === 1) return true;
  if (n < 1 || n % 2 !== 0) return false;
  return powerOfTwoByDivision(n / 2);
}

console.log(powerOfTwoByDivision(8));

// ============================================

// Approach 2: Bitwise check
// Formula/Logic: A positive power of two has exactly one set bit in binary, so n > 0 and n & (n - 1) === 0.
// - Reject non-positive numbers immediately.
// - Compare the number with its binary subtraction result.
// - Return true only when the expression holds.
// Time complexity: O(1) because it uses a fixed number of bit operations.
// Space complexity: O(1) because it uses only constant extra space.

// ============================================

function powerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(powerOfTwo(8));

// ============================================
// Best Approach: Bitwise check
// Why: It is shorter and faster because it exploits the binary structure of powers of two.
// Time complexity: O(1), Space complexity: O(1)
// Use case: Use this in interviews and production code when you need a compact and efficient power-of-two check.
// ============================================
