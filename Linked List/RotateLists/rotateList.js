// Problem: Rotate a singly linked list to the right by k positions so the tail nodes move to the front.
//
// Example:
// Input: head = [1,2,3,4,5], k = 2
// Result: [3,4,5,1,2]
//
// LeetCode reference:
// - Problem #61: Rotate List
// - Link: https://leetcode.com/problems/rotate-list/
// Note: Approach 1 below is the accepted/optimal solution because it uses the list length to reduce k, then reconnects the tail to the head at the exact rotation point in O(n) time and O(1) extra space.
//
// Topic Definition: A singly linked list is a chain of nodes where each node stores a value and a pointer to the next node. Rotation is a common linked-list operation that moves the tail to the front by a chosen offset, usually without creating a new data structure.
// Key Characteristics:
// - Traversal is linear because each node must be visited in order.
// - Rewiring pointers is constant-time once the target nodes are found.
// - Rotations can be modeled by identifying the node before the new head and reconnecting the old tail to the original head.
// Real-world Example: Rotating a playlist or queue lets the next item start from a different position without rebuilding the entire collection.
// Basic Code Example:
// const head = { value: 1, next: { value: 2, next: null } };
// const rotated = rotateList(head, 1);
// console.log(rotated.value); // 2

// ============================================

// Approach 1: Length-based rotation with tail reconnection
// Formula/Logic: k = k % length, then break the list right before the new head and reconnect the old tail to the original head.
// - Count the nodes to find the list length and reduce k to its effective rotation count.
// - Advance the fast pointer by k nodes and walk both pointers until the fast pointer reaches the tail.
// - Save the node that will become the new head, cut the list there, and reconnect the old tail to the original head.
// Time complexity: O(n) because the list is traversed a constant number of times.
// Space complexity: O(1) because no extra data structure is built beyond a few pointers.

// ============================================

function rotateList(head, k) {
  if (!head || !head.next || k === 0) return head;

  let length = 0;
  let curr = head;

  while (curr) {
    curr = curr.next;
    length++;
  }

  // Reduce k to its effective rotation count because a full-length turn returns the list to its original order.
  k = k % length;
  if (k === 0) return head;

  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  const newHead = slow.next;
  slow.next = null;
  fast.next = head;

  return newHead;
}

// ============================================
// Best Approach: Length-based rotation with tail reconnection
// Why: It is the cleanest solution for singly linked lists because it minimizes pointer work, uses O(1) extra space, and handles large k naturally by reducing it modulo the list length.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Use this when the input is a linked list and you need a correct rotation without extra memory.
// ============================================

