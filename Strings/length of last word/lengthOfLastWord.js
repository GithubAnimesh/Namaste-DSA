// Problem: Return the number of characters in the final word of a string,
// where words are separated by spaces and the string may have extra spaces.
//
// Example:
// s = "   fly me   to   the moon  "
// Result: 4
//
// LeetCode reference:
// - Problem #58: Length of Last Word
// - Link: https://leetcode.com/problems/length-of-last-word/
//
// Note: Approach 3 is optimal because it scans backward once using O(1) space.

// ============================================

// Approach 1: Trim and split into characters (contains a logical mistake)
// Formula/Logic: The last character's length is not the length of the last
// word; this returns 1 when trimmed input is non-empty and throws for all spaces.
// - Trim whitespace from both ends.
// - Split the string into individual characters.
// - Read the length of the final character.
// - This does not produce the required last-word length.
// Time complexity: O(n) because trim and split process the string.
// Space complexity: O(n) because split creates an array of characters.

// ============================================

// use js built in mathods
function approch1(s) {
  s = s.trim();
  s = s.split("");
  return s[s.length - 1].length;
}

// ============================================

// Approach 2: Skip trailing spaces, then count backward
// Formula/Logic: First move to the final word, then count its consecutive
// non-space characters.
// - Start at the end of the string.
// - Skip spaces after the final word.
// - Count characters moving backward until a space or the start is reached.
// - Return the count.
// Time complexity: O(n) because the two scans together visit at most n chars.
// Space complexity: O(1) because only an index and a counter are used.

// ============================================

// using traditional multi loop
function approch2(s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] === " ") {
      n--;
    } else {
      break;
    }
  }
  let count = 0;
  while (n >= 0) {
    if (s[n] != " ") {
      n--;
      count++;
    } else {
      break;
    }
  }
  return count;
}

// ============================================

// Approach 3: Single backward scan
// Formula/Logic: Ignore spaces until the last word starts, then count until
// the preceding space; count === 0 indicates trailing spaces are being skipped.
// - Start from the final character.
// - Continue past trailing spaces while the count is zero.
// - Count the last word's characters.
// - Stop at the first preceding space and return the count.
// Time complexity: O(n) because each character is checked at most once.
// Space complexity: O(1) because only an index and a counter are used.

// ============================================

// using traditional single loop
function lengthOfLastWord(s) {
  let count = 0;
  let n = s.length - 1;

  for (let x = n; x >= 0; x--) {
    if (s[x] === " " && count === 0) {
      continue;
    }

    if (s[x] === " ") {
      break;
    }

    count++;
  }

  return count;
}

// ============================================
// Best Approach: Single backward scan (Approach 3)
// Why: It handles trailing spaces in one pass without allocating extra strings
// or arrays.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Prefer this approach when solving the problem with minimal memory.
// ============================================
