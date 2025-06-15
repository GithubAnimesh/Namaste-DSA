//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Approach 1 use two ponter mathod
function removeElement(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      // Shift element to left if its not equal to val
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}

let arr = [3, 2, 2, 3];
let val = 3;

removeElement(arr, val);
