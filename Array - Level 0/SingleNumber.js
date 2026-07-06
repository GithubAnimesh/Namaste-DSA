// Problem: Single Number (LeetCode #136)
// Given a non-empty array of integers `nums`, every element appears twice except for one.
// Find that single one that appears only once.
//
// Example:
// nums = [2, 2, 1]
// Output: 1
//
// LeetCode reference:
// - Problem #136: Single Number
// - Link: https://leetcode.com/problems/single-number/
//
// Approach 1: Hash table (counts)
// - Count occurrences using a map/object, then return the element with count 1.
// - Time: O(n), Space: O(n).

// Example input (uncomment to run):
// const nums = [2, 2, 1];

function singleNumber(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) hash[nums[i]] = 1;
    else hash[nums[i]]++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) return nums[i];
  }
}

// Approach 2 (recommended): Bitwise XOR
// - XOR of a number with itself is 0 and XOR with 0 is the number.
// - XORing all elements yields the single number because pairs cancel out.
// - Time: O(n), Space: O(1).
function singleNumberXor(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
}

// Example usage (uncomment to run):
// const nums = [2, 2, 1];
// console.log(singleNumber(nums));     // 1 (hash table)
// console.log(singleNumberXor(nums));  // 1 (XOR)
