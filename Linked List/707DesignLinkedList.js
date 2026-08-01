/**
 * 707. Design Linked List
 * Implement a singly linked list with the following operations:
 *   - get(index): return the value of the index-th node, or -1 if invalid
 *   - addAtHead(val): insert a node at the beginning
 *   - addAtTail(val): append a node at the end
 *   - addAtIndex(index, val): insert a node before the index-th node
 *   - deleteAtIndex(index): delete the index-th node if valid
 *
 * Notes:
 *   - Indexing is 0-based.
 *   - If index == size in addAtIndex, the new node is appended.
 *   - If index > size in addAtIndex, the operation is ignored.
 */

function Node(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let cur = this.head;
  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
    this.size++;
    return;
  }
  let cur = this.head;
  while (cur.next != null) {
    cur = cur.next;
  }
  cur.next = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  const newNode = new Node(val);
  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }
  newNode.next = cur.next;
  cur.next = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }
  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// Example usage:
// const linkedList = new MyLinkedList();
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
// const value = linkedList.get(1); // returns 2
// linkedList.deleteAtIndex(1); // now list becomes 1->3
