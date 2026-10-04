// Problem: Merge two sorted linked lists into one sorted list by reusing their nodes.
// Return the head of the merged list.
//
// Example:
// list1 = [1,2,4], list2 = [1,3,4]
// Result: [1,1,2,3,4,4]
//
// LeetCode reference:
// - Problem #21: Merge Two Sorted Lists
// - Link: https://leetcode.com/problems/merge-two-sorted-lists/
// Note: Approach 1 is the best approach because it handles both lists uniformly with a dummy head and uses O(1) extra space.

// ============================================

// Approach 1: Iterative merge with a dummy head
// Formula/Logic: Repeatedly attach the smaller current node; when one list ends, attach the other list's remaining nodes.
// - Create a dummy head and keep a separate tail pointer for the merged list.
// - Compare the current values and append the smaller node.
// - Advance the selected input list and the merged-list tail.
// - Attach the unprocessed remainder and return the node after the dummy head.
// Time complexity: O(n + m) because each node from both lists is visited at most once.
// Space complexity: O(1) extra space because existing nodes are relinked without allocating a result list.

// ============================================

function mergeTwoSortedLists(list1, list2) {
  const dummy = new ListNode();
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else {
      tail.next = list1;
      list1 = list1.next;
    }
    tail = tail.next;
  }

  tail.next = list1 || list2;
  return dummy.next;
}

// ============================================

// Approach 2: Select the initial head, then iteratively merge
// Formula/Logic: Choose the smaller first node as the result head, then append the smaller remaining node until one list is exhausted.
// - Return the other list immediately if either input list is empty.
// - Select the smaller first node as the merged-list head.
// - Repeatedly append the smaller current node and advance its input list.
// - Attach the remaining nodes and return the saved head.
// Time complexity: O(n + m) because each node is visited at most once.
// Space complexity: O(1) extra space because the algorithm only relinks the existing nodes.

// ============================================

function approch2(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let curr = null;
  if (l1.val < l2.val) {
    curr = l1;
    l1 = l1.next;
  } else {
    curr = l2;
    l2 = l2.next;
  }
  let start = curr;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return start;
}

// ============================================
// Best Approach: Approach 1 - Iterative merge with a dummy head
// Why: It has the same O(n + m) time and O(1) extra space as Approach 2, but avoids separate empty-list and initial-head cases.
// Time complexity: O(n + m), Space complexity: O(1) extra space
// Use case: Use this pattern when merging sorted linked lists in-place with straightforward pointer handling.
// ============================================
