// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order.
// The integer m is the number of valid elements in nums1, and n is the number of elements in nums2.
// Merge nums1 and nums2 into a single sorted array in nums1.

// Example:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3
// Result: nums1 becomes [1,2,2,3,5,6]

// LeetCode reference:
// - Problem: https://leetcode.com/problems/merge-sorted-array/
// - Submission/example: https://leetcode.com/problems/merge-sorted-array/submissions/2055165212/
// Note: Approach 3 below implements the in-place solution (O(m + n) time, O(1) extra space).

// Approach 1: brute-force merge and sort
// - Create a new array with nums1 and nums2 values
// - Remove placeholder zeros from nums1 before sorting
// - Sort the combined values
// Time complexity: O((m+n) log(m+n)) because of sort
// Space complexity: O(m+n) extra space for the combined array
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
function mergeSortArray(nums1, nums2) {
  let merged = [...nums1, ...nums2];
  let noZero = merged.filter((elem) => elem !== 0);
  return noZero.sort((a, b) => a - b);
}

mergeSortArray(nums1, nums2);

// Approach 2: merge with an extra copy of nums1's valid portion
// - Copy the first m values of nums1 into nums1Copy
// - Merge nums1Copy and nums2 into nums1 from the front
// - This keeps the relative order of sorted arrays
// Time complexity: O(m + n)
// Space complexity: O(m) extra space for nums1Copy
function mergeSortArray2(nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] <= nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
}

// Approach 3: in-place merge from the end (best for this problem)
// - Start writing from the end of nums1 to avoid overwriting valid values
// - Compare the largest remaining values from nums1 and nums2
// - Write the larger one at the current end position
// Time complexity: O(m + n)
// Space complexity: O(1) extra space
function mergeSortArray3(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  if (p2 < 0) return;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
}
