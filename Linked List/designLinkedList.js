// 1 Node - Create node in LL

function Node(val) {
  this.val = val;
  this.next = null;
}

// create new node

let newNode = new Node(5);

// 2 Linked list(creating head) this is inisilize linklist

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

// 3: Add new node to head

function addAtHead(val) {
  let newNode = new Node(val);
  newNode.next = this.head; // where new node point.
  this.head = newNode;
  this.size++;
}

// 4 Add new node to tail position.

function addAtTail(val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  }
  let curr = this.head;
  while (curr.next != null) {
    curr = curr.next;
  }
  curr.next = newNode; //no need to add nell here as while adding new node nNode() there is next null.
  this.size++;
}

// 5 Add at index

function addAtIndex(index, val) {
  let newNode = new Node(val);
  if (index < 0 || index >= this.size) return;
  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
    return;
  } else {
    let cur = this.head;
    for (let i = 0; i < index - 1; i++) {
      cur = cur.next;
    }
    newNode.next = cur.next; // these condition shold be in order
    cur.next = newNode;
  }
}

// 6 get an Element

function getAtIndex(index) {
  if (index < 0 || index >= this.size) return -1;
  let cur = this.head;
  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur.val;
}

// 7 delet at index

function delAtIndex(index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    let cur = this.head;
    for (let i = 0; i < index - 1; i++) {
      cur = cur.next;
    }
    cur.next = cur.next.next;
  }
  this.size--;
}

// -----------------------------------------------------------
// ===========================================================

// ============================================
// LINKED LIST - Introduction
// ============================================
// A Linked List is a linear data structure where elements ("nodes")
// are NOT stored in contiguous memory (unlike arrays).
// Each node stores:
//   1. Its own value (data)
//   2. A reference ("pointer") to the NEXT node in the list
//
// Because of this, to reach any node you must start from the
// "head" (first node) and follow the "next" pointers one by one.
//
// Advantages: fast insertion/deletion (no shifting elements like arrays)
// Disadvantage: no random access (can't jump to index directly, must traverse)

// 1) Node - Create node in LL
// ---------------------------------------------
// A Node is the basic building block of a linked list.
// val  -> stores the actual data
// next -> stores reference to the next node (null means "no next node / end of list")

function Node(val) {
  this.val = val;
  this.next = null;
}

// create new node
// This just creates a single standalone node with value 5.
// It is NOT yet connected to any linked list.
let newNode = new Node(5);

// 2) Linked List (creating head) - this initializes the linked list
// ---------------------------------------------
// The MyLinkedList "class" represents the whole list.
// head -> points to the FIRST node of the list (starting point for traversal)
// size -> keeps track of how many nodes are currently in the list
// When the list is empty, head = null and size = 0.

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

// 3) Add new node to head
// ---------------------------------------------
// "Head insertion" means the new node becomes the FIRST node of the list.
// Steps:
//   a. Create the new node
//   b. Point new node's "next" to the CURRENT head (so we don't lose the rest of the list)
//   c. Update "head" to be this new node
// Time complexity: O(1) - fast, because no traversal needed

function addAtHead(val) {
  let newNode = new Node(val);
  newNode.next = this.head; // where new node point.
  this.head = newNode;
  this.size++;
}

// 4) Add new node to tail position
// ---------------------------------------------
// "Tail insertion" means the new node becomes the LAST node of the list.
// Since we don't keep a direct reference to the last node here,
// we must traverse (walk) from head all the way to the end.
// Steps:
//   a. Create new node
//   b. If list is empty, this new node itself becomes the head
//   c. Otherwise, walk (curr = curr.next) until curr.next is null (i.e., curr is the last node)
//   d. Attach new node after the last node
// Time complexity: O(n) - slower, because it may traverse the whole list

function addAtTail(val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  }
  let curr = this.head;
  while (curr.next != null) {
    curr = curr.next;
  }
  curr.next = newNode; //no need to add null here as while adding new node Node() there is next null.
  this.size++;
}

// 5) Add at index
// ---------------------------------------------
// Inserts a new node at a specific position ("index") in the list.
// Index counting starts from 0 (0 = head position).
// Cases handled:
//   a. index == 0        -> same as inserting at head
//   b. index == this.size -> same as inserting at tail (end of list)
//   c. otherwise          -> walk to the node JUST BEFORE the target index,
//                            then "rewire" pointers to insert new node in between
// Time complexity: O(n) in worst case, since we may need to traverse to reach the index

function addAtIndex(index, val) {
  let newNode = new Node(val);
  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
    return;
  } else {
    let next = this.head;
    for (let i = 0; i < index - 1; i++) {
      cur = cur.next;
    }
    newNode.next = cur.next;
    cur.next = newNode;
  }
}

// 6) Get an Element
// ---------------------------------------------
// This function retrieves the VALUE stored at a given index in the list.
// Since a linked list doesn't support direct/random access like an array
// (you can't just do list[2]), we must "walk" from the head, one node at a
// time, until we reach the desired index.
//
// Steps:
//   a. Validate the index — if it's negative or beyond the list size, it's invalid, return -1
//   b. Start a pointer "cur" at the head (position 0)
//   c. Move "cur" forward one step at a time, "index" number of times
//   d. Once the loop ends, "cur" is sitting at the target node — return its value
//
// Time complexity: O(n) - in the worst case, you may traverse the whole list

function getAtIndex(index) {
  if (index < 0 || index >= size) return -1;
  let cur = this.head;
  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur.val;
}

// 7) Delete at index
// ---------------------------------------------
// This function removes the node at a given index.
// To delete a node, we don't actually need to touch the node itself —
// we just need to change the "next" pointer of the PREVIOUS node so that
// it skips over the node we want to delete (this "unlinks" it from the chain).
//
// Cases handled:
//   a. Invalid index (negative or >= size) -> do nothing, just return
//   b. index === 0 (deleting the head) -> simply move head to head.next
//      (this drops the first node and the second node becomes the new head)
//   c. Otherwise -> walk to the node JUST BEFORE the target index ("cur"),
//      then skip over the target node by pointing cur.next to cur.next.next
//
// Time complexity: O(n) - may need to traverse to reach the index

function delAtIndex(index) {
  if (index < 0 || index >= size) return;
  if (index === 0) {
    this.head = this.head.next;
  }
  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;
  this.size--;
}
