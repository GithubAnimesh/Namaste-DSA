//26. Remove Duplicates from Sorted Array

//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// sorted in non-decreasing: it can have deplicate like [1, 2, 3, 3 , 4, 5, 5, 6]

// in-place means remove in original array only

// Approach 1 use two ponter mathod

var removeDuplicates = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// 📊 Time Complexity: O(n)
// Single loop over the array.

// 🧠 Space Complexity: O(1)
// No extra memory used, in-place.

// Approach 2-----------------------------------------------

function removeDuplicates() {
  let arr = [1, 2, 3, 3, 4, 5, 5, 6];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1); // remove duplicate
        j--; // adjust index after removal
      }
    }
  }
  console.log(arr); // [1, 2, 3, 4, 5, 6]
}
removeDuplicates();

// 📊 Time Complexity: O(n²)
// Because of the nested loop.

// 🧠 Space Complexity: O(1)
// Works in-place (modifies the original array), but inefficient due to repeated comparisons and shifts.
