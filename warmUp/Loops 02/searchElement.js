// Write a function that search for a element in array and return index if index not present return -1.

function searchElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      console.log(`Index of ${num} is ${i}`);
    }
  }
  console.log(`${num} not available in array`, -1);
}
let arr = [4, 9, 3, 5, 10, 1, 21];
searchElement(arr, 2);
