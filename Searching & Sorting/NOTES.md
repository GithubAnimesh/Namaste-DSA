# Searching & Sorting

## Definition

Searching is the process of finding a specific element in a collection by comparing it against a set of values. Sorting arranges elements in a specific order (ascending, descending, or custom). These are foundational techniques used in almost every algorithm—efficient searching and sorting directly impact overall program performance.

## Key Characteristics

- **Searching**: Linear scan, binary search, or hash-based lookup; varies by data structure and ordering
- **Sorting**: In-place, stable/unstable algorithms; trade-offs between time complexity and space usage
- **Performance critical**: Small improvements in O(n) vs O(log n) multiply across billions of operations
- **Foundation for interviews**: Nearly every technical interview includes sorting or searching problems

## Real-world Example

E-commerce platforms use searching to filter products by price/category (linear for unsorted data, binary for sorted ranges) and sorting to display results by rating, price, or relevance. Database indexes use sorting and binary search for fast queries.

## Basic Example

### Linear Search

```javascript
// O(n) — scans each element until found
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1; // not found
}

console.log(linearSearch([10, 20, 30, 40], 30)); // 2
```

### Binary Search (requires sorted array)

```javascript
// O(log n) — eliminates half of remaining elements per iteration
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50], 30)); // 2
```

### Bubble Sort

```javascript
// O(n²) — repeatedly swap adjacent elements if out of order
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
      }
    }
  }
  return arr;
}

console.log(bubbleSort([40, 10, 30, 20])); // [10, 20, 30, 40]
```
