// Problem: Reverse a singly linked list so the tail becomes the new head.
//
// Example:
// Input: head = [1,2,3,4,5]
// Result: [5,4,3,2,1]
//
// LeetCode reference:
// - Problem #206: Reverse Linked List
// - Link: https://leetcode.com/problems/reverse-linked-list/
// Note: Approach 1 is the accepted/optimal solution because it uses iterative reversal with constant space.

// ============================================
// Approach 1: Iterative pointer reversal
// Formula/Logic: Reverse next pointers one node at a time while tracking previous and current nodes.
// - Initialize prev to null and cur to head.
// - For each node, save cur.next, reverse cur.next to prev, then shift prev and cur forward.
// - Return prev when cur reaches null, which is the new head.
// Time complexity: O(n) because the list is traversed once.
// Space complexity: O(1) because only a few pointers are used.
// ============================================

function reverseList(head) {
  let prev = null;
  let cur = head;

  while (cur !== null) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  return prev;
}

// ============================================
// Approach 2: Recursive reversal
// Formula/Logic: Reverse the rest of the list recursively, then append the current node at the tail of the reversed sublist.
// - Base case returns head when list has 0 or 1 node.
// - Recurse on head.next to reverse the suffix.
// - Set head.next.next = head and head.next = null to reverse the current link.
// Time complexity: O(n) because each node is visited once.
// Space complexity: O(n) because recursion adds a call stack frame for each node.
// ============================================

function reverseListRecursive(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const reversedHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;

  return reversedHead;
}

// ============================================
// Best Approach: Iterative pointer reversal
// Why: It reverses the list in-place using constant extra space and one traversal.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Preferred in interviews and production when reversing a linked list efficiently.
// ============================================
