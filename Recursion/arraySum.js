// Problem: Sum all elements in an array by reducing the problem to the sum of a smaller prefix and the current element.
//
// Example:
// Input: arr = [5, 4, 3, 2, 1]
// Result: 15
//
// LeetCode reference:
// - Problem #: Not provided in the request
// - Title: Not provided in the request
// - Link: Not provided in the request
// Note: Approach 1 below is the accepted/optimal solution for this recursion-based example because it directly mirrors the definition of a sum.

const arr = [5, 4, 3, 2, 1];

// ============================================

// Approach 1: Recursive accumulation
// Formula/Logic: sum(n) = arr[n] + sum(n - 1), with the base case returning the first element when n is 0.
// - Start from the last index and reduce the problem size by one each call.
// - Add the current element to the sum returned by the recursive call.
// - Stop once the index reaches 0 and return the first element.
// Time complexity: O(n) because each element is visited exactly once.
// Space complexity: O(n) because each recursive call adds a frame to the call stack.

// ============================================

// Algorithm:
// 1. Start with the last index of the array.
// 2. If the index is 0, return the first element as the base case.
// 3. Otherwise, add the current element to the sum of the remaining elements.
// 4. Repeat this until the index becomes 0.
// This works because each call solves a smaller version of the same problem.
//
// Call stack visualization for sum(arr):
// sum(4) = arr[4] + sum(3)
// sum(3) = arr[3] + sum(2)
// sum(2) = arr[2] + sum(1)
// sum(1) = arr[1] + sum(0)
// sum(0) = arr[0]
// Unwinding: 1 + 2 + 3 + 4 + 5 = 15

function arraySum(n) {
  if (n === 0) {
    return arr[0];
  }

  return arr[n] + arraySum(n - 1);
}

console.log(arraySum(arr.length - 1));

// ============================================
// Best Approach: Recursive accumulation
// Why: It expresses the problem in its natural recursive form and is easy to read for interview-style recursion questions.
// Time complexity: O(n), Space complexity: O(n)
// Use case: Use this when you want a concise recursive solution and are comfortable with call-stack depth for moderate input sizes.
// ============================================
