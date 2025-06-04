// Write a function which returns Smallest number from array.

function findSmallest(arr) {
  let Smallest = Infinity; // Infinity it largest number.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < Smallest) {
      Smallest = arr[i];
    }
  }
  console.log(`Smallest number in array is ${Smallest}`);
}
const arr = [10, 3, 5, 2, 0, 7, 6, 9, 8, 21];
const arr2 = [-5, -9, -3];
findSmallest(arr); // Smallest number in array is 21
findSmallest(arr2); // Smallest number in array is -3
