// Problem: Sort an array in ascending order using insertion sort.
//
// Example:
// Input: [7, 1, 5, 12, -10, 8, 4, 3, 2]
// Result: [-10, 1, 2, 3, 4, 5, 7, 8, 12]
//
// Note: No specific LeetCode problem reference was provided.
// Note: Approach 1 below is the accepted/optimal solution because it demonstrates the insertion sort algorithm directly.

// ============================================

// Approach 1: Insertion sort
// Formula/Logic: Build a sorted subarray on the left by inserting each element into its correct position.
// - Start with the second element and compare it against the sorted portion to its left.
// - Shift larger elements one position to the right until the insertion position is found.
// - Place the current element into the gap created by shifting.
// Time complexity: O(n²) because each element may require shifting through the sorted prefix.
// Space complexity: O(1) because sorting is done in place.

// ============================================

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let cur = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] > cur) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = cur;
  }

  return arr;
}

// ============================================
// Best Approach: Insertion sort
// Why: It is the standard in-place algorithm for this problem with minimal extra memory.
// Time complexity: O(n²), Space complexity: O(1)
// Use case: When you need a simple stable sort for small arrays or nearly sorted data.
// ============================================

console.log(insertionSort([7, 1, 5, 12, -10, 8, 4, 3, 2]));
// [-10, 1, 2, 3, 4, 5, 7, 8, 12]
