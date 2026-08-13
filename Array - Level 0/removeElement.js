// Problem: Remove all occurrences of a target value from an array in-place and return the new length.
//
// Example:
// Input: nums = [3, 2, 2, 3], val = 3
// Result: new length = 2, nums can start with [2, 2]
//
// LeetCode reference:
// - Problem #27: Remove Element
// - Link: https://leetcode.com/problems/remove-element/
// Note: Approach 1 keeps the original in-place overwrite logic; Approach 2 is an alternate two-pointer swap method.

// ============================================
// Approach 1: In-place overwrite using write pointer
// Formula/Logic: Keep a write index for valid values and overwrite elements equal to val.
// - Initialize x to 0 as the write pointer.
// - Iterate through the array and copy each non-val element to arr[x].
// - Increment x only for valid elements and return x as the new length.
// Time complexity: O(n) because the array is traversed once.
// Space complexity: O(1) because the removal is done in-place.
// ============================================

function removeElement(arr, val) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      // Shift element to left if it is not equal to val
      arr[x] = arr[i];
      x = x + 1;
    }
  }

  return x;
}

// ============================================
// Approach 2: Two-pointer swap from both ends
// Formula/Logic: Use a slow pointer for valid elements and a fast pointer from the end to replace removed values.
// - Keep left at 0 and right at arr.length - 1.
// - When arr[left] equals val, swap it with arr[right] and decrement right.
// - When arr[left] is valid, increment left.
// - Stop when left exceeds right and return left as the new length.
// Time complexity: O(n) because each element is processed at most once.
// Space complexity: O(1) because swaps happen in-place.
// ============================================

function removeElementSwap(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] === val) {
      arr[left] = arr[right];
      right -= 1;
    } else {
      left += 1;
    }
  }

  return left;
}

// Example usage:
const nums = [3, 2, 2, 3];
const valToRemove = 3;

console.log(removeElement([...nums], valToRemove)); // 2
console.log(removeElementSwap([...nums], valToRemove)); // 2

// ============================================
// Best Approach: Approach 1 and Approach 2 are both valid
// Why: Approach 1 preserves the original overwrite logic and Approach 2 provides an alternate end-swap technique.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Use Approach 1 when stable relative order is preferred; use Approach 2 when order can change and fewer writes are desired.
// ============================================
