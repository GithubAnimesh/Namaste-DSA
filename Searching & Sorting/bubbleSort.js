// Problem: Sort an array of numbers into non-decreasing order using bubble sort.
//
// Example:
// Input: [40, 10, 30, 20]
// Result: [10, 20, 30, 40]
//
// LeetCode reference:
// - Problem #: N/A
// - Link: N/A
// Note: Approach 2 (optimized bubble with early exit) is the preferred/accepted
// approach here because it avoids unnecessary passes on already-sorted arrays.

// Related topic: Searching & Sorting — see NOTES.md for concept overview

// ============================================

// Approach 1: Brute-force Bubble Sort
// Formula/Logic: Repeatedly compare adjacent elements and swap if out of order.
// - Make (n-1) full passes over the array
// - On each pass, compare adjacent pairs and swap when needed
// - After k passes, the last k elements are in their final position
// Time complexity: O(n^2) because of two nested loops over n
// Space complexity: O(1) because sorting is done in-place on a copy

// ============================================

function bubbleSortBrute(nums) {
  const arr = nums.slice(); // work on a copy so function is independently runnable
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// ============================================

// Approach 2: Optimized Bubble Sort (early-exit)
// Formula/Logic: Same adjacent-swap logic, but track whether any swap happened.
// - On each pass, if no swaps occur the array is already sorted and we stop early
// - This can reduce work for nearly-sorted inputs
// Time complexity: O(n^2) worst-case, O(n) best-case when already sorted (one pass)
// Space complexity: O(1) because sorting is done in-place on a copy

// ============================================

function bubbleSortOptimized(nums) {
  const arr = nums.slice();
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // array is sorted
  }
  return arr;
}

// ============================================
// Best Approach: Optimized Bubble Sort
// Why: Early-exit avoids unnecessary passes for already/near-sorted arrays.
// Time complexity: O(n^2) worst-case, O(n) best-case. Space complexity: O(1).
// Use case: Educational/simple datasets or when stability and in-place sorting required.
// ============================================

// Quick sanity checks
console.log(bubbleSortBrute([40, 10, 30, 20])); // [10, 20, 30, 40]
console.log(bubbleSortOptimized([40, 10, 30, 20])); // [10, 20, 30, 40]
