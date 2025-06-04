//Find the Second Largest Number in an Array

function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstLar = -Infinity;
  let secondLar = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLar) {
      secondLar = firstLar;
      firstLar = arr[i];
    } else if (arr[i] > secondLar && arr[i] != firstLar) {
      secondLar = arr[i];
    }
  }
  return secondLar;
}

const arr = [0, 9, 5, 2, 8, 7, 9];
Output: 8;

let res = secondLargest(arr);

console.log(res);
