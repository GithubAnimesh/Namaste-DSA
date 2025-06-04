// Write a function which returns largest number from array.

function findLargest(arr) {
  let largest = -Infinity; // -Infinity it smallest number or we can set first index as largest arr[0].
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(`Largest number in array is ${largest}`);
}
const arr = [10, 3, 5, 2, 0, 7, 6, 9, 8, 21];
const arr2 = [-5, -9, -3];
findLargest(arr); // Largest number in array is 21
findLargest(arr2); // Largest number in array is -3
