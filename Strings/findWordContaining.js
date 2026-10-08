// Problem: Given an array of strings and a target character, return the indices of all words that contain that character at least once.
//
// Example:
// words = ["leet", "code", "lesson"]
// x = "e"
// Result: [0, 1, 2]
//
// LeetCode reference:
// - Problem #2942: Find Words Containing Character
// - Link: https://leetcode.com/problems/find-words-containing-character/
// Note: Approach 1 below is the accepted solution because it preserves the original working logic and directly scans each word until a match is found.

// ============================================

// Approach 1: Direct character scan
// Formula/Logic: scan each word from left to right and record the index as soon as the target character appears.
// - iterate through each word in the array
// - inspect each character until the target is found
// - push the current index once a match is found, then stop checking that word
// Time complexity: O(n * m) because in the worst case each of n words is scanned across m characters.
// Space complexity: O(k) because the answer stores up to k matched indices.

// ============================================

function findWordContaining(words, x) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    for (let s of words[i]) {
      if (s === x) {
        ans.push(i);
        break;
      }
    }
  }
  return ans;
}

// ============================================

// ============================================

// Approach 2: Built-in string membership check
// Formula/Logic: use the string includes method to test whether each word contains the target character without manual iteration.
// - iterate over each word by index
// - call `includes(x)` on the current word
// - add the index to the answer when the method returns true
// Time complexity: O(n * m) because each includes check may inspect up to m characters in the worst case.
// Space complexity: O(k) because the result stores each matching index once.

// ============================================

function findWordContainingWithIncludes(words, x) {
  const ans = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      ans.push(i);
    }
  }

  return ans;
}

// ============================================

// Best Approach: Approach 1 is the best choice here because it preserves the user's original working solution and keeps the logic explicit, while still being optimal for the problem's straightforward scan-based requirements. Approach 2 is a cleaner equivalent alternative, but it adds a built-in method rather than keeping the simplest direct logic first.
