// Problem: Sort an array of numbers into non-decreasing order using selection sort.
//
// Example:
// Input: [7, 1, 5, 4, 3, 2]
// Result: [1, 2, 3, 4, 5, 7]
//
// LeetCode reference:
// - Problem #: N/A
// - Link: N/A
// Note: Approach 2 (built-in sort) is the accepted/optimal choice for general use
// in JavaScript because it leverages the engine's O(n log n) implementation.

// Related topic: Searching & Sorting — see NOTES.md for concept overview

// ============================================

// Approach 1: In-place Selection Sort (Brute-force)
// Formula/Logic: Repeatedly select the minimum element from the unsorted
// portion and swap it into the next position of the sorted prefix.
// - Maintain a boundary between sorted prefix [0..i-1] and unsorted suffix [i..n-1]
// - For each i, scan the suffix to find the minimum index
// - Swap the minimum into position i
// Time complexity: O(n^2) because of nested scanning for each i
// Space complexity: O(1) because swaps are in-place on a single array

// ============================================
// #sym:selectionSortInPlace
// ============================================

function selectionSortInPlace(nums) {
  const arr = nums.slice(); // operate on a copy so function is independently runnable
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

// Original user-style in-place API preserved:
function selectionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

// ============================================

// Approach 2: Built-in `Array.prototype.sort` (Engine-optimized)
// Formula/Logic: Delegate sorting to the JavaScript engine which typically
// implements an efficient O(n log n) algorithm (e.g., Timsort). Use a numeric
// comparator to ensure numeric order.
// - Make a shallow copy and call `sort((a,b)=>a-b)`
// Time complexity: O(n log n) average/worst depending on engine; better than O(n^2)
// Space complexity: O(log n) to O(n) depending on engine implementation and stability

// ============================================

function selectionSortBuiltin(nums) {
  return nums.slice().sort((a, b) => a - b);
}

// ============================================
// Best Approach: Built-in `sort`
// Why: Uses the engine's optimized sorting algorithm (O(n log n)), which
// offers much better performance for larger inputs; use selectionSortInPlace
// only for educational purposes or when you must demonstrate the algorithm.
// Time complexity: O(n log n) average/worst (engine-dependent), Space complexity: engine-dependent
// Use case: Use built-in `sort` in production; use selection sort for teaching or specialized constraints.
// ============================================

// Quick sanity checks
console.log(selectionSortInPlace([7, 1, 5, 4, 3, 2])); // [1, 2, 3, 4, 5, 7]
console.log(selectionSortBuiltin([7, 1, 5, 4, 3, 2])); // [1, 2, 3, 4, 5, 7]
// Preserve original usage
let arr = [7, 1, 5, 4, 3, 2];
let n = arr.length;
console.log(selectionSort(arr, n)); // [1,2,3,4,5,7]
