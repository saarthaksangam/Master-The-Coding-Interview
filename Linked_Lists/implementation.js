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

    printList() {
      const array = []
      let currentNode = this.head
      while(currentNode !== null) {
        array.push(currentNode.value)
        currentNode = currentNode.next
      }
      return array.join(' -> ')
    }

    // insert(index, value) {
    //   const newNode = new Node(value)
    //   let i=0
    //   while(i<index) {
    //     let insert_after_node = this.head.next
    //     i++
    //   }
    //   insert_after_node.value = value

    // }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.prepend(7);
  myLinkedList.append(15);
  console.log(myLinkedList.printList());
    
 // myLinkedList.append(16);
  
  
  
  