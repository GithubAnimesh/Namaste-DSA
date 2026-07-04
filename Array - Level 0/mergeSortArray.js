//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

//Example 1:

//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Approach 1

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
function mergeSortArray(nums1, nums2) {
  let num = [...nums1, ...nums2];
  let noZero = num.filter((elem) => elem !== 0);
  return noZero.sort((a, b) => a - b);
}

mergeSortArray(nums1, nums2);

// Approach 2
