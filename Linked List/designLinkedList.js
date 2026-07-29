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
