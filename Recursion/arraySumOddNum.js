// Problem: Sum only the odd numbers in an array by solving the same problem for a smaller prefix and adding the current value only when it is odd.
//
// Example:
// Input: arr = [5, 3, 2, 10, 1]
// Result: 9
//
// LeetCode reference:
// - Problem #: Not provided in the request
// - Title: Not provided in the request
// - Link: Not provided in the request
// Note: Approach 1 below is the accepted/optimal solution for this recursion-based example because it directly models the odd-number condition and reduces the problem size at each step.

const arr = [5, 3, 2, 10, 1];

// ============================================

// Approach 1: Recursive odd-sum accumulation
// Formula/Logic: sumOdd(n) = (arr[n] is odd ? arr[n] : 0) + sumOdd(n - 1), with the base case returning 0 when the index reaches 0 and the value is even.
// - Start from the last index and reduce the problem size by one each recursive call.
// - Check whether the current element is odd and add it only if it is.
// - Recurse until the index reaches 0, then return the accumulated result.
// Time complexity: O(n) because each element is checked once.
// Space complexity: O(n) because each recursive call adds a frame to the call stack.

// ============================================

function arraySumOddNum(n) {
  const isOdd = arr[n] % 2 !== 0;

  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }

  return (isOdd ? arr[n] : 0) + arraySumOddNum(n - 1);
}

console.log(arraySumOddNum(arr.length - 1));

// ============================================
// Best Approach: Recursive odd-sum accumulation
// Why: It matches the recursive definition of the problem and keeps the logic easy to follow.
// Time complexity: O(n), Space complexity: O(n)
// Use case: Use this when you want a straightforward recursive explanation for interviews or educational examples.
// ============================================
