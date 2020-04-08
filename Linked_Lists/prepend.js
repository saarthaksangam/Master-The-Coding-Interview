// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    prepend(value) {
      //Code here
      const newNode = {
          value: value,
          next: null
      }
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
  
  
  
  