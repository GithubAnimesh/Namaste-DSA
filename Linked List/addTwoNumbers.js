// Problem: Add two non-empty linked lists that represent decimal numbers in reverse order, where each node stores a single digit, and return the sum as a new linked list.
//
// Example:
// l1 = [2,4,3], l2 = [5,6,4]
// Result: [7,0,8]
//
// LeetCode reference:
// - Problem #2: Add Two Numbers
// - Link: https://leetcode.com/problems/add-two-numbers/
// Note: Approach 2 below is the accepted/optimal solution because it keeps the carry logic explicit and makes the output list append operation cleaner than the original version.

// ============================================

// Approach 1: Carry-based addition with a result tail pointer
// Formula/Logic: sum = (l1.val or 0) + (l2.val or 0) + carry; carry = sum / 10; digit = sum % 10.
// - Initialize an answer list and a tail pointer so each computed digit can be appended in order.
// - Keep adding digits while either list still has nodes or there is a pending carry.
// - Store the generated digit in a new node, move the tail forward, and advance both input pointers.
// Time complexity: O(max(n, m)) because each node is processed once and the loop exits after the final carry.
// Space complexity: O(max(n, m)) because the output list contains one new node for each digit in the sum.

// ============================================

function addTwoNumbers(l1, l2) {
  let ans = new NodeList();
  let ansHead = ans;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    let newNode = new NodeList(digit);
    ans.next = newNode;
    ans = ans.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return ansHead.next;
}

// ============================================

// Approach 2: Dummy head with carry propagation
// Formula/Logic: currentSum = x + y + carry; append currentSum % 10 and keep currentSum / 10 for the next node.
// - Create a dummy head so the first digit can be appended with the same logic as every later digit.
// - Walk both input lists together while a node or carry exists.
// - Attach the current digit to the tail and advance both list pointers until completion.
// Time complexity: O(max(n, m)) because every digit participates in a constant amount of work once.
// Space complexity: O(max(n, m)) because each output digit creates a new node in the result list.

// ============================================

function addTwoNumbersWithDummy(l1, l2) {
  const dummy = new NodeList();
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    const sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new NodeList(sum % 10);
    current = current.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return dummy.next;
}

// ============================================
// Best Approach: Approach 2 - Dummy head with carry propagation
// Why: It is cleaner than the original version because the same append logic works for the first digit and every later digit, while keeping the carry behavior precise.
// Time complexity: O(max(n, m)), Space complexity: O(max(n, m))
// Use case: This is the standard interview solution for LeetCode 2 because it directly models decimal addition and keeps the linked-list traversal easy to reason about.
// ============================================

