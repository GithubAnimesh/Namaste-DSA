// Problem: Reverse a string in-place using an array of characters.
//
// Example:
// Input: ["h", "e", "l", "l", "o"]
// Result: ["o", "l", "l", "e", "h"]
//
// LeetCode reference:
// - Problem #344: Reverse String
// - Link: https://leetcode.com/problems/reverse-string/
// Note: Approach 1 preserves the original swap logic, while Approach 2 offers a common two-pointer variation.

// ============================================
// Approach 1: In-place swap using half-length loop
// Formula/Logic: Swap characters at symmetric positions from the ends toward the center.
// - Compute loopCount as Math.floor(s.length / 2).
// - For each i from 0 to loopCount - 1, swap s[i] with s[s.length - 1 - i].
// - Return the modified array when all mirror swaps are complete.
// Time complexity: O(n) because each element is moved at most once.
// Space complexity: O(1) because swaps happen in-place using a temporary variable.
// ============================================

function reverseString(s) {
  const loopCount = Math.floor(s.length / 2);

  for (let i = 0; i < loopCount; i++) {
    const temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }

  return s;
}

// ============================================
// Approach 2: Two-pointer in-place swap
// Formula/Logic: Use left and right pointers to swap matching characters from the ends inward.
// - Initialize left at 0 and right at s.length - 1.
// - Swap s[left] and s[right], then move left forward and right backward.
// - Continue until left >= right and return the reversed array.
// Time complexity: O(n) because each element is visited once.
// Space complexity: O(1) because the reversal is done in-place.
// ============================================

function reverseStringTwoPointers(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left += 1;
    right -= 1;
  }

  return s;
}

// Example usage:
const example = ["h", "e", "l", "l", "o"];
console.log(reverseString([...example])); // ["o", "l", "l", "e", "h"]
console.log(reverseStringTwoPointers([...example])); // ["o", "l", "l", "e", "h"]

// ============================================
// Best Approach: Both approaches are optimal
// Why: Both use in-place swaps with constant extra space and one full pass over the array.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Approach 1 preserves the original swap style; Approach 2 is a conventional two-pointer implementation.
// ============================================
