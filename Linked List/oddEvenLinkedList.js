// Problem: Rearrange a singly linked list so that all odd-indexed nodes appear first, followed by even-indexed nodes.
//
// Example:
// Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
// Result: 1 -> 3 -> 5 -> 2 -> 4 -> null
//
// LeetCode reference:
// - Problem #328: Odd Even Linked List
// - Link: https://leetcode.com/problems/odd-even-linked-list/
// Note: Approach 1 below is the accepted/optimal solution (it splits the list into odd and even chains and reconnects them in one pass without extra storage).

// ============================================

// Approach 1: Split and reconnect
// Formula/Logic: Keep separate pointers for the odd and even node chains, then attach the even chain to the end of the odd chain.
// - Initialize odd and even pointers to the first and second nodes, keeping the head of the even chain for later reconnection.
// - Advance both pointers by two positions so original relative order remains intact within each parity group.
// - Once traversal ends, connect the tail of the odd chain to the head of the even chain.
// Time complexity: O(n) because each node is visited once.
// Space complexity: O(1) because only a constant number of pointers are used.

// ============================================

function oddEvenList(head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let evenStart = even;
  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenStart;
  return head;
}

// ============================================

// Approach 2: Dummy-head partition
// Formula/Logic: Build two separate linked lists with dummy heads, then stitch the even chain after the odd chain.
// - Create dummy nodes for the odd and even chains and keep tails for each one.
// - Traverse the original list, appending each node to the correct chain based on its index parity.
// - After traversal, connect the odd list tail to the even list head and null-terminate the even list.
// Time complexity: O(n) because every node is visited exactly once.
// Space complexity: O(1) because only a fixed number of pointers are maintained.

// ============================================

function oddEvenListWithDummy(head) {
  if (!head || !head.next) return head;

  const oddDummy = { val: 0, next: null };
  const evenDummy = { val: 0, next: null };

  let oddTail = oddDummy;
  let evenTail = evenDummy;
  let current = head;
  let isOdd = true;

  while (current) {
    if (isOdd) {
      oddTail.next = current;
      oddTail = current;
    } else {
      evenTail.next = current;
      evenTail = current;
    }

    current = current.next;
    isOdd = !isOdd;
  }

  oddTail.next = evenDummy.next;
  evenTail.next = null;
  return oddDummy.next;
}

// ============================================
// Best Approach: Split and reconnect
// Why: This is optimal because it preserves order, runs in a single traversal, and uses constant extra space.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Use this pattern in interviews and production code whenever a linked list must be partitioned by index parity while keeping order and avoiding extra memory.
// ============================================
