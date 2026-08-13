// Problem: Determine whether a singly-linked list contains a cycle (loop).
//
// Example:
// head -> [3] -> [2] -> [0] -> [-4]
//           ^---------------------|
// Result: true (there is a cycle back to node with value 2)
//
// LeetCode reference:
// - Problem #141: Linked List Cycle
// - Link: https://leetcode.com/problems/linked-list-cycle/
// Note: Approach 2 (Floyd's Tortoise and Hare) below is the accepted/optimal solution (O(n) time, O(1) space).

// ============================================

// Approach 1: Set-based detection (brute-force/straightforward)
// Formula/Logic: Track visited nodes using a set and detect a repeated node reference.
// - Iterate through the list node by node.
// - If the current node reference is already in the set, a cycle exists.
// - Otherwise, add the node to the set and continue.
// Time complexity: O(n) because each node is visited at most once and set operations are O(1) on average.
// Space complexity: O(n) because we store visited node references in a set.

function linkedListCycle(head) {
  const visited = new Set();
  let cur = head;
  while (cur !== null) {
    if (visited.has(cur)) return true;
    visited.add(cur);
    cur = cur.next;
  }
  return false;
}

// ============================================

// Approach 2: Floyd's Tortoise and Hare (optimal)
// Formula/Logic: Use two pointers moving at different speeds; if they meet, a cycle exists.
// - Initialize `slow` at head and `fast` at head.
// - Move `slow` one step and `fast` two steps per iteration.
// - If `fast` reaches null, list has no cycle; if `slow === fast` (after moving), there is a cycle.
// Time complexity: O(n) because pointers advance through the list and meet within O(n) steps.
// Space complexity: O(1) because only two pointers are used.

function linkedListCycleFloyd(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// ============================================

// Best Approach: Floyd's Tortoise and Hare
// Why: Detects a cycle in linear time with constant extra space.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Preferred in interviews and production when memory is constrained.
// ============================================

module.exports = {
  linkedListCycle,
  linkedListCycleFloyd,
};
