// Problem: Determine whether a singly linked list reads the same forwards and backwards.
//
// Example:
// head = [1,2,2,1]
// Result: true
//
// LeetCode reference:
// - Problem #234: Palindrome Linked List
// - Link: https://leetcode.com/problems/palindrome-linked-list/
// Note: Approach 2 below is the accepted/optimal solution (O(n) time, O(1) extra space) because it reverses the second half in-place.

// ============================================

// Approach 1: Array comparison
// Formula/Logic: Collect node values into an array and check symmetric indices.
// - Traverse the list and push each `val` into an array `vals`.
// - Use two indices `i` and `j` to compare `vals[i]` and `vals[j]` moving inward.
// - If any pair mismatches return false; otherwise true.
// Time complexity: O(n) because we traverse the list once to build `vals` and once to compare.
// Space complexity: O(n) because we store all node values in an array.

function isPalindrome_Array(head) {
  let cur = head;
  const vals = [];
  while (cur) {
    vals.push(cur.val);
    cur = cur.next;
  }

  let i = 0,
    j = vals.length - 1;
  while (i < j) {
    if (vals[i] !== vals[j]) return false;
    i++;
    j--;
  }
  return true;
}

// ============================================

// Approach 2: Reverse second half (fast/slow) — Optimal
// Formula/Logic: Find mid with slow/fast pointers, reverse the second half, compare halves, then restore.
// - Use slow/fast pointers to locate the midpoint (slow stops at first half end).
// - Reverse the list starting from `slow.next` to get the second half reversed.
// - Compare nodes from head and from reversed second half; if any mismatch, not palindrome.
// - (Optional) Restore the original list by re-reversing the second half.
// Time complexity: O(n) because each step (find middle, reverse, compare) is linear.
// Space complexity: O(1) because we only use a few pointers.

function reverseList(node) {
  let prev = null;
  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
}

function isPalindrome_Reverse(head) {
  if (!head || !head.next) return true;

  let slow = head,
    fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const secondStart = reverseList(slow.next);

  let p1 = head,
    p2 = secondStart;
  let isPalin = true;
  while (p2) {
    if (p1.val !== p2.val) {
      isPalin = false;
      break;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  // restore
  slow.next = reverseList(secondStart);

  return isPalin;
}
