function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let m = 0;
  let n = 0;
  let final = [];
  for (let i = 0; i < left.length + right.length; i++) {
    if (n >= right.length || (m < left.length && left[m] <= right[n])) {
      final[i] = left[m];
      m++;
    } else {
      final[i] = right[n];
      n++;
    }
  }
  return final;
}

const arr = [12, 9, 21, 5, 18, 3, 11];
console.log(mergeSort(arr));
