// Problem: Given a sorted array of integers nums and an integer target, return the index of target if it exists in nums,
// otherwise return -1. You must write an algorithm with O(log n) runtime complexity.
//
// Example 1:
// nums = [-1, 0, 3, 5, 9, 12], target = 9
// Result: 4 (index of 9)
//
// Example 2:
// nums = [-1, 0, 3, 5, 9, 12], target = 13
// Result: -1 (not found)
//
// LeetCode reference:
// - Problem #704: Binary Search
// - Link: https://leetcode.com/problems/binary-search/
// Note: Approach 2 (Binary Search) below is the accepted/optimal solution because it achieves O(log n) runtime as required.

// ============================================

// Approach 1: Linear Search
// Formula/Logic: Scan each element sequentially until the target is found or the array is exhausted. Works on any array regardless of order.
// - Start at index 0 and iterate through each element
// - Compare current element with target; return index immediately if match found
// - If loop completes without finding target, return -1
// Time complexity: O(n) because in the worst case, we examine every element
// Space complexity: O(1) because we only use a constant amount of extra space (loop variable)

function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

// ============================================

// ============================================

// Approach 2: Binary Search
// Formula/Logic: Eliminate half of the remaining search space with each comparison by comparing target to the middle element. Array must be sorted.
// - Set left pointer to start (index 0) and right pointer to end (index length - 1)
// - Calculate middle index: mid = Math.floor((left + right) / 2)
// - If nums[mid] equals target, return mid immediately
// - If nums[mid] < target, the target must be in the right half; set left = mid + 1
// - If nums[mid] > target, the target must be in the left half; set right = mid - 1
// - Continue while left <= right; return -1 if target not found
// Time complexity: O(log n) because the search space is halved with each iteration, reducing the problem size exponentially
// Space complexity: O(1) because we only use left, right, and mid pointers

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// ============================================

// ============================================
// Best Approach: Binary Search
// Why: O(log n) satisfies the problem constraint and is exponentially faster than O(n) on large sorted arrays (1 million elements: ~20 comparisons vs ~500,000).
// Time complexity: O(log n), Space complexity: O(1)
// Use case: Binary search is the standard solution for searching sorted data. Used in database indexing, file systems, and any searching problem on pre-sorted data. This is the expected solution in technical interviews for LeetCode 704.
// ============================================

// Test cases
let nums1 = [-1, 0, 3, 5, 9, 12];
console.log(binarySearch(nums1, 9)); // Expected: 4
console.log(binarySearch(nums1, 13)); // Expected: -1

let nums2 = [5];
console.log(binarySearch(nums2, 5)); // Expected: 0
