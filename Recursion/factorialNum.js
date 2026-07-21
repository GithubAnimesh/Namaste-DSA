// Problem: Compute the factorial of a non-negative integer by multiplying the number with the factorial of the previous integer until the base case is reached.
//
// Example:
// Input: n = 5
// Result: 120
//
// LeetCode reference:
// - Problem #: Not provided in the request
// - Title: Not provided in the request
// - Link: Not provided in the request
// Note: Approach 1 below is the accepted/optimal solution for this recursion-based example because it directly expresses the factorial definition.

// ============================================

// Approach 1: Recursive factorial computation
// Formula/Logic: factorial(n) = n * factorial(n - 1), with the base case factorial(0) = 1.
// - Check whether the input has reached the base case.
// - Recurse on the smaller value n - 1 to compute the remaining product.
// - Multiply the current value by the result returned from the recursive call.
// Time complexity: O(n) because the function is called once for each value from n down to 0.
// Space complexity: O(n) because each recursive call adds a frame to the call stack.

// ============================================

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));

// ============================================
// Best Approach: Recursive factorial computation
// Why: It mirrors the mathematical definition of factorial and keeps the solution concise.
// Time complexity: O(n), Space complexity: O(n)
// Use case: Use this when you want a clear recursive explanation for interviews or educational examples.
// ============================================
