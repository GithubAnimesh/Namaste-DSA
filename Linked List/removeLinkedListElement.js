// Problem: Remove all nodes from a linked list that have a specific value.
// Return the modified list, handling the case where the head itself must be removed.
//
// Example:
// head = 1 → 2 → 6 → 3 → 4 → 5 → 6, val = 6
// Result: 1 → 2 → 3 → 4 → 5
//
// LeetCode reference:
// - Problem #203: Remove Linked List Elements
// - Link: https://leetcode.com/problems/remove-linked-list-elements/
// Note: Approach 1 (Two-Pass) is the accepted solution (O(n) time, O(1) space).

// ============================================

// Approach 1: Two-Pass Strategy (Handle Head Separately, Then Traverse Body)
// Formula/Logic: First remove all matching nodes from the head, then iterate through
// the rest of the list and remove matching nodes by updating pointers (cur.next = cur.next.next).
// - Remove all matching head nodes by advancing head pointer until finding non-match
// - Iterate through remaining list with cur pointer, skipping matching nodes via pointer update
// - Only advance cur when node doesn't match to avoid infinite loop on consecutive matches
// Time complexity: O(n) because we visit each node exactly once, regardless of matches.
// Space complexity: O(1) because we only use a constant number of pointers, no extra structures.

// ============================================

function removeLinkedListElement(head, val) {
  // Step 1: Remove all matching nodes from the head
  while (head && head.val === val) {
    head = head.next;
  }

  // If entire list was removed, return null
  if (!head) return head;

  // Step 2: Remove matching nodes from the rest of the list
  let cur = head;
  while (cur.next) {
    if (cur.next.val === val) {
      // Skip the next node by pointing to the node after it
      cur.next = cur.next.next;
    } else {
      // Move forward only when current node doesn't need removal
      cur = cur.next;
    }
  }

  return head;
}

// ============================================

// ============================================

// Approach 2: Sentinel Node Strategy (Unified Treatment for Head and Body)
// Formula/Logic: Create a dummy sentinel node pointing to the head. This allows treating
// the head removal the same way as any other node removal, simplifying the logic.
// - Create a sentinel node (dummy) pointing to head
// - Traverse using prev pointer to check prev.next for matches
// - Remove by updating prev.next = prev.next.next, same logic for all positions
// - Return sentinel.next as the new head (which handles empty list case)
// Time complexity: O(n) because we visit each node exactly once.
// Space complexity: O(1) because we only create one dummy node, which is constant space.

// ============================================

function removeLinkedListElementSentinel(head, val) {
  // Create sentinel node to simplify head removal handling
  let sentinel = new ListNode(0);
  sentinel.next = head;

  let prev = sentinel;
  while (prev.next) {
    if (prev.next.val === val) {
      // Remove the next node by skipping it
      prev.next = prev.next.next;
    } else {
      // Move forward to the next node
      prev = prev.next;
    }
  }

  return sentinel.next;
}

// ============================================

// ============================================
// Best Approach: Approach 2 - Sentinel Node Strategy
// Why: Cleaner logic with unified node removal for all positions (no special head handling), easier to understand and less error-prone.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Interview optimal solution. Production-grade code for linked list element removal. Better for code clarity and maintainability.
// ============================================
