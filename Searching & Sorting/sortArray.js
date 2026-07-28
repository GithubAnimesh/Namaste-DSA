// Problem: Sort an array of integers in nondecreasing order.
//
// Example:
// Input: nums = [5, 2, 3, 1]
// Result: [1, 2, 3, 5]
//
// LeetCode reference:
// - Problem #912: Sort an Array
// - Link: https://leetcode.com/problems/sort-an-array/
// Note: Approach 2 below is the accepted/optimal solution (merge sort guarantees O(n log n) time and stable ordering).

// ============================================

// Approach 1: Bubble sort
// Formula/Logic: Repeatedly swap adjacent elements when they are out of order until the entire array is sorted.
// - Compare each pair of neighboring values.
// - Swap them when the left value is larger than the right value.
// - Repeat passes until a full pass makes no swaps.
// Time complexity: O(n^2) because each pass can scan the array and there can be up to n passes.
// Space complexity: O(1) because the sorting is done in place with only a temporary swap variable.

// ============================================

function bubbleSort(nums) {
  const result = [...nums];

  for (let i = 0; i < result.length; i++) {
    let swapped = false;

    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return result;
}

// ============================================

// Approach 2: Merge sort
// Formula/Logic: Split the array into halves, sort each half recursively, and merge the two sorted halves back together.
// - Divide the array into left and right halves until each part has one element.
// - Recursively sort both halves.
// - Merge the two sorted halves by comparing the current values from each side.
// Time complexity: O(n log n) because each level merges all elements once and there are log n levels.
// Space complexity: O(n) because the merged array and recursive calls require additional storage.

// ============================================

function mergeSort(nums) {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }

  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;
}

function sortArray(nums) {
  return mergeSort([...nums]);
}

const example = [5, 2, 3, 1];
console.log(sortArray(example));
console.log(bubbleSort(example));

// ============================================
// Best Approach: Merge sort
// Why: It provides the best worst-case performance for general sorting while keeping the logic easy to reason about.
// Time complexity: O(n log n), Space complexity: O(n)
// Use case: Use this approach in interviews and production code when you need reliable performance for large unsorted datasets.
// ============================================

// to avoid multiple while loop we use below code.
function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  return [...merged, ...left.slice(i), ...right.slice(j)];
}
