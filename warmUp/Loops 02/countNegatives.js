// Write a function that retun count of negative number from array.

function countNegatives() {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  console.log(`Total negative number in array is ${count}`);
}

let arr = [4, -9, -3, 5, -10, 1, -21];
countNegatives(arr);
