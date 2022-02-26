class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    let foundNode = this.head;
    let idx = 0;
    while (idx !== index) {
      foundNode = foundNode.next;
      idx++;
    }
    foundNode.prev.next = foundNode.next;
    foundNode.next.prev = foundNode.prev;
    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }
}
