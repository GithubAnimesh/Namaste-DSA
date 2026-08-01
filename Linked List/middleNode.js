// Problem: Return the middle node of a singly linked list.
// If there are two middle nodes, return the second middle node.
//
// Example:
// Input: [1,2,3,4,5]
// Output: Node with value 3
//
// Example:
// Input: [1,2,3,4,5,6]
// Output: Node with value 4
//
// LeetCode reference:
// - Problem #876: Middle of the Linked List
// - Link: https://leetcode.com/problems/middle-of-the-linked-list/
//
// Note: Approach 2 is the preferred solution because it uses constant space.

// ============================================
// Approach 1: Array-based build-up
// Formula/Logic: Traverse the list and collect node references in an array.
// - Push each node reference while iterating through the list.
// - Return the node at index Math.floor(nodes.length / 2).
// Time complexity: O(n) because the list is traversed once.
// Space complexity: O(n) because node references are stored in an array.
// ============================================

function middleNode(linkedList) {
  let nodes = [];
  let cur = linkedList.head;

  while (cur != null) {
    nodes.push(cur);
    cur = cur.next;
  }

  return nodes[Math.floor(nodes.length / 2)];
}

// ============================================
// Approach 2: Slow and fast pointer
// Formula/Logic: Move slow one step and fast two steps in each iteration.
// - When fast reaches the end, slow will be at the middle node.
// - This correctly returns the second middle node for even-length lists.
// Time complexity: O(n) because the list is traversed once.
// Space complexity: O(1) because only two pointers are used.
// ============================================

function MiddleLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
