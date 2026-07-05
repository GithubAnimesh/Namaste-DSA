// Problem: Find the single missing number from an array containing n distinct numbers in the range [0, n].
// The array should contain all numbers from 0 to n except one; identify which number is missing.
//
// Example:
// nums = [3, 0, 1]
// Result: 2
//
// LeetCode reference:
// - Problem #268: Missing Number
// - Link: https://leetcode.com/problems/missing-number/
// Note: Approach 2 below is the accepted optimal solution (sum formula, O(n) time, O(1) space).

// ============================================
// Approach 1: Brute-force using a Set
// Formula/Logic: Create a set of all array elements, then check each number from 0 to n to find which one is missing.
// - Convert array to a Set for O(1) lookups.
// - Iterate through numbers 0 to n.
// - Return the first number not found in the set.
// Time complexity: O(n) because we iterate through the array once to create the set and once more to check numbers.
// Space complexity: O(n) because we store n elements in a set.
function missingNumberBruteForce(nums) {
  const numSet = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }
}

// ============================================
// Approach 2: Mathematical sum formula
// Formula/Logic: expectedSum = n * (n + 1) / 2. The missing number equals expectedSum - actualSum of array elements.
// - Calculate the expected sum of numbers from 0 to n using the arithmetic series formula.
// - Calculate the actual sum of array elements.
// - The difference is the missing number.
// Time complexity: O(n) because we iterate through the array once to calculate the actual sum.
// Space complexity: O(1) because we only use two variables regardless of input size.
function missingNumber(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < n; i++) {
    actualSum += nums[i];
  }
  return expectedSum - actualSum;
}

// ============================================
// Best Approach: Mathematical sum formula
// Why: Optimal O(n) time with O(1) space; no extra data structures needed, single pass calculation.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Preferred in interviews and production code; handles large arrays efficiently without extra memory overhead.
// ============================================
