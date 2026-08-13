// Problem: Remove duplicates from a sorted array in-place and return the count of unique elements.
//
// Example:
// Input: nums = [1,1,2]
// Result: 2, nums = [1,2,_,_]
//
// LeetCode reference:
// - Problem #26: Remove Duplicates from Sorted Array
// - Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Note: Approach 1 is the preferred solution because it uses the optimal two-pointer pattern with constant extra space.

// ============================================
// Approach 1: Two-pointer overwrite
// Formula/Logic: Maintain a write pointer for the next unique element and copy forward only when a new value appears.
// - If the array is empty, return 0 immediately.
// - Initialize x to 0 as the last unique element index.
// - For each element, if it is greater than nums[x], increment x and overwrite nums[x].
// - Return x + 1 as the count of unique values.
// Time complexity: O(n) because the array is traversed once.
// Space complexity: O(1) because the operation is done in-place.
// ============================================

function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let x = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x += 1;
      nums[x] = nums[i];
    }
  }

  return x + 1;
}

// ============================================
// Approach 2: Brute-force duplicate removal with splice
// Formula/Logic: Compare every element to later elements and remove duplicates as they are found.
// - Iterate with a primary index i and a secondary index j starting at i + 1.
// - When a duplicate is found, remove it with splice and decrement j to re-check the shifted element.
// - Continue until no duplicates remain and return the new length.
// Time complexity: O(n²) because nested loops and splice shifting costs are involved.
// Space complexity: O(1) because removal is performed in-place.
// ============================================

function removeDuplicatesBruteForce(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j -= 1;
      }
    }
  }

  return nums.length;
}

// Example usage:
const nums1 = [1, 1, 2];
const nums2 = [1, 1, 2];

const k1 = removeDuplicates(nums1);
console.log(k1, nums1.slice(0, k1).concat(Array(nums1.length - k1).fill("_"))); // 2 [1, 2, _, _]

const k2 = removeDuplicatesBruteForce(nums2);
console.log(k2, nums2.slice(0, k2).concat(Array(nums2.length - k2).fill("_"))); // 2 [1, 2, _, _]

// ============================================
// Best Approach: Two-pointer overwrite
// Why: It preserves the sorted order, minimizes writes, and uses constant extra space.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Preferred for interview and production when removing duplicates from a sorted array.
// ============================================
