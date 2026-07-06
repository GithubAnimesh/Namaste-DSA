// Problem: Max Consecutive Ones (LeetCode #485)
// Given a binary array `nums`, return the maximum number of consecutive 1s in the array.
//
// Example:
// nums = [1, 1, 0, 1, 1, 1]
// Output: 3
//
// LeetCode reference:
// - Problem #485: Max Consecutive Ones
// - Link: https://leetcode.com/problems/max-consecutive-ones/
//
// Approach: Single-pass counting
// - Iterate through the array, maintain a running `count` of consecutive 1s.
// - When encountering a 1, increment `count` and update `maxCount` if needed.
// - When encountering a 0, reset `count` to 0.
//
// Time complexity: O(n) — single pass over the array.
// Space complexity: O(1) — constant extra space.

// Approach 1 (recommended): Single-pass counting
// - Iterate once, maintain `count` of current consecutive 1s and `maxCount` for best seen so far.
// - O(n) time, O(1) space.
function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (count > maxCount) maxCount = count;
    } else {
      count = 0;
    }
  }
  return maxCount;
}

// Approach 2 (equivalent): Reset-and-max on zero
// - Keep `count` of consecutive 1s; when a 0 is seen, update `maxCount` and reset `count`.
// - Final return takes max of `count` and `maxCount` to account for trailing ones.
// - Also O(n) time, O(1) space. Slightly different ordering of updates but same complexity.
function findMaxConsecutiveOnesAlt(nums) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }
  return Math.max(count, maxCount);
}

// Example usage (uncomment to run):
// const nums = [1, 1, 0, 1, 1, 1];
// console.log(findMaxConsecutiveOnes(nums));    // 3 (approach 1)
// console.log(findMaxConsecutiveOnesAlt(nums)); // 3 (approach 2)

// Both approaches are interview-ready; prefer `findMaxConsecutiveOnes` for name clarity.
