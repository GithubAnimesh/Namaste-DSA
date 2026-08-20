// Problem: Remove the node that is n positions from the end of a singly linked list.
// Return the head of the list after the node is removed.
// The list may require removing its first node, so the previous node may be a sentinel.
//
// Example:
// Input: head = [1,2,3,4,5], n = 2
// Result: [1,2,3,5]
//
// LeetCode reference:
// - Problem #19: Remove Nth Node From End of List
// - Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Note: Approach 2 is the accepted/optimal solution because it finds the previous node in one pass with constant space.

// ============================================

// Approach 1: Count length, then remove by position
// Formula/Logic: The node before the target is at index length - n - 1 from the original head.
// - Traverse the list once to count its nodes.
// - Start from a sentinel node before head so deleting head uses the same link update.
// - Move to the node immediately before the target position.
// - Bypass the target node and return sentinel.next.
// Time complexity: O(n) because the list is traversed to count and locate the target.
// Space complexity: O(1) because only a sentinel and traversal pointer are allocated.

// ============================================

function removeNthFromEndByLength(head, n) {
  const sentinel = new ListNode(0);
  sentinel.next = head;
  let length = 0;

  while (head) {
    head = head.next;
    length++;
  }

  const prevPos = length - n;
  let prev = sentinel;
  for (let index = 0; index < prevPos; index++) {
    prev = prev.next;
  }

  prev.next = prev.next.next;
  return sentinel.next;
}

// ============================================

// Approach 2: One-pass two pointers with a sentinel
// Formula/Logic: Keep fast exactly n nodes ahead of slow; when fast reaches the tail, slow is before the target.
// - Place slow and fast at the sentinel node.
// - Move fast n + 1 steps to create a gap that includes the sentinel.
// - Advance both pointers until fast reaches null.
// - Bypass slow.next and return sentinel.next.
// Time complexity: O(n) because both pointers together make one traversal of the list.
// Space complexity: O(1) because the algorithm uses only two pointers and one sentinel node.

// ============================================

function removeNthFromEnd(head, n) {
  const sentinel = new ListNode(0);
  sentinel.next = head;
  let slow = sentinel;
  let fast = sentinel;

  for (let step = 0; step <= n; step++) {
    fast = fast.next;
  }

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return sentinel.next;
}

// ============================================
// Best Approach: Two pointers with a sentinel
// Why: It removes the target in one pass and handles deleting the head without a special case.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Preferred in interviews and production when a singly linked list must be edited in-place.
// ============================================
