// Problem: Find the node where two singly linked lists intersect. If the lists do not intersect,
// return null. The lists may have different lengths. Intersection is determined by reference equality,
// not by value equality.
//
// Example:
// listA = [4,1,8,4,5]
// listB = [5,6,1,8,4,5]
// Intersection node is the node with value 8 (they share the same tail starting from node 8)
// Result: Reference to the node with value 8
//
// LeetCode reference:
// - Problem #160: Intersection of Two Linked Lists
// - Link: https://leetcode.com/problems/intersection-of-two-linked-lists/
// Note: Approach 3 (Two Pointers) below is the optimal solution because it uses no extra space and
// is linear time with elegant logic.

// ============================================

// Approach 1: Brute Force with Hash Set
// Formula/Logic: Store all node references from list A in a Set, then iterate list B and check
// if any node exists in the Set. First match is the intersection point.
// - Traverse list A completely, storing each node reference in a Set
// - Traverse list B node by node, checking if the current node exists in the Set
// - Return the first node found in Set (intersection point) or null if no match
// Time complexity: O(m + n) where m and n are lengths of listA and listB, because we traverse both lists once
// Space complexity: O(m) because we store all nodes from listA in a hash set

// ============================================

function getIntersectionNode_BruteForce(headA, headB) {
  if (!headA || !headB) return null;

  // Store all nodes from list A in a Set
  const nodeSet = new Set();
  let current = headA;

  while (current) {
    nodeSet.add(current);
    current = current.next;
  }

  // Traverse list B and find first node that exists in Set
  current = headB;
  while (current) {
    if (nodeSet.has(current)) {
      return current;
    }
    current = current.next;
  }

  return null;
}

// ============================================

// Approach 2: Hash Map with Node Values
// Formula/Logic: Similar to hash set but stores both node reference and position. Useful for debugging
// or tracking where intersection occurs in both lists.
// - Create a Map to store each node from listA with its position
// - Iterate listB and check if each node exists in the Map
// - Return the matching node or null
// Time complexity: O(m + n) because we traverse both lists once
// Space complexity: O(m) because we store all nodes from listA in a hash map

// ============================================

function getIntersectionNode_HashMap(headA, headB) {
  if (!headA || !headB) return null;

  // Store all nodes from list A in a Map with their positions
  const nodeMap = new Map();
  let current = headA;
  let pos = 0;

  while (current) {
    nodeMap.set(current, pos);
    current = current.next;
    pos++;
  }

  // Traverse list B and find first node that exists in Map
  current = headB;
  while (current) {
    if (nodeMap.has(current)) {
      return current;
    }
    current = current.next;
  }

  return null;
}

// ============================================

// Approach 3: Two Pointers (Optimal)
// Formula/Logic: Use two pointers starting from heads of both lists. Move them at same speed.
// When one reaches end, reset it to the head of the other list. Both pointers will eventually
// meet at the intersection node (or both reach null if no intersection).
// Insight: If lists intersect at node C with lengths: listA_unique + C, listB_unique + C,
// then pointerA travels (listA_unique + C + listB_unique) and pointerB travels the same distance,
// meeting exactly at C.
// - Initialize two pointers at heads of listA and listB
// - Move both pointers one step at a time
// - When a pointer reaches null, redirect it to the head of the other list
// - When both pointers point to the same node (or both are null), return that node
// Time complexity: O(m + n) because each pointer traverses at most m + n nodes
// Space complexity: O(1) because we only use two pointers, no extra data structures

// ============================================

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let pointerA = headA;
  let pointerB = headB;

  // Move both pointers. When one reaches end, redirect to other list's head.
  // They will meet at intersection (or both become null if no intersection).
  while (pointerA !== pointerB) {
    pointerA = pointerA === null ? headB : pointerA.next;
    pointerB = pointerB === null ? headA : pointerB.next;
  }

  return pointerA; // Returns intersection node or null if no intersection
}

// ============================================

// Best Approach: Two Pointers (Approach 3)
// Why: Achieves optimal O(n+m) time with O(1) space, uses elegant pointer manipulation to handle
// different list lengths without needing extra data structures.
// Time complexity: O(m + n), Space complexity: O(1)
// Use case: Production code, interviews where space optimization is valued, or when working with
// memory-constrained systems. The two-pointer technique is a classic interview pattern that
// demonstrates deep understanding of pointer manipulation.

// ============================================
