// Problem: Find the index of a target value in an array by examining each element sequentially
// until a match is found or the array is exhausted. This is the fundamental search technique.
//
// Example:
// arr = [10, 20, 30, 40, 50], target = 30
// Result: 2 (index of first occurrence)
//
// arr = [10, 20, 30, 40, 50], target = 99
// Result: -1 (not found)
//
// Reference: Linear Search (fundamental algorithm)
// Related concepts: See NOTES.md for Searching & Sorting topic overview
// Note: Approach 1 (Linear Search) is acceptable for unsorted arrays; Approach 2 (Binary Search) is optimal for sorted arrays and should be preferred when the array is pre-sorted.

// ============================================

// Approach 1: Linear/Sequential Search
// Formula/Logic: Compare target with each element sequentially; return index on match or -1 if exhausted.
// - Initialize a pointer at the start of the array
// - Iterate through each element from index 0 to length-1
// - Compare current element with target; if match, return the index immediately
// - If loop completes without finding target, return -1 (not found)
// Time complexity: O(n) because in the worst case, we examine every element in the array
// Space complexity: O(1) because we use only a constant amount of extra space (loop variable)

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Found at index i
    }
  }
  return -1; // Target not found
}

// ============================================

// ============================================

// Approach 2: Binary Search (Optimal for Sorted Arrays)
// Formula/Logic: Eliminate half of the remaining elements per iteration by comparing target to the middle element. Requires the array to be sorted.
// - Set left pointer at start (index 0) and right pointer at end (index length-1)
// - Calculate middle index: mid = Math.floor((left + right) / 2)
// - If arr[mid] equals target, return mid immediately
// - If arr[mid] < target, the target must be in the right half; move left = mid + 1
// - If arr[mid] > target, the target must be in the left half; move right = mid - 1
// - Repeat until left > right (search space exhausted); return -1 if not found
// Time complexity: O(log n) because we eliminate half the search space with each comparison, reducing the problem size exponentially
// Space complexity: O(1) because we only use left, right, and mid pointers (or O(log n) for recursive implementation due to call stack)

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found at index mid
    } else if (arr[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target not found
}

// ============================================

// ============================================
// Best Approach: Binary Search
// Why: O(log n) time complexity makes it exponentially faster than linear search for large sorted arrays (e.g., 1 million elements: ~20 comparisons vs ~500,000).
// Time complexity: O(log n), Space complexity: O(1)
// Use case: When data is sorted (or can be sorted once), binary search is the gold standard for searching. Used in database indexing, file systems, and any scenario where repeated searches justify an upfront sort. Always prefer binary search for pre-sorted data in interviews and production code.
// ============================================
