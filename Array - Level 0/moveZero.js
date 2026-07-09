// LeetCode Problem 283: Move Zeroes
// Problem link: https://leetcode.com/problems/move-zeroes/
// Given an integer array nums, move all 0's to the end while preserving the order of non-zero elements.
// Operate in-place and minimize the number of operations.

const nums = [0, 1, 0, 3, 12];

/**
 * Approach 1: Naive method using splice + push.
 * This demonstrates the basic idea but can be inefficient, because splice is O(n)
 * and modifying the array while iterating can cause index skipping unless adjusted.
 *
 * @param {number[]} nums
 * @returns {void}
 */
function moveZeroesNaive(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--; // adjust index after removal to avoid skipping the next item
    }
  }
}

/**
 * Approach 2: Two-pointer technique.
 * Move every non-zero value to the front in a single pass, then fill the rest with zeros.
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @returns {void}
 */
function moveZeroes(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
}

moveZeroes(nums);
console.log(nums); // [1, 3, 12, 0, 0]
