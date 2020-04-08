class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
        //Code here
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
      //Code here
      const newNode = new Node(value)
      newNode.next = this.head
      this.head = newNode
      this.length++
      return this
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.prepend(7);
  console.log(myLinkedList);
  
 // myLinkedList.append(16);
  
  
  
  