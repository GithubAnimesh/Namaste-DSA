## Recursion — Overview

Recursion is a way to solve a problem by letting a function call itself on smaller or simpler versions of the same problem.

Each recursive solution has two essential parts:

- **Base case**: a condition where the function returns a result without calling itself again. This stops the recursion.
- **Recursive case**: the part where the function calls itself with a smaller input and moves closer to the base case.

Why recursion is useful:

- It makes some problems easier to express, especially tree and divide-and-conquer problems.
- It often matches the mathematical definition of the problem.
- It helps you think in terms of smaller subproblems.

Why recursion can be tricky:

- Each function call uses stack memory. Too many calls can cause a stack overflow.
- If the base case is missing or incorrect, recursion never stops.
- Some recursive solutions are slower than iterative ones unless you optimize them.

## How recursion works

When a recursive function runs, each call is stored on the call stack with its own local variables. The function keeps calling itself until it reaches the base case. Then the calls return one by one.

Example trace for `factorial(4)`:

1. `factorial(4)` calls `factorial(3)`
2. `factorial(3)` calls `factorial(2)`
3. `factorial(2)` calls `factorial(1)`
4. `factorial(1)` returns `1` (base case)
5. `factorial(2)` returns `2 * 1 = 2`
6. `factorial(3)` returns `3 * 2 = 6`
7. `factorial(4)` returns `4 * 6 = 24`

## Recursion tree diagram

```mermaid
graph TD
  A[factorial(4)] --> B[factorial(3)]
  B --> C[factorial(2)]
  C --> D[factorial(1)]
  D --> E[return 1]
```

## Common recursion patterns

- **Linear recursion**: one recursive call per function invocation.
- **Tree recursion**: multiple recursive calls in one function invocation.
- **Tail recursion**: the recursive call is the last thing the function does.
- **Divide and conquer**: split the problem, solve each part recursively, then combine the results.

## Example 1: Factorial (linear recursion)

```javascript
function factorial(n) {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120
```

How it works:

- `factorial(5)` calls `factorial(4)`
- `factorial(4)` calls `factorial(3)`
- ... until `factorial(1)` returns `1`
- Then results multiply while the stack unwinds.

Complexity:

- Time: O(n)
- Space: O(n) because of the call stack

## Example 2: Sum of array elements

```javascript
function sumArray(arr, index = 0) {
  if (index === arr.length) return 0; // base case
  return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4])); // 10
```

## Example 3: Reverse a string

```javascript
function reverseString(s) {
  if (s === "") return ""; // base case
  return reverseString(s.slice(1)) + s[0];
}

console.log(reverseString("hello")); // "olleh"
```

## Example 4: Fibonacci numbers

### Naive recursion (tree recursion)

```javascript
function fib(n) {
  if (n <= 1) return n; // base case
  return fib(n - 1) + fib(n - 2); // recursive case
}

console.log(fib(6)); // 8
```

This version repeats work and has time complexity about O(2^n).

### Memoized recursion (dynamic programming)

```javascript
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log(fibMemo(50)); // fast
```

Memoization stores results so the function does not recalculate the same values again.

## Fibonacci recursion tree diagram

```mermaid
graph TD
  F6[fib(6)] --> F5[fib(5)]
  F6 --> F4[fib(4)]
  F5 --> F4b[fib(4)]
  F5 --> F3[fib(3)]
  F4 --> F3b[fib(3)]
  F4 --> F2[fib(2)]
```

## Example 5: Binary search (divide and conquer)

```javascript
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1; // base case: not found
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  }
  return binarySearch(arr, target, left, mid - 1);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
```

Complexity:

- Time: O(log n)
- Space: O(log n) due to recursion depth

## Tail recursion example

```javascript
function factorialTail(n, acc = 1) {
  if (n <= 1) return acc; // base case
  return factorialTail(n - 1, acc * n); // tail recursive call
}

console.log(factorialTail(5)); // 120
```

Tail recursion means the recursive call is the last action. Some languages can optimize it, but JavaScript engines do not always do this.

## Example 6: Generate subsets of an array

```javascript
function subsets(arr) {
  const result = [];

  function helper(index, current) {
    if (index === arr.length) {
      result.push([...current]);
      return;
    }

    // Exclude current element
    helper(index + 1, current);

    // Include current element
    current.push(arr[index]);
    helper(index + 1, current);
    current.pop();
  }

  helper(0, []);
  return result;
}

console.log(subsets([1, 2, 3]));
```

This is a tree recursion example. It generates all 2^n subsets.

## Recursion debugging tips

- Always write a base case first.
- Ensure each recursive call gets closer to the base case.
- Use simple inputs and trace the function by hand.
- Add `console.log` inside the function to see how arguments change.

## Common recursion rules

- Base case is required.
- Recursive case must make progress.
- Watch for repeated work in tree recursion.
- Use memoization when the same subproblem appears multiple times.

## Practice problems

1. Write `factorial(n)` and trace it for `n = 4`.
2. Sum numbers from `1` to `n` using recursion.
3. Reverse an array using recursion.
4. Write recursive `binarySearch`.
5. Generate all subsets of an array.
6. Implement recursive merge sort.
7. Solve Tower of Hanoi for small `n` and print moves.

## Study plan

- Start with simple linear recursion examples: factorial, sum, reverse string.
- Move to tree recursion examples: Fibonacci and subsets.
- Learn divide-and-conquer: binary search, merge sort.
- Practice memoization to optimize slow recursive solutions.

---

If you want, I can also add a separate JavaScript file for each example so you can run them directly.

Allways keep Base case in top of code when writing recursion.
When infinite recursion call its stack overfloew

function fun(num){
if(num == 0) return; // this is called base case
console.log(num);
num--;
fun(); // this is called recursive case
}
let num = 5;
fun(num);
