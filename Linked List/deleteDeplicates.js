// Problem: Given the head of a sorted singly linked list, remove every duplicate
// value so that each value appears only once while preserving the original order.
// Return the head of the cleaned linked list.
//
// Example:
// Input: head = [1,1,2,3,3]
// Result: [1,2,3]
//
// LeetCode reference:
// - Problem #83: Remove Duplicates from Sorted List
// - Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// Note: Approach 2 is the accepted/optimal solution because it uses the sorted order
// to remove duplicates in one pass with constant extra space.

// ============================================

// Approach 1: Track seen values with a Set
// Formula/Logic: Keep a value when it has not been seen; otherwise bypass its node.
// - Start with the head node and an empty Set of values.
// - Record each first occurrence in the Set.
// - Bypass a node when its value already exists in the Set.
// - Advance through the list and return the original head.
// Time complexity: O(n) because each node is visited once.
// Space complexity: O(n) because the Set can store every distinct value.

// ============================================

function deleteDuplicateWithSet(head) {
  const seen = new Set();
  let current = head;
  let previous = null;

  while (current) {
    if (seen.has(current.val)) {
      previous.next = current.next;
    } else {
      seen.add(current.val);
      previous = current;
    }
    current = current.next;
  }

  return head;
}

// ============================================

// Approach 2: Compare adjacent nodes in the sorted list
// Formula/Logic: In a sorted list, duplicate values are adjacent, so remove current.next when current.val equals current.next.val.
// - Start at the first node and inspect it with its next node.
// - Bypass the next node when both values are equal.
// - Otherwise move to the next distinct node.
// - Continue until the current node or its next node is absent.
// Time complexity: O(n) because the pointer moves through the list at most once.
// Space complexity: O(1) because only one traversal pointer is used.

// ============================================

function deleteDuplicate(head) {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

// ============================================
// Best Approach: Compare adjacent nodes in the sorted list
// Why: It exploits the sorted order and removes duplicates in-place without auxiliary storage.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Preferred in interviews and production when a sorted linked list must be deduplicated in-place.
// ============================================
