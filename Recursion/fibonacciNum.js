// Problem: Return the nth Fibonacci number, starting from 0 and 1.
//
// Example:
// Input: n = 4
// Result: 3
//
// LeetCode reference:
// - Problem #509: Fibonacci Number
// - Link: https://leetcode.com/problems/fibonacci-number/
// Note: Approach 3 below is the best solution because it avoids repeated recomputation and uses constant extra space.

// ============================================

// Approach 1: Array-based build-up
// Formula/Logic: Build the sequence from the start and add each new term from the previous two values.
// - Start with an empty array and push the first two values manually.
// - For every next index, add the last two numbers and push the result.
// Time complexity: O(n) because each term is computed once.
// Space complexity: O(n) because the full sequence is stored in the array.

// ============================================

function fibonacciSeries(n) {
  const res = [];

  for (let i = 0; i <= n; i++) {
    if (res.length === 0) {
      res.push(0);
    } else if (res.length === 1) {
      res.push(1);
    } else {
      res.push(res[res.length - 1] + res[res.length - 2]);
    }
  }

  return res[n];
}

// ============================================

// Approach 2: Recursive brute force
// Formula/Logic: The value is defined as fib(n) = fib(n - 1) + fib(n - 2), with fib(0) = 0 and fib(1) = 1.
// - The function calls itself on smaller values until it reaches the base cases.
// - Each call branches into two recursive calls, causing repeated work.
// Time complexity: O(2^n) because the recursive tree grows exponentially.
// Space complexity: O(n) because the call stack grows with the input size.

// ============================================

function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// ============================================

// Approach 3: Iterative dynamic programming
// Formula/Logic: Each value depends only on the previous two values, so we keep rolling them forward.
// - Start with the base values 0 and 1.
// - Update the pair by adding them and shifting the values forward until the target index is reached.
// Time complexity: O(n) because each index is processed once.
// Space complexity: O(1) because only a few variables are stored.

// ============================================

function fib(n) {
  if (n <= 1) return n;

  let prevTwo = 0;
  let prevOne = 1;

  for (let i = 2; i <= n; i++) {
    const current = prevOne + prevTwo;
    prevTwo = prevOne;
    prevOne = current;
  }

  return prevOne;
}

// ============================================
// Best Approach: Approach 3
// Why: It computes each Fibonacci value once and reuses the previous two values efficiently.
// Time complexity: O(n), Space complexity: O(1)
// Use case: This is the standard interview solution for Fibonacci and other DP-style problems.
// ============================================

console.log(fibonacciSeries(5)); // 5
console.log(fibRecursive(4)); // 3
console.log(fib(4)); // 3
console.log(fib(10)); // 55
