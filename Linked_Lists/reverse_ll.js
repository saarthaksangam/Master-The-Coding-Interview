
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
    
    traverseToIndex(index) {
      let counter = 0
      let currentNode = this.head
      while(counter !== index) {
        currentNode = currentNode.next
        counter++
      }
      return currentNode
    }

    insert(index, value) {
      if(index >= this.length) {
        return this.append(value)
      }
      const newNode = new Node(value)
      const leader = this.traverseToIndex(index - 1)
      const holdingPointer = leader.next
      leader.next = newNode
      newNode.next = holdingPointer
      this.length++
      return this.printList()
    }

    remove(index) {
      if(index >= this.length) {
        console.log("Entered index out of bounds")
      }
      if(this.length === 0) {
        console.log("Linked List is empty");
      }
      const leader = this.traverseToIndex(index - 1)
      const unwantedNode = leader.next
      leader.next = unwantedNode.next
      delete this.unwantedNode
      this.length--
      return this.printList()
    }

    reverse() {
        if(!this.head.next) {
            return this.head
        }
        let first = this.head
        this.tail = this.head
        let second = first.next
        while(second) {
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }
        this.head.next = null
        this.head = first
    }

   
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.prepend(7);
  myLinkedList.append(15);
  myLinkedList.insert(2, 99);
  myLinkedList.insert(20, 88);
  console.log(myLinkedList.printList());
  myLinkedList.remove(2)
  console.log(myLinkedList.printList());
  
    
  
  
  